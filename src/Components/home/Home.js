import React from 'react';
import Navbar from "../navbar/Navbar";
import ProductList from '../productList/ProductList';
import styled from 'styled-components';


export const  Home = () => {

    // const Container = styled.div`
    // margin: 0 0 50px 0;
    // `

return (
    <>
    <Navbar/>
    <ProductList/>
    </>
)
}

export default Home
