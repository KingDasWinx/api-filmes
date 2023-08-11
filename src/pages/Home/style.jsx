import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    flex-wrap: wrap;
  }

  .categoria {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  h1 {
    text-align: center;
    margin: 4rem 0;
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
  padding: 1rem;
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
  margin-top: 65px;
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
`;