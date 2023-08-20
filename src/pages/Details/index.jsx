import React, { useEffect, useState, createContext } from "react"
import { useParams, Link } from "react-router-dom"
import { apiKey } from "../../config/key"
import { Container } from "./styles"
import { LoadingOutlined } from '@ant-design/icons';
import { Radio } from 'antd';


function Details() {
    const { id } = useParams()
    const { media } = useParams()
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

        fetch(`https://api.themoviedb.org/3/${media}/${id}?language=pt-BR&page=1`, options)
            .then(response => response.json())
            .then(data => {

                console.log(data);

                const movie = {
                    id,
                    title: data.title,
                    name: data.name,
                    sinopse: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    releaseDate: data.release_date,
                    imdb: data.imdb_id,
                    releaseDate1: data.first_air_date,
                    temporada: data.seasons
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
                            {media === 'movie' ? (
                                <h1>{movie.title}</h1>
                            ) : (
                                <h1>{movie.name}</h1>
                            )}

                            <span>Sinopse: {movie.sinopse}</span>
                            {media === 'movie' ? (
                                <span className="release-date" >Data de lançamento: {movie.releaseDate}</span>
                            ) : (
                                <span className="release-date" >Data de lançamento: {movie.releaseDate1}</span>
                            )}

                            <div className="botoes" >
                                <Link to="/search" ><button>Voltar</button></Link>
                                {media === 'movie' ? (
                                    <a href={`https://embed.warezcdn.net/filme/${movie.imdb}`} > <button>Assistir</button> </a>
                                ) : (
                                    <a href={`https://embed.warezcdn.net/serie/${movie.imdb}`} > <button>Assistir</button> </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    )
}


export default Details