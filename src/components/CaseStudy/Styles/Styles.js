import Styled from "styled-components"

export const Wrapper = Styled.div`
    width : 100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Enriqueta', serif;
    margin-top:0px;
    padding-bottom:25px;
    background: url("https://i.ibb.co/sgfV4H4/imageedit-1-2712434806.png"); 
`;

export const Container = Styled.div`
    width:62%;
    display:flex;
    flex-direction:row;
    padding-top:20px;
    @media only screen and (max-width: 1200px) {
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    @media only screen and (max-width: 500px){
        width:80%;
    }
`;

export const Img = Styled.img`
    width:50%;
    height:400px;
    border-radius:5px;
    margin:15px;
    @media only screen and (max-width: 1200px) {
        width:100%;
        height:auto
    }
`;

export const Info = Styled.div`
    width:50%;
    margin:15px;
    padding:15px;
    background:white;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    &:hover{
        box-shadow: 1px 1px 30px -9px rgba(45,40,87,.15);
    }
    @media only screen and (max-width: 1200px) {
        width:100%;
        height:auto
    }
`;

export const Logo = Styled.img`
    width:90px;
    margin:25px 0;
`;

export const Title = Styled.h1`
    line-height: 35px;
    margin-bottom: 10px;
    font-size: 38px;
    font-weight: 800;
    @media only screen and (max-width: 500px){
        font-size:25px;
    }
`;

export const Link = Styled.a`
    color:rgba(52,152,219,1);
    font-weight:700;
    margin-top:50px;
    display:flex;
    cursor:pointer;
    width:140px;
    justify-content:space-between;
    &:hover{
        width:160px;
    }
`;

export const Arrow = Styled.div`
    display:flex;
    top:5px;
    font-size:20px;
    align-items:center;
    justify-content:center;
`;
