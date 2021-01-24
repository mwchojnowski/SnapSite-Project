import Styled from "styled-components"

export const FeatureWrapper = Styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 35px;
    font-family: 'Enriqueta', serif;
    margin-top:50px;
`;

export const Container = Styled.div`
    width:60%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    @media only screen and (max-width: 1000px) {
        flex-direction:column;
    }
    @media only screen and (max-width: 500px) {
        width:90%;
    }
`;

export const Img = Styled.img`
    width:50%;
    height:auto;
    margin-right:50px;
    border-radius:25px;
    @media only screen and (max-width: 1000px) {
        width:80%;
    }
`;

export const TextDiv = Styled.div`
    width:50%;
    @media only screen and (max-width: 1000px) {
        width:100%;
    }
`;

export const IconDiv = Styled.div`

`;

export const Title = Styled.h1`
    font-size: 60px;
    font-weight:800;
    @media only screen and (max-width: 500px) {
        font-size:35px;
    }
`;

export const Text = Styled.h3`
    font-size:20px;
    font-weight:500;
    padding:25px 0;
    letter-spacing: .5px;
    width: 80%;
    @media only screen and (max-width: 500px) {
        font-size:15px;
    }
`;

export const Line = Styled.img`

`;

export const Quote = Styled.h4`
    font-size: 18px;
    padding-bottom:25px;
    letter-spacing:.5px;
    width: 80%;
`;

export const Quotee = Styled.h3`
    font-weight: 600;
`;