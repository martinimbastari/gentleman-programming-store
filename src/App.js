import React from "react";
import styled from "styled-components";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";

const Container = styled.div`
background: white;
height: 100vh;
color: black;
box-sizing: border-box;
min-height: 100%;
    position: relative;
`

function App() {
  return (
    <>
      <Container>
        <Home/>
        {/* <Footer/> */}
      </Container>
    </>
  );
}

export default App;
