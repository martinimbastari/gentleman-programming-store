import React from 'react'
import styled from 'styled-components'
import swal from 'sweetalert';

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    
    const countries = [

  { name: "Belgium", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "New Zealand", continent: "Australasia" },
  { name: "Italy", continent: "Europe" },
  { name: "South Africa", continent: "Africa" },
  { name: "China", continent: "Asia" },
  { name: "Paraguay", continent: "South America" },
  { name: "Usa", continent: "North America" },
  { name: "France", continent: "Europe" },
  { name: "Botswana", continent: "Africa" },
  { name: "Spain", continent: "Europe" },
  { name: "Senegal", continent: "Africa" },
  { name: "Brazil", continent: "South America" },
  { name: "Denmark", continent: "Europe" },
  { name: "Mexico", continent: "South America" },
  { name: "Australia", continent: "Australasia" },
  { name: "Tanzania", continent: "Africa" },
  { name: "Bangladesh", continent: "Asia" },
  { name: "Portugal", continent: "Europe" },
  { name: "Pakistan", continent"Asia" },

];

    const submitHandler = e => {
        e.preventDefault();
        setSearchInput(e.target.value);
        const keyword = e.currentTarget.keyword.value.trim();
        if(keyword.length === 0) {
            swal("Tienes que ingresar al menos un producto")
        } else if (keyword.length < 4){
            swal("Ingresa mas de 4 caracteres")
        } else {
            if (searchInput.length > 0) {
    countries.filter((country) => {
    console.log(country.name.match(searchInput))
});
}    
        }
    }

    const Input = styled.input`
    padding: 5px 8px;
    font-size: 16px;
    border-width: 1px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: #000000;
    border-style: hidden;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(66,66,66,.75);
    text-shadow: 0px 0px 5px rgba(66,66,66,.75);

&:focus {
    outline:none;
}
    `

const Boton = styled.button`
padding: 6px;
font-size: 16px;
border-radius: 0px;
margin-left: 5px;
border: none;
background-color: #2D4263;
color: white;
&:hover {
    background-color: hsl(218, 37%, 20%);
    cursor: pointer;
}

`

  return (
    <form onSubmit={submitHandler}>
        <Input value={searchInput} name='keyword' placeholder='Buscar...'/>
        <Boton>Buscar</Boton>
    </form>
  )
}
