import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  .lo {
    position: absolute;
    top: 17rem;
    font-size: 30px;
  }

  h1 {
    margin: 3rem 0;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }

  .botoes {
    display: flex;
    gap: 1rem;
  }

  button {
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
  }

  button:hover {
    background: #5848c2;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  release-date {
    opacity: 0.5;
  }

  .radio-container {
    display: flex;
    flex-direction: row;
    margin: 10px 1px;
    gap: 6px;
    overflow-x: auto;
    width: 600px;
    user-select: none;
  }
  .radio-container::-webkit-scrollbar {
    display: none;
  }
  .radio {
    display: flex;
    align-items: center;
  }
  .radio input[type="radio"] {
    display: none;
  }
  .radio label {
    cursor: pointer;
  }
  .radio label::before {
    content: attr(data-number);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 2px solid #5848c2;
    border-radius: 50%;
    text-align: center;
  }
  .radio input[type="radio"]:checked + label::before {
    background-color: #5848c2;
    color: white;
  }

  @media (max-width: 568px) {
    && {
      padding: 2rem 0;
    }

    .details {
      max-width: 80%;
      margin: 0;
    }
    .botoes {
      display: flex;
      width: 100%;
      gap: 0;
      justify-content: space-between;
    }

    .radio-container {
      width: 310px;
    }

    .radio label::before {
      width: 50px;
      height: 50px;
      font-size: 20px;
    }
  }
`;
