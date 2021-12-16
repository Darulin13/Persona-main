import styled from "styled-components";
export const Container = styled.section`
  width: 100%;
  background-color: black;
  height: 400vh;
`;
export const Firstmain = styled.section`
  width: 100%;
  background-color: black;
  flex-direction: row;
  display: flex;
  border: solid red;

  .icon {
    border: solid green;
    width: 35%;
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;
  }

  h1 {
    color: #cfb53b;
    font-size: 40px;
    text-align: center;
  }
  div {
    border: solid blue;
    width: 65%;
  }
  img {
    width: 100%;
  }
  button {
    font-size: 70px;
    border: none;
    background-color: black;
    color: #cfb53b;
  }
`;
export const Games = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  article {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: solid green;
  }
  div {
    width: 20%;
    border: solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  img {
    border: solid red;
    width: 50%;
  }
  p {
    color: white;
  }

  h1 {
    align-items: center;
    color: white;
    width: 10%;
    border: double #cfb53b;
    font-size: 30px;
  }
`;
export const Trailers = styled.section`
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    color: white;
    border: double #cfb53b;
    font-size: 40px;
  }

  picture {
    width: 22%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-evenly;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  iframe {
    width: 25%;
    height: 185px;
    border: outset #cfb53b;
  }
`;
