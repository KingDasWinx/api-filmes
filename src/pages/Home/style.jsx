import styled from "styled-components";

export const Container = styled.div`
  .ant-pagination-options {
    display: none;
  }
  .pageRoute{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
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
  row-gap: 3rem;

  @media(max-width: 450px) {
    &&{
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
  }
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