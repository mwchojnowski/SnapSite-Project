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
    height:100%;
    width:70%;
    @media only screen and (max-width: 1700px) {
        flex-direction:column;
    }
`;

export const Form = Styled.form`
    width:70%;
    height:auto;
`;

export const Grid = Styled.div`
    width:100%;
    height:auto;
    display:grid;
    justify-content:center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:  1fr 1fr 1fr;
    grid-gap:25px;
`;

export const FormLower = Styled.form`
    width:70%;
    height:auto;
    display:flex;
    justify-content:center;
`;

export const HalfInput = Styled.input`
    height:50px;
    width:400px;
    border-radius:5px;
    border:.5px lightgray solid;
    padding:10px;
    font-size:16px;
    font-weight:500;
`;

export const Empty = Styled.input`
    border:none;
    z-index:0;
`;

export const Message = Styled.input`
    height:50px;
    width:193%;
    justify-self:stretch;
    z-index:1;
    border-radius:5px;
    border:.5px lightgray solid;
    padding:10px;
    font-size:16px;
    font-weight:500;
    resize:both;
`;

export const ButtonWrap = Styled.div`
    width:70%
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:25px;
`;

export const Submit = Styled.a`
    height:50px;
    width:150px;
    border:0;
    border-radius: 25px;
    color: white;
    font-size: 16px;
    font-weight:600;
    background-color:rgba(52, 152, 219, 1);
    text-align:center;
    display:flex;
    margin-right:35px;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    transition:.4s;
    &:hover{
        position:relative;
        bottom:-2px;
        opacity:.8;
    }
    @media only screen and (max-width: 1000px){
        display:none;
    }
`;