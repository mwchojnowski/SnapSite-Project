 import styled from "styled-components"

export const Wrapper = styled.div`
    padding-top:200px;
    width : 100%;
    height:400px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Enriqueta', serif;
`;

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100%;
    width:70%;
    @media only screen and (max-width: 500px) {
        width:90%;
    }
`;

export const Title = styled.h1`
    font-size:65px;
    font-weight:900;
    padding-bottom:25px;
    text-align:center;
    width:70%;
    @media only screen and (max-width: 1000px) {
        width:85%;
        font-size:45px;
    }
    @media only screen and (max-width: 500px) {
        width:90%;
        font-size:35px;
    }
`;

export const Text = styled.p`
    font-size:20px;
    padding-bottom:50px;
    letter-spacing:.5px;
    font-weight:400;
    line-height:23px;
    text-align:center;
    width:70%;
`;

export const Button = styled.a`
    height:40px;
    width:150px;
    border:0;
    border-radius: 25px;
    color: white;
    font-size: 16px;
    font-weight:600;
    background-color:rgba(52, 152, 219, 1);
    text-decoration:none;
    display:flex;
    text-align:center;
    padding-top:10px;
    justify-content:center;
    &:hover{
        position:relative;
        bottom:-2px;
        opacity:.8;
    }
`;