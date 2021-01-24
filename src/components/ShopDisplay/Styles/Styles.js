import Styled from "styled-components"

export const FeatureWrapper = Styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:75px;
    font-family: 'Enriqueta', serif;
`;

export const Container = Styled.div`
    width:65%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    @media only screen and (max-width: 1000px) {
        flex-direction:column;
    }
    @media only screen and (max-width: 500px){
        width:80%;
    }
`;

export const Img = Styled.img`
    width:50%;
    height:auto;
    margin:0 25px;
    border-radius:10px;
    @media only screen and (max-width: 1000px) {
        width:100%;
    }
`;

export const TextDiv = Styled.div`
    width:50%;
    @media only screen and (max-width: 1000px) {
        width:85%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    @media only screen and (max-width: 500px){
        margin-bottom:100px;
    }
`;

export const Title = Styled.h1`
    font-size: 60px;
    font-weight:800;
    @media only screen and (max-width: 1000px) {
        text-align:center;
    }
    @media only screen and (max-width: 500px){
        font-size:35px;
    }
`;

export const Text = Styled.h3`
    font-size:20px;
    font-weight:500;
    padding:25px 0;
    letter-spacing: 1px;
    line-height:24px;
    width: 80%;
    @media only screen and (max-width: 500px){
        font-size:15px;
        text-align:center;
    }
`;

export const Button = Styled.a`
    height:50px;
    width:200px;
    border:0;
    border-radius: 25px;
    color: white;
    font-size: 16px;
    font-weight:600;
    background-color:rgba(52, 152, 219, 1);
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    transition:.4s;
    cursor:pointer;
    &:hover{
        position:relative;
        opacity:.8;
    }
`;
