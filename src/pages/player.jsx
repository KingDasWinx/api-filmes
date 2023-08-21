import React, { useEffect, useState } from "react";
import { PlayerContainer } from "../styles/player-style";
import { useParams } from "react-router-dom";



function WarezPlayer({ imdbId, mediaType }) {
    const { imdb_id } = useParams()
    const { media } = useParams()
    const type = media === 'filmes' ? 'filme' : 'serie';
    const season = '1';
    const episode = '1';

    useEffect(() => {
        function warezPlugin(type, imdb, season, episode) {
            if (type === 'filme') {
                season = '';
                episode = '';
            } else {
                if (season !== '') {
                    season = '/' + season;
                }
                if (episode !== '') {
                    episode = '/' + episode;
                }
            }
            const frame = document.getElementById('embedWarezCdn');
            frame.innerHTML += `<iframe className="iframe-embed" src="https://embed.warezcdn.com/${type}/${imdb_id}${season}${episode}" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>`;
        }

        warezPlugin(type, imdbId, season, episode);
    }, [imdbId, mediaType]);

    return (
        <PlayerContainer>
            <div className="player-div">
                <div className="embed" id="embedWarezCdn"></div>
            </div>
        </PlayerContainer>
    )
}

export default WarezPlayer;