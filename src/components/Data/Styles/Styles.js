import Styled from "styled-components"

export const Wrapper = Styled.div`
    padding-top:170px;
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
    flex-direction:row;
    height:100%;
    width:70%;
    @media only screen and (max-width: 1200px) {
        flex-direction:column;
    }
`;

export const TitleDiv = Styled.div`
    width:40%;
    display:flex;
`;

export const Title = Styled.h1`
    font-size:60px;
    font-weight:700;
    text-align:left;
`;

export const DataDiv = Styled.div`
    width:60%;
    display:flex;
    flex-direction:row;
    @media only screen and (max-width: 1000px) {
        flex-direction:column;
    }
`;

export const Element = Styled.div`
    height:100%;
    width: 200px;
    margin:50px;
`;

export const Value = Styled.h1`
    font-size:65px;
    font-weight:700;
    color:rgba(52,152,219,1);
    margin-bottom:15px;
`;

export const Desc = Styled.div`

`;