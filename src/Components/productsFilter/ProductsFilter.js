import React from 'react';
import styled from 'styled-components';

export default function ProductsFilter({showLowPrice,showHighPrice}) {
  const Container = styled.div `
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media (max-width: 768px) {
  font-size: 15px;
  padding: 10px 0;
}
  `

const Title = styled.h2 `
font-size: 18px;
margin: 10px;
font-family: Arial, Helvetica, sans-serif;
`
const Opcion = styled.a `
text-decoration: none;
margin: 5px;
background-color: #ffff;
border-radius: 8px;
border: 1px solid grey;
padding: 5px;
color: black;
&:hover {
    background-color: #F2F2F2;
  }
`

  return (
    <Container>
        <Title>Filtrar por:</Title>
        <Opcion href="#" onClick={showLowPrice}>Menor Precio</Opcion>
        <Opcion href="#" onClick={showHighPrice}>Mayor Precio</Opcion>
        {/* <select>
            <option onSelect={showLowPrice}>Menor Precio</option>
            <option>Mayor Precio</option>
        </select> */}
    </Container>
  )
}
