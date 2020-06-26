import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";
import CountryListRegion from "./CountryListRegion";
import InputList from "./InputList";

const ListCountryStyle = styled.div`
  display: grid;
  justify-content: center;
  padding: .5em 2em;
  grid-row-gap: 2em;
  .input-group {
    display: flex;
  }
`;

export default function ListCountry() {
  const [CountrySelected, setCountrySelected] = useState("");

  const countryList = useSelector((store) =>
    CountrySelected !== ""
      ? store.array.countryByRegion
      : store.array.countryList
  );

  const countryByName = useSelector((store) => store.array.countryByName);
  const dispatch = useDispatch();

  /*eslint-disable */
  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    dispatch({
      type: "GET_LIST_COUNTRY",
      payload: data,
    });
  };

  const filterRegion = (e) => {
    setCountrySelected(e.target.value);
    dispatch({
      type: "GET_FILTER_REGION",
      payload: e.target.value,
    });
  };

  return (
    <Fragment>
      <InputList />
      <ListCountryStyle>
        <CountryListRegion filterRegion={filterRegion} />
        {(countryByName.length > 0 ? countryByName : countryList).map(
          (country) => (
            <Country
              key={country.name}
              flag={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
              name={country.name}
            />
          )
        )}
      </ListCountryStyle>
    </Fragment>
  );
}
