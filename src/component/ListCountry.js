import React, { useEffect, useState} from "react";
import styled from "styled-components";
import Country from "./Country";
import {useSelector, useDispatch} from 'react-redux'
import CountryListRegion from './CountryListRegion'

const ListCountryStyle = styled.div`
  display: grid;
  justify-content: center;
  padding: 4em 2em;
  grid-row-gap: 2em;
  .input-group{
    display:flex
  }
`;

export default function ListCountry() {
  const [inputValue, setInputValue] = useState('');
  const [CountrySelected,setCountrySelected] = useState('');
  
  const countryList  = useSelector(store=>{
      if(CountrySelected !==""){
         return  store.array.countryByRegion
      }else{
         return  store.array.countryList
      } 

  });
  const countryByName = useSelector(store=>store.array.countryByName)
  const dispatch = useDispatch();

 

/*eslint-disable */
  useEffect(()=>{
    getCountry()
  }, []);

  const filterName = (e)=>{
    setInputValue(e.target.value)
    dispatch({
      type:'GET_LIST_BY_NAME',
      payload:e.target.value
    })
  }

  const getCountry = async ()=>{
    const res= await fetch("https://restcountries.eu/rest/v2/all")
    const data = await res.json();
       dispatch({
        type:'GET_LIST_COUNTRY',
        payload:data
       })
  }
  
  const filterRegion= (e)=>{
    setCountrySelected(e.target.value)
    dispatch({
      type:'GET_FILTER_REGION',
      payload:e.target.value
    })
  }

  const clear = ()=>{
    setInputValue('')
    getCountry()
  }

  return (
    <ListCountryStyle>
         
      <CountryListRegion 
        filterRegion={filterRegion}
      />
        <div className="input-group">
          <input type="text" value={inputValue} onChange={filterName} />
          {inputValue && <button onClick={clear}>clear</button>}
        </div>
        
        { (countryByName.length >0 ? countryByName :countryList).map((country) => (
        <Country
          key={country.name}
          flag={country.flag}
          population={country.population}
          region={country.region}
          capital={country.capital}
          name={country.name}
        />
      ))}
    </ListCountryStyle>
  );
}
