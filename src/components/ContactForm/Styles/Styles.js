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
        
    }
`;

export const Form = Styled.form`
    width:70%;
    height:auto;
    @media only screen and (max-width: 500px){
        display:flex;
        flex-direction:column;
    }
`;

export const Grid = Styled.div`
    width:100%;
    height:auto;
    display:grid;
    justify-content:center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:  1fr 1fr 1fr;
    grid-gap:25px;
    @media only screen and (max-width: 500px){
        grid-template-columns: 1fr;
        grid-template-rows:  1fr 1fr 1fr 1fr 1fr;
    }
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
    @media only screen and (max-width: 1000px){
        width:200px;
    }
`;

export const Empty = Styled.input`
    border:none;
    z-index:0;
    @media only screen and (max-width: 1000px){
        display:none;
    }
`;

export const Message = Styled.input`
    height:50px;
    width:195%;
    justify-self:stretch;
    z-index:1;
    border-radius:5px;
    border:.5px lightgray solid;
    padding:10px;
    font-size:16px;
    font-weight:500;
    resize:both;
    @media only screen and (max-width: 2000px){
        width:195%;
    }
    @media only screen and (max-width: 1800px){
        width:205%;
    }
    @media only screen and (max-width: 1000px){
        width:215%;
    }
    @media only screen and (max-width: 500px){
        width:200px;
    }
`;

export const ButtonWrap = Styled.div`
    width:70%
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:25px;
    @media only screen and (max-width: 1000px){
        width:100%;
    }
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
`;