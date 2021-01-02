import Styled from "styled-components"

export const Wrapper = Styled.div`
    display:flex;
    justify-content: center;
    width:100%;
    height: auto;
    align-items: center;
    font-family: 'Enriqueta', serif;
    position:fixed;
    z-index: 3;
    top:0;
    background-color:white;
    margin-bottom:25px;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.025);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.025);
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.025);
`;

export const Container = Styled.div`
    width: 90%;
    height: auto;
    padding:30px;
    display: flex;
    font-family:inherit;
    justify-content:space-between;
    flex-direction:column;
    align-items:center;
`;

export const Logo = Styled.a`
    color: rgba(52, 152, 219, 1);
    font-size:28px;
    font-weight: 600;
    height: 100%;
    width:20%;
    display:flex;
    align-items: center;
    justify-content: center;
    letter-spacing:1px;
    text-decoration:none;
`;

export const Wrap = Styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
`;

export const Navigation = Styled.div`
    display: flex;
    justify-content:left;
    width:100%;
    height:100%;
    flex-direction:column;
    background:white;
`;

export const NavItem = Styled.div`
    width:100%;
    height:auto;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:left;
    margin-top:15px;
    flex-direction: column;
    justify-content:center;
    letter-spacing:1px;
`;

export const HoverContainer = Styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:left;
    flex-direction:column;
`;

export const HoverA = Styled.a`
    height:50px;
    width:110px;
    text-decoration: none;
    font-size:16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content:left;
    flex-direction:row;
    color:#1a222b;
    cursor:pointer;
`;

export const HoverAll = Styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
    flex-direction:column;
`;

export const HoverItem = Styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction: column;
    padding-top:25px;
    padding-bottom:25px;
    align-items: left;
    background-color:white;
        &:hover{
        background:rgba(52,152,219,.2);
        border-radius:10px;
    }
`;

export const TitleText = Styled.a`
    font-weight: 700;
    font-size: 16px;
    text-decoration:none;
    color:black;
    padding-bottom:10px;
`;

export const HInfo = Styled.p`
    font-weight:600;
    font-size:14px;
    color:rgba(123,123,123,.85);
`;

export const Arrow = Styled.div`
    width:80%;
    height:100%;
    display:flex;
    align-items:center;
    padding-left:8px;
    font-size:13px;
`;