import React from 'react'
import styled from 'styled-components'

const CountryListStyled= styled.div`
    .select{
        display:block;
        width:100%;
        padding:10px;
        border:none;
        border: 1px solid #aaa;
        box-shadow: 0 1px 0 1px rgba(0,0,0,.03);
        border-radius: .3em;
        outline:none;
        background:#fff;
        &:hover{
            border-color:#888;
        }
        &:focus{
            border-color: #aaa;
            color: #222; 
        }
    }

`
export default function CountryListRegion(props) {
    return (
        <CountryListStyled>
            <select className="select" onChange={props.filterRegion}>
                <option>seleccione una opcion</option>
                <option value="asia">asia</option>
                <option value="africa">africa</option>
                <option value="americas">america</option>
                <option value="europe">europa</option>
                <option value="oceania">oceania</option>
            </select>
        </CountryListStyled>
    )
}

