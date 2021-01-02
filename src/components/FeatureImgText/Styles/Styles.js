import Styled from "styled-components"

export const FeatureWrapper = Styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 35px;
    font-family: 'Enriqueta', serif;
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
`;

export const Img = Styled.img`
    width:50%;
    height:auto;
    padding-right:50px;
    @media only screen and (max-width: 1000px) {
        width:100%;
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
`;

export const Text = Styled.h3`
    font-size:20px;
    font-weight:500;
    padding:25px 0;
    letter-spacing: .5px;
    width: 80%;
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