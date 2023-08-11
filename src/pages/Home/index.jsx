import { Link } from "react-router-dom";
import { apiKey } from "../../config/key";
import { Container, MovieList, Movie, SearchBar } from "./style";
import { useState, useEffect } from "react";
import { Pagination } from 'antd';



function Home() {

    const [current, setCurrent] = useState(1);
    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };

    //useState dos filmes
    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    //useState da SearchBar
    const [busca, setBusca] = useState([])


    const [keyword, setKeyword] = useState([])

    //filtra os filmes pela barra de pesquisa
    const lowerCase = busca.toString().toLowerCase();
    const moviesF = movies.filter(movie => movie.title.toLowerCase().includes(lowerCase));
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
            .then(data => setMovies(data.results))
            

        fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&query=${busca}&language=pt-BR&page=${current}`, options)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [current, busca])

    return (
        <Container>
            <header>
                <div className="categoria">
                    <h1>Início</h1>
                    <h1>Filmes</h1>
                    <h1>Séries</h1>
                    <h1>Animes</h1>
                </div>
                <SearchBar className="search-box" >
                    <input className="search-text" value={busca} onChange={(ev) => setBusca(ev.target.value)} type="text" name="fafa" placeholder="Minecraft: O filme" />
                    <a className="search-btn" href="#">
                        <ion-icon className="icon" name="search-outline"></ion-icon>
                    </a>
                </SearchBar>
            </header>
            <MovieList>
                {moviesF.map(movie => {
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
