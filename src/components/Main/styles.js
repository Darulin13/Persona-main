import styled from "styled-components";
export const Container = styled.section`
  width: 100%;
  background-color: black;
  height: 300vh;
`;
export const Firstmain = styled.section`
  background-image: url(${(props) => props.back});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  height: 170vh;
  width: 100%;
  align-items: end;

  h1 {
    color: #cfb53b;
    font-size: 40px;
    text-align: center;
    transform: rotate(350deg);
  }
  div {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 170vh;
    align-items: center;
  }
  img {
    width: 100%;
  }
  button {
    transform: rotate(350deg);
    font-size: 70px;
    border: none;
    background-color: transparent;
    width: 100%;
    text-align: center;
    color: #cfb53b;
  }
`;
export const Games = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  button {
    color: white;
    background-color: #cfb53d;
    border: black double;
  }
  article {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  div {
    width: 20%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  img:hover {
    border: outset #cfb53b;
  }
  img {
    height: 40vh;
    width: 50%;
  }
  p {
    color: white;
  }

  h1 {
    align-items: center;
    color: white;

    font-size: 40px;
  }
  picture {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
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

    font-size: 40px;
  }

  picture {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
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
