import Styled from "styled-components"

export const Wrapper = Styled.div`
    padding-top:50px;
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
    height:100%;
    width:60%;
`;

export const Row = Styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
    padding:35px 0;

`;

export const Element = Styled.div`
    width: 210px;
    height:210px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

export const Img = Styled.img`
    height:100px;
    width:100px;
    border-radius:50%;
    margin-bottom:15px;
`;

export const Name = Styled.h1`
    font-size:25px;
    color:rgba(52,152,219,1);
    font-weight:700;
    margin-bottom:15px;
`;

export const Title = Styled.h2`
    font-weight:600;
`;