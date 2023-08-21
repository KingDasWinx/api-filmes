import styled from "styled-components"

export const PlayerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #282a36;


    .player-div {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }

    .embed {
        border-radius: 100px;
        width: 100%;
        height: 90vh;
        padding: 0px 0px;
        max-width: 1200px;
    }

    iframe {
        width: 100%;
        height: 90vh;
        border-radius: 10px;
    }

    @media (max-width: 500px) {
        .player-div {
            align-items: normal;
        }
        iframe {
            height: 93vh;
        }
    }

`