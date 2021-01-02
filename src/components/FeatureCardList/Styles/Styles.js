import Styled from "styled-components"

export const CardsWrapper = Styled.div`
    width:100%;
    height: auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Enriqueta', serif;
`;

export const Container = Styled.div`
    width:70%;
    height: auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    @media only screen and (max-width: 1000px) {
        flex-direction:column;
    }
`;

export const Card = Styled.div`
    width: 25%;
    height: auto;
    display:flex;
    align-items:left;
    flex-direction:row;
    justify-content:left;
    margin:50px 50px;
    @media only screen and (max-width: 1000px) {
        width:100%;
        justify-content:center;
    }
`;

export const Top = Styled.div`
    width:80%;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:left;
    text-align:left;
`;

export const Icon = Styled.div`
    font-size:30px;
    color:rgba(52, 152, 219, 1);
    padding-bottom:15px;
    padding-right:25px;
    font-weight:700;
`;

export const Title = Styled.h1`
    font-size:25px;
    font-weight:700;
    padding-bottom:5px;
    text-align:left;
`; 

export const Text = Styled.h2`
    padding-top:5px;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: .5px;
`;