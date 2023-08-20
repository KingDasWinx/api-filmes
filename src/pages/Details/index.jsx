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

    const [season, setSeason] = useState();

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

    const handleChange = (e) => {
        setSeason(e.target.value);
    };


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

                            {media === 'movie' ? (
                                <div>
                                </div>
                            ) : (
                                <div className="temporada">
                                    <p className="temporada-text">Temporadas</p>
                                    <div className="radio-container">
                                        {movie.temporada ? movie.temporada.map((item, key) => {
                                            return (
                                                <>
                                                    <div className="radio">
                                                        <input value={season} onChange={(e) => handleChange(e)} type="radio" id={key} name="radios" />
                                                        <label for={key} data-number={item.season_number}></label>
                                                    </div>
                                                </>
                                            )
                                        }) : null}
                                    </div>
                                </div>

                            )}

                            


                            <div className="botoes" >
                                <Link to="/search" ><button>Voltar</button></Link>
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