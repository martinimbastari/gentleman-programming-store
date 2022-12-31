import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { getFirestore, collection, getDocs} from "firebase/firestore";
// import Itemcard from '../ItemCard/Itemcard';
import ProductsFilter from '../productsFilter/ProductsFilter';
import Carrito from '../carrito/Carrito';




export const  ProductList = ()  => {
    const [data, setData] = useState([]);
    const [showPrice, setShowPrice] = useState();
    const [allProducts, setAllProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [countProducts, setCountProducts] = useState(0);
    

    const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    `

    const ContainerList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 60px 120px 60px;
    padding: 0 0 50px 0;
    @media (max-width: 768px) {
        margin: 0 auto 120px auto;
}
    
    `

    const Card = styled.div `
        /* background-color: #EFF3FA; */
        background-color: #2D4263;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin: 5px;
        text-align: center;
        padding: 10px;
        border-radius: 15px;
        width: 250px;
        height: 400px;
        box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
        border: 1px solid #2D4263;
        transition: all 275ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0s;
        &:hover {
            transform: scale(1.02,1.02);
            box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px 0px;
        }
        @media (max-width: 768px) {
        width: 180px;
        height: 400px;
        }
    `

    const Text = styled.p `
        font-size: 17px;
        text-align: center;
        font-weight: bold;
        max-height:20px;
        color: white;
        @media (max-width: 768px) {
            font-size: 15px;
            max-height:30px;
        }
    `

    const Price = styled.p `
        color: white;
        font-size: 18px;
        padding: 10px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        @media (max-width: 768px) {
            font-size: 15px;
            padding: 10px;
        }
    `
    const Button = styled.button `
        border: none;
        background-color: #263143;
        color: aliceblue;
        width: 100%;
        border-radius: 10px;
        padding: 10px;
        font-weight: 600;
        &:hover {
            background-color: #2C394D;
            cursor: pointer;
        }
    `

useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'Products');
    getDocs(queryCollection)
    .then( res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
}, []) 

    const onAddProduct = (product) => {

        if(allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id 
                ? {...item, quantity: item.quantity + 1} 
                : item);

            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            return setAllProducts([...products]);
        }
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
        
    }
    
    const showLowPrice = ()  => {
        data.sort((a,b) => {
        if (a.price < b.price) {
            return -1;
        } if (a.price > b.price) {
            return 1;
        } else {
            return 0;
        }
        })
        setData(data)
        setShowPrice(true)
        
    }

    const showHighPrice = ()  => {
        data.sort((a,b) => {
        if (a.price > b.price) {
            return -1;
        } if (a.price < b.price) {
            return 1;
        } else {
            return 0;
        }
        })
        setData(data)
        setShowPrice(false)
    }

    


return (
    <>
    <Container>
    <ProductsFilter showLowPrice={showLowPrice} showHighPrice={showHighPrice}/>
    <Carrito allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts} />
    </Container>
    <ContainerList id='productos'>
        {showPrice
        ? (data.map(product => (
        // <Itemcard key={product.id} product={product}/>
            <Card>
                <img width="300px" height="400px" alt='product' src={product.image}/>
                <Text>{product.title}</Text>
                <Price>${product.price}</Price>
                <Button onClick={()=>onAddProduct(product)}>Añadir al carrito</Button>
            </Card>
        )))
        : (data.map(product => (
        // <Itemcard key={product.id} product={product}/>
            <Card>
                <img width="320px" height="300px" alt='product' src={product.image}/>
                <Text>{product.title}</Text>
                <Price>${product.price}</Price>
                <Button onClick={()=>onAddProduct(product)}>Añadir al carrito</Button>
            </Card>
        )))
        }
    </ContainerList>
    </>
)
}

export default ProductList