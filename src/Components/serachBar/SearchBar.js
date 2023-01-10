import React from 'react'
import styled from 'styled-components'
import swal from 'sweetalert';

export default function SearchBar() {

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        if(keyword.length === 0) {
            swal("Tienes que ingresar al menos un producto")
        } else if (keyword.length < 4){
            swal(<h5>Ingresa mas de 4 caracteres</h5>)
        } else {
            e.currentTarget.keyword.value = '';
            
        }
    }

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
border-radius: 10px;
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
        <Input name='keyword' placeholder='Buscar...'/>
        <Boton>Buscar</Boton>
    </form>
  )
}
