import React from "react";
import styled from "styled-components";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";

const Container = styled.div`
background: white;
color: black;
box-sizing: border-box;
position: absolute;

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
