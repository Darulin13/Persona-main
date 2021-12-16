import React from "react";
import * as S from "./styles";

import { graphql, useStaticQuery } from "gatsby";

export function Main() {
  const data = useStaticQuery(graphql`
    query {
      persona {
        mains {
          background {
            url
          }
          button
          learn
          other
          logo {
            url
          }
          persona1 {
            url
          }
          persona2 {
            url
          }
          persona3 {
            url
          }
          persona4 {
            url
          }
          title
          title2
          titlepers1
          titlepers2
          titlepers3
          titlepers4
          trailer
        }
      }
    }
  `);

  const {
    background,
    button,
    learn,
    other,
    logo,
    persona1,
    persona2,
    persona3,
    persona4,
    title,
    title2,
    titlepers1,
    titlepers2,
    titlepers3,
    titlepers4,
    trailer
  } = data.persona.mains[0];
  console.log("Main", data);

  return (
    <S.Container>
      <S.Firstmain>
        <div>
          <img src={background.url} alt=" background" />
        </div>
        <div class="icon">
          <img src={logo.url} alt=" logo" />
          <article>
            <h1>Changing the world Takes the heart</h1>
          </article>
          <button>{button}</button>
        </div>
      </S.Firstmain>

      <S.Games>
        <h1>{other}</h1>
        <article>
          <div>
            <img src={persona1.url} alt=" persona 1" />
            <p>{titlepers1}</p>
            <button>{learn}</button>
          </div>
          <div>
            <img src={persona2.url} alt=" persona 2" />
            <p>{titlepers2}</p>
            <button>{learn}</button>
          </div>
          <div>
            <img src={persona3.url} alt=" persona 3" />
            <p>{titlepers3}</p>
            <button>{learn}</button>
          </div>
          <div>
            <img src={persona4.url} alt=" persona 4" />
            <p>{titlepers4}</p>
            <button>{learn}</button>
          </div>
        </article>
      </S.Games>
      <S.Trailers>
        <picture>
          <h1>{trailer}</h1>
        </picture>

        <div>
          <iframe
            src="https://www.youtube.com/embed/vjSHjAoQty4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/RP-mvJE9EQM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/RP-mvJE9EQM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </S.Trailers>
    </S.Container>
  );
}
