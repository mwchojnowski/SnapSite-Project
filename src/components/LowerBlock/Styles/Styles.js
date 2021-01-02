import styled from "styled-components"

export const BlockWrap = styled.div`
    padding-top:100px;
    width : 100%;
    height:600px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:100px;
    font-family: 'Enriqueta', serif;
`;

export const Block = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100%;
    width:70%;
    background-color:rgba(52, 152, 219, 1);
    color:white;
    text-align:center;
    border-radius:25px;
`;

export const Title = styled.h1`
    font-size:65px;
    font-weight:1000;
    padding-bottom:25px;
    width:60%;
    @media only screen and (max-width: 1200px) {
        font-size:45px;
    }
`;

export const Text = styled.p`
    font-size:20px;
    padding-bottom:50px;
    letter-spacing:.5px;
    font-weight:500;
    width:60%;
`;

export const Button = styled.a`
    height:40px;
    width:150px;
    border:0;
    border-radius: 25px;
    color: rgba(52, 152, 219, 1);
    font-size: 16px;
    font-weight:600;
    background-color:white;
    margin-left:50px;
    text-decoration:none;
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    &:hover{
        position:relative;
        bottom:-2px;
    }
`;