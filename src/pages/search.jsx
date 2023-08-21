import { SearchContainer } from "../styles/search-style";

import { HeaderContainer, SearchBar } from "../styles/header";
import { Container, MovieList, Movie } from "./Home/style";
import { useState, useEffect, useRef } from "react";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from "framer-motion";
import { LoadingOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import { apiKey } from "../config/key";
import { Link } from "react-router-dom";



function Search() {
    // State que controla o tamanho da largura da TELA
    const [width, setWidth] = useState(window.innerWidth);

    const [open, setOpen] = useState(false);

    const [current, setCurrent] = useState(1);

    //useState dos filmes
    const [movies, setMovies] = useState([]);



    const [moviesFiltered, setMoviesFiltered] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500'

    const [loading, setLoading] = useState(true);

    //useState da SearchBar
    const [busca, setBusca] = useState([])

    //filtra os filmes pela barra de pesquisa
    const lowerCase = busca.toString().toLowerCase();

    // Referenciando o elemento
    const drawnerRef = useRef(null);

    const handleChange = (ev) => {
        setBusca(ev.target.value);
    }


    //puxa a api pra mim
    useEffect(() => {

        //requisitos do TMDB
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${apiKey}`
            }
        };

        fetch(`https://api.themoviedb.org/3/search/multi?query=${busca}&include_adult=false&language=pt-BR&page=${current}`, options)
            .then(response => response.json())
            .then((data) => {
                const filterR = data.results.filter(
                    (result) => result.media_type === 'movie' || result.media_type === 'tv'
                );

                setMovies(filterR);
                setLoading(true)
            })
            

        // Função que seta no state o tamanho da tela
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Função Clickoutside indentifica se o event de click é diferente do elemento referenciado.
        function handleClickOutside(event) {
            if (drawnerRef.current && !drawnerRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        // Cria um evento de decumento onde é clicado e passa a função ClickOutside
        document.addEventListener('click', handleClickOutside);
        // Cria um evento de tela de resize e chama a função de handleResize
        window.addEventListener('resize', handleResize);

        // Remove o evento de tela de resize e o click outside o elemento referenciado
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleClickOutside);
        };


    }, [current, busca])


    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };



    return (
        <div className="fa">
            <SearchContainer>
                <HeaderContainer>
                    {width <= 785 ? (
                        <div className="nav-mobile" ref={drawnerRef}>
                            <div className="hamburger">
                                <MenuOutlined onClick={() => setOpen(true)} />
                            </div>
                            <SearchBar className="search-box">
                                <input
                                    className="search-text"
                                    value={busca}
                                    onChange={handleChange}
                                    type="text"
                                    name="fafa"
                                    placeholder="Minecraft: O filme"
                                />
                                <a className="search-btn" href="#">
                                    <ion-icon className="icon" name="search-outline"></ion-icon>
                                </a>
                            </SearchBar>
                            <AnimatePresence>
                                {open && (
                                    <motion.div
                                        className="drawner"
                                        layout
                                        initial={{ left: "-200px", opacity: 0 }}
                                        animate={{ left: 0, opacity: 1 }}
                                        exit={{ left: "-200px", opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="container">
                                            <div className="categorias-mobile">
                                                <Link to="/">
                                                    <a>Início</a>
                                                </Link>
                                                <a href="#">Filmes</a>
                                                <a href="#">Séries</a>
                                                <a href="#">Animes</a>
                                            </div>
                                            <div className="close">
                                                <CloseOutlined onClick={() => setOpen(false)} />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="nav">
                            <div className="categoria">
                                <Link to="/">
                                    <a href="">Início</a>
                                </Link>
                                <a href="">Filmes</a>
                                <a href="">Séries</a>
                                <a href="">Animes</a>
                            </div>
                            <SearchBar className="search-box">
                                <input
                                    className="search-text"
                                    value={busca}
                                    onChange={handleChange}
                                    type="text"
                                    name="fafa"
                                    placeholder="Minecraft: O filme"
                                />
                                <a className="search-btn" href="">
                                    <ion-icon className="icon" name="search-outline"></ion-icon>
                                </a>
                            </SearchBar>
                        </div>
                    )}
                </HeaderContainer>
            </SearchContainer>

            {busca === '' ?
                <div className="h1-please">
                    <h1>Por-favor escolha um filme!</h1>
                </div>
                :
                <div>
                    {busca != '' ?
                        <Container>
                            <MovieList>
                                {movies.map(movie => {
                                    return (
                                        <Movie key={movie.id}>
                                            <Link to={`/details/${movie.media_type}/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                                            <span>{movie.name}</span>
                                            <span>{movie.title}</span>
                                        </Movie>
                                    )
                                })}
                            </MovieList>
                            <Pagination className="pageRoute" current={current} total={5000} onChange={onChange} />
                        </Container>
                        :
                        <div className="h1-please">
                            <h1>Por-favor escolha um filme!</h1>
                        </div>
                    }
                </div>
            }

        </div>
    )
}

export default Search;