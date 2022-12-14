import styled from "styled-components";


export const KeyboardButton = styled.button`
background-color: $btn-color;
border-radius: 15%;
border:0.1rem solid #dcdcdc;
display:inline-block;
cursor:pointer;
color: $font-color;
font-family: 'Josefin Slab', serif;
font-size: 2vw;
font-weight: bold;
height: 3.2rem;
width: 2.5rem;
text-decoration:none;

:hover {
    background:linear-gradient(to bottom, #2e3e5b 5%, #2e3e5b 100%);
    background-color:#2e3e5b;
}

:active {
    position:relative;
    top: 0.05rem;
}

`