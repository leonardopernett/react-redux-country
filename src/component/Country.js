import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  width: 264px;
  border-radius:5px;
  overflow:hidden;
  box-shadow: 0 0 7px 2px rgba(0,0,0, .07);
  img {
    width: 100%;
    height: 160px;
    object-fit:cover
  }
  .details{
      padding:1em;
  }
  h2{
      margin:0 0 1rem 0;
      font-weight:bold;
  }
  p {
      margin:5px 0;
      font-size:16px;
  }
`;

export default function Country({ name, flag, capital, region, population }) {
  return (
    <CountryStyled>
      <img loading="lazy" src={flag} alt="" />
      <div className="details">
      <h2>{name}</h2>
        <p>Poblacion: {population}</p>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
      </div>
    </CountryStyled>
  );
}
