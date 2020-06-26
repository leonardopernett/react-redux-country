import React, {useState} from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux'

const InputListStyled = styled.label`
  max-width:400px;
  display:flex;
  justify-content:between;
  align-items:center;
 
  border-bottom: 1px solid rgba(0, 0, 0, .1);;
  padding: 5px 3px;
  margin:10px auto;
  input {
    border: none;
    border-radius: 5px;
    width: 100%;
    font-size: 14px;
    height: 48px;
    outline: none;
    input::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
  i {
     margin: 0 1em;
     color:#c4c4c4;
  }
`;
export default function InputList(props) {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const filterName = (e)=>{
    setInputValue(e.target.value)
    dispatch({
      type:'GET_LIST_BY_NAME',
      payload:e.target.value
    })
  }

  return (
    <InputListStyled>
      {/* <input type="text" placeholder="Search country" {...props} /> */}
       <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search for Country"
        value={inputValue}
        onChange={filterName}
      />
      {props.inputValue && (
        <button onClick={() => props.setInputValue("")}>clear</button>
      )}
    </InputListStyled>
  );
}
