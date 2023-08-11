import React, { useEffect, useState, createContext } from "react"
import { useParams, Link } from "react-router-dom"
import { apiKey } from "../../config/key"
import { Container } from "./styles"
import { LoadingOutlined } from '@ant-design/icons';


function Details() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${apiKey}`
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR&page=1`, options)
            .then(response => response.json())
            .then(data => {

                const movie = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    releaseDate: data.release_date,
                    imdb: data.imdb_id
                }
                setMovie(movie)
                setLoading(false);
            })
    }, [])



    return (
            <Container>
                {loading ? (
                    <LoadingOutlined className="lo" />
                ) : (
                    <div>
                    <div className="movie">
                        <img src={movie.image} alt={movie.sinopse} />
                        <div className="details" >
                            <h1>{movie.title}</h1>
                            <span>Sinopse: {movie.sinopse}</span>
                            <span className="release-date" >Release date: {movie.releaseDate}</span>
                            <div className="botoes" >
                                <Link to="/" ><button>Voltar</button></Link>

                                <a href={`https://embed.warezcdn.net/filme/${movie.imdb}`} > <button>Assistir</button> </a>
                            </div>
                        </div>
                    </div>
                    </div>
                )}
            </Container>



    )
}


export default Details