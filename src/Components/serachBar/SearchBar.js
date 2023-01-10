import React, {useState} from 'react'
import styled from 'styled-components'
import swal from 'sweetalert';

const Input = styled.input`
padding: 5px 8px;
font-size: 16px;
border-width: 1px;
border-color: #CCCCCC;
background-color: #FFFFFF;
color: #000000;
border-radius: 10px 0px 0px 10px;
box-shadow: 0px 0px 5px rgba(66,66,66,.75);
text-shadow: 0px 0px 5px rgba(66,66,66,.75);

&:focus {
outline:none;
}
`

const Boton = styled.button`
padding: 6px;
font-size: 16px;
border-radius: 0px 10px 10px 0;
margin-left: 0px;
border: none;
background-color: #2D4263;
color: white;
&:hover {
background-color: hsl(218, 37%, 20%);
cursor: pointer;
}

`


export default function SearchBar( {submitHandler, handleChange, query}) {

    
    // console.log(Products.filter(product=> product.name.toLowerCase().includes("fe")))



  return (
    <form>
        <Input value={query} onChange={handleChange} name='keyword' placeholder='Buscar...'/>
        <Boton onClick={() => submitHandler(query)}>Buscar</Boton>
    </form>
  )
}

