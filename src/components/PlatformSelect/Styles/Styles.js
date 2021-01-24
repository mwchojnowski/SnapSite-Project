import Styled from "styled-components"

export const Wrapper = Styled.div`
    width:100%;
    height:250px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:url('https://i.ibb.co/LNvvnj9/imageedit-2-3663984984.png');
    margin: 50px 0;
    font-family: 'Enriqueta', serif;
    @media only screen and (max-width: 800px){
        height:450px;
    }
`;

export const Container = Styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    @media only screen and (max-width: 800px){
        flex-direction:column;
    }
`;

export const PlatformBlock = Styled.a`
    background:white;
    padding:50px;
    margin:0 100px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);
    transition:.4s;
    &:hover{
        position:relative;
        top:-5px;
        -webkit-box-shadow: 0px 0px 5px 6px rgba(0,0,0,0.2);
        -moz-box-shadow: 0px 0px 5px 6px rgba(0,0,0,0.2);
        box-shadow: 0px 0px 5px 6px rgba(0,0,0,0.2);
    }
    @media only screen and (max-width: 800px){
        margin-top:25px;
    }
`;

export const Logo = Styled.img`
    height:50px;
`;