import React from 'react'
import styled from 'styled-components'
import swal from 'sweetalert';

export default function SearchBar() {

    const Input = styled.input`
    padding: 5px 8px;
    font-size: 16px;
    border-width: 1px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: #000000;
    border-style: hidden;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(66,66,66,.75);
    text-shadow: 0px 0px 5px rgba(66,66,66,.75);

&:focus {
    outline:none;
}
    `

const Boton = styled.button`
padding: 6px;
font-size: 16px;
border-radius: 0px;
margin-left: 5px;
border: none;
background-color: #2D4263;
color: white;
&:hover {
    background-color: hsl(218, 37%, 20%);
    cursor: pointer;
}

`

  return (
    <form onSubmit={submitHandler}>
        <Input value={searchInput} name='keyword' placeholder='Buscar...'/>
        <Boton>Buscar</Boton>
    </form>
  )
}
