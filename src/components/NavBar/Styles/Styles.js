import styled from "styled-components"

export const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    width:100%;
    height: 100px;
    align-items: center;
    font-family: 'Enriqueta', serif;
    position:fixed;
    z-index: 3;
    top:0;
    background-color:white;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.025);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.025);
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.025);
`;

export const Container = styled.div`
    width: 70%;
    height: 60px;
    display: flex;
    font-family:inherit;
    @media only screen and (max-width: 1000px){
        justify-content:space-between;
        align-items:center;
    }
`;

export const Arrow = styled.div`
    width:80%;
    height:100%;
    display:flex;
    align-items:center;
    padding-left:8px;
    font-size:13px;
`;

export const Logo = styled.a`
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

export const ShowMenu = styled.button`
    height:25px;
    border:none;
    background:white;
    font-size:25px;
`;

export const Navigation = styled.div`
    display: flex;
    margin-left:140px;
    width:64%;
    height:100%;
    justify-content: space-between;
`;

export const NavItem = styled.div`
    height:40px;
    width:100%;
    display:flex;
    align-items:center;
    margin-top:15px;
    flex-direction: column;
    justify-content:center;
    background-color:white;
    letter-spacing:1px;
`;

export const HoverAll = styled.div`
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
    position:absolute;
    margin-top: 0px;
    width: 240px;
    border-radius:10px;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    background-color:white;
`;

export const TitleText = styled.a`
    font-weight: 700;
    font-size: 16px;
    text-decoration:none;
    color:black;
    padding-bottom:10px;
`;

export const HInfo = styled.p`
    font-weight:600;
    font-size:14px;
    color:rgba(123,123,123,.85);
    cursor:pointer;
`;

export const HoverItem = styled.div`
    width:200px;
    height:auto;
    flex-direction: column;
    padding-top:25px;
    padding-bottom:25px;
    align-items: left;
    display:none;
    background-color:white;
    cursor:pointer-events;
    &:hover {
        ${TitleText}{
            color: rgba(52,152,219,1);
            transition:.25s;
        }
        ${HInfo}{
            opacity:.6;
            transition:.25s;
        }
    }
`;

export const HoverContainer = styled.div`
    &:hover{
        ${HoverItem} {
            display:flex;
        }
        ${HoverAll}{
            display:flex;
        }
    }
`;

export const HoverA = styled.a`
    height:50px;
    width:110px;
    text-decoration: none;
    font-size:16px;
    color: black;
    font-weight: 600;
    display: flex;
    align-items: center;
    flex-direction:row;
    color:#1a222b;
    cursor:pointer;
`;

export const Button = styled.a`
    height:50px;
    width:150px;
    border:0;
    border-radius: 25px;
    color: white;
    font-size: 16px;
    font-weight:600;
    background-color:rgba(52, 152, 219, 1);
    margin-left:50px;
    text-align:center;
    display:flex;
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
