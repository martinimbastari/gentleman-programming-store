import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #BDBDBD;
    padding: 10px;
    position: absolute;
    bottom: 0;
    text-align: center;
`

const Title = styled.h2`
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    display: block;
    text-align: center;
`
return (
    <Container id='nosotros'>
        <Title>Desafio creado para entrevista de trabajo en Gentleman Programming</Title>
        <p>Desarrollado por Martin Imbastari</p>
    </Container>
)
}
