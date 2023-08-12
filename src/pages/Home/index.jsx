import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { apiKey } from "../../config/key";

import { Container, MovieList, Movie, SearchBar } from "./style";

import { Pagination } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from "framer-motion";


function Home() {
    // State que controla o tamanho da largura da TELA
    const [width, setWidth] = useState(window.innerWidth);

    const [open, setOpen] = useState(false);

    const [current, setCurrent] = useState(1);

    //useState dos filmes
    const [movies, setMovies] = useState([]);
    const [moviesFiltered, setMoviesFiltered] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500'

    //useState da SearchBar
    const [busca, setBusca] = useState([])

    const [keyword, setKeyword] = useState([])

    //filtra os filmes pela barra de pesquisa
    const lowerCase = busca.toString().toLowerCase();

    // Referenciando o elemento
    const drawnerRef = useRef(null);

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
        fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${current}`, options)
            .then(response => response.json())
            .then((data) => {
                setMovies(data.results);
                setMoviesFiltered(data.results.filter(movie => movie.title.toLowerCase().includes(lowerCase)));
            })


        fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&query=${busca}&language=pt-BR&page=${current}`, options)
            .then(response => response.json())
            .then(data => setMovies(data.results))

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
        <Container>
            <header>
                {width <= 785 ? (
                    <div className="nav-mobile" ref={drawnerRef}>
                        <div className="hamburger">
                            <MenuOutlined onClick={() => setOpen(true)} />
                        </div>
                        <SearchBar className="search-box" >
                            <input className="search-text" value={busca} onChange={(ev) => setBusca(ev.target.value)} type="text" name="fafa" placeholder="Minecraft: O filme" />
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
                                            <a href="#">Início</a>
                                            <a href="#">Filmes</a>
                                            <a href="#">Séries</a>
                                            <a href="#">Animes</a>
                                        </div>
                                        <div className="close">
                                            <CloseOutlined onClick={() => setOpen(false)}/>
                                        </div>
                                    </div>

                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>)
                    : (
                        <div className="nav">
                            <div className="categoria">
                                <a href="#">Início</a>
                                <a href="#">Filmes</a>
                                <a href="#">Séries</a>
                                <a href="#">Animes</a>
                            </div>
                            <SearchBar className="search-box" >
                                <input className="search-text" value={busca} onChange={(ev) => setBusca(ev.target.value)} type="text" name="fafa" placeholder="Minecraft: O filme" />
                                <a className="search-btn" href="#">
                                    <ion-icon className="icon" name="search-outline"></ion-icon>
                                </a>
                            </SearchBar>
                        </div>
                    )}
            </header>
            <MovieList>
                {moviesFiltered?.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
            <Pagination className="pageRoute" current={current} total={5000} onChange={onChange} />
        </Container>
    );
}

export default Home;
