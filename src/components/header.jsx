import { HeaderContainer, SearchBar } from "../styles/header";
import { useState, useEffect, useRef } from "react";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const HeaderCase = () => {

    // State que controla o tamanho da largura da TELA
    const [width, setWidth] = useState(window.innerWidth);

    const [open, setOpen] = useState(false);

    const [current, setCurrent] = useState(1);

    //useState da SearchBar
    const [busca, setBusca] = useState([]);

    //filtra os filmes pela barra de pesquisa
    const lowerCase = busca.toString().toLowerCase();

    // Referenciando o elemento
    const drawnerRef = useRef(null);

    //puxa a api pra mim
    useEffect(() => {
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
        document.addEventListener("click", handleClickOutside);
        // Cria um evento de tela de resize e chama a função de handleResize
        window.addEventListener("resize", handleResize);

        // Remove o evento de tela de resize e o click outside o elemento referenciado
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("click", handleClickOutside);
        };
    }, [current, busca]);

    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };

    return (
        <HeaderContainer>
            {width <= 785 ? (
                <div className="nav-mobile" ref={drawnerRef}>
                    <div className="hamburger">
                        <MenuOutlined onClick={() => setOpen(true)} />
                    </div>
                    <Link className="fa" to="/search">
                        <SearchBar className="search-box">
                            <input
                                className="search-text"
                                value={busca}
                                onChange={(ev) => setBusca(ev.target.value)}
                                type="text"
                                name="fafa"
                                placeholder="Minecraft: O filme"
                            />
                            <a className="search-btn" href="#">
                                <ion-icon className="icon" name="search-outline"></ion-icon>
                            </a>
                        </SearchBar>
                    </Link>
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
                                            <a href>Início</a>
                                        </Link>
                                        <a href>Filmes</a>
                                        <a href>Séries</a>
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
                        <a href>Início</a>
                        </Link>
                        <a href>Filmes</a>
                        <a href>Séries</a>
                        <a href>Animes</a>
                    </div>
                    <Link to="/search">
                        <SearchBar className="search-box">
                            <input
                                className="search-text"
                                value={busca}
                                onChange={(ev) => setBusca(ev.target.value)}
                                type="text"
                                name="fafa"
                                placeholder="Minecraft: O filme"
                            />
                            <a className="search-btn" href="#">
                                <ion-icon className="icon" name="search-outline"></ion-icon>
                            </a>
                        </SearchBar>
                    </Link>
                </div>
            )}
        </HeaderContainer>
    );
};
