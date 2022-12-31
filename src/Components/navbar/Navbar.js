import React, { useState } from 'react'
import styled from 'styled-components'
import "./navbar.css"


const NavbarContainer = styled.div `
max-height: 200px;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
background-color: #2D4263;
z-index: 100;
`

// const HamburgerMenu = styled.div `
// display: none;
// width: 40px;
// height: 40px;
// margin: 20px;
// @media (max-width: 768px) {
//   display: inline-flex;
// }
// `

const ContainterLinks = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px;

@media (max-width: 768px) {
  display: none;
}
`
const ContainerImg = styled.div `
max-height: 150px;
max-width: 150px;
display: flex;
justify-content: center;
align-items: center;
padding: 30px;
`

const Li = styled.li `
text-decoration: none;
list-style: none;
padding: 10px;
font-size: 20px;

`
const A = styled.a  `
 text-decoration: none;
 color: black;
 color: white;
 margin: 5px;
 &:hover {
    color: #141C29;
  }
`

export default function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <NavbarContainer id='inicio'>
        <ContainerImg>
          {/* <img alt='gentleman-logo' src={icon} height="100%" width="100%" ></img> */}
          <svg xmlns='http://www.w3.org/2000/svg'
              fill="#fff"
              height="150px"
              width="150px"
              version="1.1"
              id="Layer_1"
              xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              space="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0">
              </g>
              <g id="SVGRepo_iconCarrier">
                
              <g>
              <g>
              <g>
              <path d="M191.556,304.444c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16 C207.556,311.612,200.388,304.444,191.556,304.444z">
              </path>
              <path d="M460.434,235.873c-1.099-1.233-2.296-2.481-3.591-3.769c-1.682-1.673-3.514-3.362-5.479-5.072 c-2.396-2.084-4.756-4.008-6.92-5.7l-3.932-10.455c-8.455-26.961-13.12-54.08-14.08-79.88c0.139-0.982,0.235-1.978,0.235-2.998 c0-1.386-0.143-2.738-0.396-4.051c-0.385-34.924,6.133-67.136,19.366-92.856C452.941,16.895,442.633,0,426.667,0H85.333 C70.474,0,60.167,14.811,65.329,28.744c24.487,66.1,26.55,132.891,6.419,181.479l-4.185,11.105 c-2.167,1.692-4.528,3.618-6.926,5.704c-1.965,1.709-3.797,3.398-5.479,5.072c-1.295,1.288-2.492,2.536-3.591,3.769 C22.165,241.658,0,267.566,0,298.667c0,29.521,19.971,54.363,47.143,61.758C74.385,445.762,163.964,512,256,512 s181.615-66.238,208.857-151.575C492.029,353.03,512,328.188,512,298.667C512,267.566,489.835,241.658,460.434,235.873z M127.765,149.333h257.184c1.89,21.019,5.831,42.513,11.843,64H116.129C122.767,193.594,126.629,172.021,127.765,149.333z M394.983,42.667c-6.27,19.847-9.932,41.413-11.004,64H126.794c-1.928-20.967-5.95-42.461-12.062-64H394.983z M85.009,259.704 c-0.127,0.722-0.269,1.338-0.418,1.877C84.757,260.967,84.897,260.341,85.009,259.704z M84.59,261.586 c-0.097,0.349-0.197,0.658-0.3,0.942C84.39,262.215,84.503,261.907,84.59,261.586z M185.698,453.304 c2.814,0.285,5.628,0.431,8.435,0.431c23.296,0,45.845-9.771,61.867-27.072c16.021,17.301,38.571,27.072,61.867,27.072 c2.805,0,5.621-0.146,8.437-0.432c-22.198,10.206-46.233,16.031-70.304,16.031C231.93,469.333,207.896,463.509,185.698,453.304z M336.47,333.566c-0.012,0.014-0.024,0.027-0.036,0.041c-3.912,4.72-9.818,7.726-16.434,7.726 c-11.791,0-21.333-9.542-21.333-21.333s9.542-21.333,21.333-21.333s21.333,9.542,21.333,21.333 C341.333,325.155,339.509,329.881,336.47,333.566z M362.649,431.448c0.035-2.415-0.454-4.834-1.497-7.069 c-8.696-18.607-23.361-32.443-40.649-40.392c8.384-0.065,16.38-1.742,23.701-4.735c9.864,15.075,23.373,25.553,41.596,31.489 C378.698,418.215,370.933,425.151,362.649,431.448z M448,320c-9.931,0-18.548,6.852-20.785,16.528 c-2.984,12.909-7.881,25.421-14.336,37.277c-1.492-0.638-3.078-1.119-4.747-1.409c-16.276-2.826-25.183-9.12-31.585-22.411 C381.298,341.04,384,330.838,384,320c0-35.355-28.645-64-64-64s-64,28.645-64,64c0,24.395,13.64,45.59,33.71,56.39 c-11.2-0.602-22.657,1-33.71,5.067c-40.533-14.933-86.528,3.072-105.152,42.923c-1.044,2.235-1.532,4.653-1.497,7.069 c-31.864-24.224-56.02-57.959-64.566-94.92C82.548,326.852,73.931,320,64,320c-11.791,0-21.333-9.542-21.333-21.333 S52.209,277.333,64,277.333c8.881,0,16.648-5.478,19.816-13.469c0.362-0.411,0.836-0.918,1.433-1.512 c0.956-0.951,2.101-2.007,3.389-3.128c1.299-1.13,2.616-2.221,3.868-3.224H256h64h99.494c1.252,1.003,2.569,2.094,3.868,3.224 c1.288,1.121,2.433,2.176,3.389,3.128c0.569,0.566,1.041,1.066,1.398,1.468c3.155,8.02,10.951,13.514,19.851,13.514 c11.791,0,21.333,9.542,21.333,21.333S459.791,320,448,320z"
              >
              </path>
              </g> </g> </g> </g>
              </svg>
              
        </ContainerImg>
        <div  className='navbar-smallscreen'>
          <svg 
          onClick={() => setToggleMenu(true)}
          viewBox="0 0 12 12"
          enable-background="new 0 0 12 12"
          id="1" 
          version="1.1" 
          space="preserve" 
          xmlns="http://www.w3.org/2000/svg" 
          xlink="http://www.w3.org/1999/xlink" 
          fill="#000000">
          <g id="SVGRepo_bgCarrier" 
          stroke-width="0">
          </g><g id="SVGRepo_iconCarrier"> <g> 
          <rect fill="white" height="1" width="11" x="0.5" y="5.5"></rect>
          <rect fill="white" height="1" width="11" x="0.5" y="2.5"></rect> 
          <rect fill="white" height="1" width="11" x="0.5" y="8.5"></rect> 
          </g> </g></svg>
          { toggleMenu &&  (
            <div className='smallscreen-overlay'>
              <svg 
              className='close-icon'
            onClick={()=> setToggleMenu(false)}
            height="30px" 
            width="30px" 
            version="1.1" 
            id="Capa_1" 
            xmlns="http://www.w3.org/2000/svg" 
            xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 26 26" space="preserve" 
            fill="#ffff"><g id="SVGRepo_bgCarrier" 
            stroke-width="0"></g><g id="SVGRepo_iconCarrier"> 
            <g> <path fill="#030104;" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25 C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0 L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467 L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468 c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467 C19.033,16.725,19.033,17.138,18.78,17.394z"></path> </g> </g></svg>
            <ul className='smallscreen-links'>
              <li><a href='#inicio'>Inicio</a></li>
              <li><a href='#productos'>Productos</a></li>
              <li><a href='#nosotros'>Sobre Nosotros</a></li>
            </ul>
            </div>
            
          )}
        </div>
        <ContainterLinks className='navbar'>
                <Li><A href='#inicio'>Inicio</A></Li>
                <Li><A href='#productos'>Productos ↓</A></Li>
                <Li><A href='#nosotros'>Sobre nosotros</A></Li>
        </ContainterLinks>
        
    </NavbarContainer>
  )
}
