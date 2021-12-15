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

  .icon {
    width: 20%;
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;
  }
  h1 {
    color: white;
  }
  div {
    width: 80%;
  }
  img {
    width: 100%;
  }
`;
export const Games = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: solid green;
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
    font-size: 30px;
  }
  picture {
    border: double #cfb53b;
    width: 10%;
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
