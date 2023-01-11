import React from "react";
import styled from "styled-components";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";


const Container = styled.div`
background-color: #141C29;
/* background-color: #2D4263; */
color: black;
box-sizing: border-box;
position: absolute;
max-width: 100%;
min-width: 100%;
min-height: 100%;
font-family: 'Poppins', sans-serif;

`

function App() {
  return (
    <>
      <Container>
        <Home/>
        <Footer/>
      </Container>
    </>
  );
}

export default App;
