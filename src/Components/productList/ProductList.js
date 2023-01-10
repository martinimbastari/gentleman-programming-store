import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { getFirestore, collection, getDocs} from "firebase/firestore";
// import Itemcard from '../ItemCard/Itemcard';
import ProductsFilter from '../productsFilter/ProductsFilter';
import Carrito from '../carrito/Carrito';
import swal from 'sweetalert';
import SearchBar from '../serachBar/SearchBar';

const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 180px;
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
    padding: 15px 0 0 0;
    border-radius: 15px 15px 0 0 ;
    width: 250px;
    height: 410px;
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
    border: 1px solid #2D4263;
    transition: all 275ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0s;
    &:hover {
        transform: scale(1.02,1.02);
        box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px 0px;
    }
    @media (max-width: 768px) {
    width: 184px;
    height: 400px;
    padding: 0px;
    margin-top: 10px;
    }
`

const Img = styled.img `
@media (max-width: 768px) {
    height:100%;
    padding: 0;
    margin: 0;
}
`

const Text = styled.p `
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    max-height:25px;
    color: white;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 15px;
        max-height:60px;
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
    border-radius: 0 ;
    padding: 10px;
    font-weight: 600;
    &:hover {
        background-color: #2C394D;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        width: 182px;
        height: 70px;
        border-radius: 0;
    }

    
`




export const  ProductList = ()  => {
    const [data, setData] = useState([]);
    const [showPrice, setShowPrice] = useState();
    const [allProducts, setAllProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [countProducts, setCountProducts] = useState(0);
    const [query, setQuery] = useState("");
    


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
        swal("Tu producto se agrego correctamente", "Pulsa el boton para continuar", "success");
        
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

    const submitHandler = (query) => {
        console.log(query)
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(query)
    }
    


return (
    <>
    <Container>
    <ProductsFilter showLowPrice={showLowPrice} showHighPrice={showHighPrice}/>
    <SearchBar query={query} handleChange={handleChange}  submitHandler={submitHandler} />
    <Carrito allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts} />
    
    </Container>
    <ContainerList id='productos'>
        {showPrice
        ? (data.filter(product => product.title.toLowerCase().includes(query)
        ).map(product => (
        // <Itemcard key={product.id} product={product}/>
            <Card>
                <Img width="100%" height="100%" alt='product' src={product.image}/>
                <Text>{product.title}</Text>
                <Price>${product.price}</Price>
                <Button onClick={()=>onAddProduct(product)}>Añadir al carrito</Button>
            </Card>
        )))
        : (data.filter(product => product.title.toLowerCase().includes(query)
        ).map(product => (
        // <Itemcard key={product.id} product={product}/>
            <Card>
                <Img width="320px" height="400px" alt='product' src={product.image}/>
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