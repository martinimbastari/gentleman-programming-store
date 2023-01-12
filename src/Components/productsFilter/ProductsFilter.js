import React from 'react';
import styled from 'styled-components';


const Container = styled.div `
display: flex;
color: white;
text-align: center;
justify-content: center;
align-items: center;
padding: 10px;
flex-wrap: wrap;
@media (max-width: 768px) {
font-size: 12px;
padding: 2px 0;
margin: 0 autos;
}
`

const Title = styled.h2 `
font-size: 15px;
margin: 10px;
font-family: Arial, Helvetica, sans-serif;
@media (max-width: 768px) {
font-size: 13px;
}
`
const Opcion = styled.a `
text-decoration: none;
margin: 5px;
background-color: #ffff;
border-radius: 8px;
border: 1px solid grey;
padding: 1px 6px;
color: black;
&:hover {
  background-color: #F2F2F2;
}
`

export default function ProductsFilter({showLowPrice,showHighPrice,allCategories, categories, filterCategory}) {


  return (
    <Container>
        <Title>Filtrar por:</Title>
        <Opcion href="#" onClick={showLowPrice}>Menor Precio</Opcion>
        <Opcion href="#" onClick={showHighPrice}>Mayor Precio</Opcion>
        {allCategories.map(category => 
          <Opcion 
          onClick={()=> filterCategory(category)}
          key={category}>
            {category}
          </Opcion>
        )}
    </Container>
  )
}
