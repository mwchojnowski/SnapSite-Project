import styled from "styled-components"

export const Wrapper = styled.footer`
    display:flex;
    justify-content: center;
    width:100%;
    height: 100%;
    align-items: center;
    font-family: 'Enriqueta', serif;
    flex-direction:column;
`;

export const Container = styled.div`
    width:62%;
    display:flex;
    justify-content:center;
    padding: 25px 0px;
    @media only screen and (max-width: 1200px) {
        width:80%;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media only screen and (max-width: 500px){
        width:80%;
        display:grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export const LOGOColumn = styled.div`
    width:25%;
    display:flex;
    flex-direction:column;
    @media only screen and (max-width: 1200px) {
        display:none;
    }
`;

export const Column = styled.div`
    width:25%;
    display:flex;
    flex-direction:column;
    @media only screen and (max-width: 500px){
        width:50%;
    }
`;

export const Logo = styled.h1`
    color: rgba(52, 152, 219, 1);
    font-size:28px;
    font-weight: 600;
`;

export const Title = styled.h1`
    font-size:17px;
    font-weight:800;
    padding-bottom:25px;
    padding-top:5px;
`;

export const Item = styled.a`
    font-size:17px;
    padding-bottom:25px;
    text-decoration:none;
    color: rgba(0,0,0,.70);
    line-height:20px;
    letter-spacing:1px;
    @media only screen and (max-width: 500px){
        font-size:15px;
    }
`;

export const BottomText = styled.h2`
    margin-right:45%;
    line-height: 26px;
    font-weight: 400;
    letter-spacing: .6px;
    color: rgba(0,0,0,.70);
`;