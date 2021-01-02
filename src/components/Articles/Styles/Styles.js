import Styled from "styled-components"

export const Wrapper = Styled.div`
    width : 100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Enriqueta', serif;
    margin-top:175px;
    background: url("https://i.ibb.co/sgfV4H4/imageedit-1-2712434806.png");
`;

export const Container = Styled.div`
    width:70%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 81px;
    grid-row-gap: 65px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    @media only screen and (max-width: 1450px) {
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

export const Article = Styled.div`
    width:350px;
    padding:25px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    transition:.3s;
    background:white;
    border-radius:5px;
    cursor:pointer;
    &:hover{
        box-shadow: 3px 3px 30px -2px rgba(107,103,155,.1);
        position:relative;
        top:-2px;
    }
`;

export const Img = Styled.img`
    height:200px;
    width:296px;
`;

export const Title = Styled.h1`
    font-size:23px;
    font-weight:700;
    width:100%;
    letter-spacing:.5px;
    padding:15px 0; 
    margin-top:25px;
    margin-bottom:50px;
`;

export const MiniFeatureDetail = Styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    height:auto;
    padding-bottom:10px;
`;


export const ShopifyCategory = Styled.div`
    width:60px;
    text-align:center;
    height:100%;
    background:rgba(149, 192, 71, 0.35);
    color:#95c047;
    padding:5px;
    border-radius:5px;
    font-size:12px;
    line-height:15px;
    font-weight:500;
`;

export const ShopifyPlusCategory = Styled.div`
    width:80px;
    text-align:center;
    height:100%;
    background:rgba(255, 202, 0, 0.25);
    color:hsla(47.529411764705884, 99.11%, 34.73%, 1.00);
    padding:5px;
    border-radius:5px;
    font-size:12px;
    line-height:15px;
    font-weight:500;
`;

export const EcommerceCategory = Styled.div`
    width:75px;
    height:100%;
    background:hsla(175.38461538461542, 45.22%, 54.90%, 0.25);
    color:hsla(175.38461538461542, 67.16%, 43.36%, 1.00);
    padding:5px;
    border-radius:5px;
    font-size:12px;
    line-height:15px;
    font-weight:500;
`;

export const SalesForceCategory = Styled.div`
    width:85px;
    height:100%;
    background:hsla(175.38461538461542, 45.22%, 54.90%, 0.25);
    color:hsla(175.38461538461542, 67.16%, 43.36%, 1.00);
    padding:5px;
    border-radius:5px;
    font-size:12px;
    line-height:15px;
    font-weight:500;
`;

export const FacebookCategory = Styled.div`
    width:70px;
    height:100%;
    background:hsla(175.38461538461542, 45.22%, 54.90%, 0.25);
    color:hsla(175.38461538461542, 67.16%, 43.36%, 1.00);
    padding:5px;
    border-radius:5px;
    font-size:12px;
    line-height:15px;
    font-weight:500;
`;

export const BigCommerceCategory = Styled.div`
    width:90px;
    height:100%;
    background:hsla(175.38461538461542, 45.22%, 54.90%, 0.25);
    color:hsla(175.38461538461542, 67.16%, 43.36%, 1.00);
    padding:5px;
    border-radius:5px;
    font-size:12px;
    line-height:15px;
    font-weight:500;
`;

export const Date = Styled.h2`
    color: rgba(26,34,43,.5);
`;