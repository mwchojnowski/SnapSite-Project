import Styled from "styled-components"

export const Wrapper = Styled.div`
    width : 100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Enriqueta', serif;
`;

export const Container = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:auto;
    flex-start:start;
    width:70%;
`;

export const Cards = Styled.div`
    display:flex;
    flex-direction:row;
    @media only screen and (max-width: 1000px) {
        flex-direction:column;
        align-items:center;
        justify-content:center;
        text-align:center;
    }
`;

export const Card = Styled.div`
    width:30%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:25px;
    @media only screen and (max-width: 1000px) {
        width:80%;
    }
`;

export const Image = Styled.img`
    height:300px;
    @media only screen and (max-width: 500px){
        height:225px;
        width:100%;
    }
`;

export const Title = Styled.h1`
    font-size:22px;
    font-weight:700;
    padding-bottom:15px;
`;

export const Text = Styled.h4`
    text-align:center;
    font-size:18px;
    line-height:24px;
    letter-spacing:1px;
    width:70%;
    @media only screen and (max-width: 500px){
        width:95%;
    }
`;