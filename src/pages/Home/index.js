import { Link } from "react-router-dom";
import { apiKey } from "../../config/key";
import { Container, MovieList, Movie } from "./style";
import { useState, useEffect } from "react";

function Home() {

    const [movies, setMovies] = useState([])

    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        //consumir a api....

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `${apiKey}`
            }
          };

        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}> 
                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    );
}

export default Home;
