import React  from 'react';
import styled from 'styled-components';

export const  Itemcard = ({product:{title, image,price}} ) => {

    const onAddProduct = (e) => {
        let valor = e.target.value
        console.log("valor")
        console.log(valor)
    }

    const Card = styled.div `
    background-color: #EFF3FA;
    margin: 5px;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    transition: all  30ms;
    width: 350px;
    height: 350px;
    &:hover {
        transform: scale(1.02,1.02);
    }
    `

    const Text = styled.p `
    font-size: 18px;
    font-weight: bold;
    `

    const Img = styled.img `
    max-width: 300px;
    max-height: 300px;
    `

    const Price = styled.p `
    font-size: 18px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
    const Button = styled.button `
    border: none;
    background-color: #010100;
    color: aliceblue;
    width: 100%;
    border-radius: 6px;
    padding: 10px;
    font-weight: 600;
    &:hover {
        background-color: #141514;
        cursor: pointer;
    }
    `
return (
    <>
    <Card>
        <Img width="200px" height="200px" alt='product' src={image}/>
        <Text>{title}</Text>
        <Price>${price}</Price>
        <Button onClick={onAddProduct}>Añadir al carrito</Button>
    </Card>
    </>
    
)
}

export default Itemcard
