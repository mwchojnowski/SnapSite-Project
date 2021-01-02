import Styled from "styled-components"

export const Wrapper = Styled.div`
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
    flex-direction:column;
`;
export const Row = Styled.div`
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
    flex-direction:column;
    justify-content:left;
    margin:50px 50px;
    @media only screen and (max-width: 1000px) {
        width:100%;
        justify-content:center;
    }
`;

export const Icon = Styled.div`
    font-size:50px;
    color:rgba(52, 152, 219, 1);
    padding-bottom:15px;
`;

export const Title = Styled.h1`
    font-size:25px;
    font-weight:700;
    padding-bottom:5px;
`; 

export const Text = Styled.h2`
    font-size: 18px;
    line-height: 24px;
    letter-spacing: .5px;
`;