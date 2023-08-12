import styled from "styled-components";

export const Container = styled.div`
  header {
    width: 100%;
    height: 70px;

    padding: 0px 20px;

    display: flex;
    justify-content: center;
    align-items: center;

  }


  .nav{
    max-width: 1000px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 2rem;
  }
  .ant-pagination-options {
    display: none;
  }
  
  .categoria {
    display: flex;
    gap: 30px;

    a{
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.4rem;
    }

    a:hover{
      opacity: 0.8;
    }
  }

  .nav-mobile{
    width: 100%;
    display: flex;

    justify-content: space-between;
  }

  .hamburger{
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .drawner{
    width: 300px;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;

    

    background-color: #2C2C2C;

    z-index: 999;

    .container{
      width: 100%;

      display: flex;
      justify-content: center;

      position: relative;

      .categorias-mobile{
        width: 70%;
        padding: 40px 20px;

        display: flex;
        flex-direction: column;

        gap: 50px;
      }

      a{
        text-decoration: none;
        color: white;
        font-size: 1.3rem;
        text-align: center;
      }

      .close{
        position: absolute;

        top: 15px;
        right: 25px;

        font-size: 1.5rem;

        color: rgba(255, 255, 255, 0.7);

        padding: 0px 10px;
      }
    }
  }

  .pageRoute{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pageRoute svg{
    fill: #fff;
  }

  .pageRoute a{
    color: #fff;
    &:hover {
      color: #fff;
    }
    
  }

  .ant-pagination-item-active {
      background-color: #33353b;
      border-color: #00a8ff;
    }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  padding: 5rem 1rem;
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #33353b;
  height: 40px;
  border-radius: 40px;
  padding: 10px;

  .search-text:focus{
    width: 300px;
    padding: 0 6px;
  }

  &:hover > .search-text{
    width: 300px;
    padding: 0 6px;
  }

  .search-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00a8ff;
    float: right;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #33353b;
    transition: 2s;
  }

  .search-text {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
    background: transparent;
  }

  @media screen and (max-width: 450px){
    width: 100%;
    margin-left: 10px;
    .search-text:focus{
      width: 100%;
      padding: 0 6px;
    }

    &:hover > .search-text{
      width: 100%;
      padding: 0 6px;
    }
  }
`;