import Styled from "styled-components"

export const Wrapper = Styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items: center;
    padding-top:100px;
    @media only screen and (max-width: 1200px) {
        margin-top:200px;
    }
`;

export const Container = Styled.div`
    width:70%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const ImageStyle = Styled.img`
    width:70%;
    display:flex;
    justify-content:center;
    border-radius: 25px;
    margin-left:0%;
`;

