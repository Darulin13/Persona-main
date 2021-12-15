import React from "react";
import * as S from "./styles";

import { graphql, useStaticQuery } from "gatsby";

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      persona {
        footers {
          atlus {
            url
          }
          chifre {
            url
          }
          cookie
          mature {
            url
          }
          privacy
          ps4 {
            url
          }
          face {
            url
          }
          twitch {
            url
          }
          twitter {
            url
          }
          youtube {
            url
          }
          right
        }
      }
    }
  `);

  const {
    atlus,
    chifre,
    cookie,
    mature,
    privacy,
    ps4,
    face,
    twitch,
    twitter,
    youtube,
    right
  } = data.persona.footers[0];
  console.log("Footer", data);

  return (
    <S.Container>
      <S.Social>
        <div>
          <img src={face.url} alt=" icon Facebook" />
          <img src={twitch.url} alt="icon Twitch" />
          <img src={twitter.url} alt=" icon Twitter" />
          <img src={youtube.url} alt="icon Youtube" />
        </div>
      </S.Social>
      <S.Product>
        <div>
          <img src={mature.url} alt=" icon Mature" />
          <img src={atlus.url} alt="icon Atlus" />
          <img src={ps4.url} alt=" icon PS4" />
        </div>
      </S.Product>
      <S.Rights>
        <div>
          <p>{privacy} </p>
          <p> {cookie}</p>
        </div>
      </S.Rights>
      <div>
        <p>{right}</p>
      </div>
    </S.Container>
  );
}
