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
    flex-direction:row;
    height:100%;
    width:70%;
    @media only screen and (max-width: 1700px) {
        flex-direction:column;
    }
    @media only screen and (max-width: 500px){
        width:90%;
    }
`;

export const FeaturedArticle = Styled.div`
    width:80%;
    display:flex;
    flex-direction:column;
    transition:.3s;
    cursor:pointer;
    &:hover{
        -webkit-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.07);
        -moz-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.07);
        box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.07);
        position:relative;
        top:-3px;
    }
`;

export const FeatureImage = Styled.img`
    width:770px;
    padding:25px;
    @media only screen and (max-width: 1700px) {
        width:100%;
    }
`;

export const FeatureTitle = Styled.h1`
    width:750px;
    font-size:28px;
    font-weight:700;
    padding-bottom:50px;
    padding-left:25px;
    letter-spacing:.5px;
    @media only screen and (max-width: 1700px) {
        width:100%;
    }
`;

export const FeatureDetail = Styled.div`
    display:flex;
    justify-content:space-between;
    width:95%;
    padding-left:25px;
    padding-bottom:50px;
`;

export const MiniFeatureDetail = Styled.div`
    display:flex;
    justify-content:space-between;
    width:60%;
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
    width:60px;
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

export const BusinessCategory = Styled.div`
    width:55px;
    height:100%;
    background:hsla(246.61016949152543, 50.86%, 54.51%, 0.50);
    color:hsla(246.61016949152543, 50.86%, 54.51%, 1.00);
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

export const Date = Styled.h2`
    color: rgba(26,34,43,.5);
`;

export const FeatureList = Styled.div`
    width:40%;
    height:auto;
    @media only screen and (max-width: 1000px) {
        margin-left:0;
        width:90%;
    }
    @media only screen and (max-width: 500px){
        width:50%;
        display:flex;
        justify-content:left;
        align-items:center;
        flex-direction:column;
        
    }
`;

export const ListTitle = Styled.div`
    font-size:25px;
    font-weight:700;
    margin-bottom:12px;
`;

export const Article = Styled.div`
    height:auto;
    width:auto;
    margin-bottom:40px;
    cursor:pointer;
    @media only screen and (max-width: 500px){
        width:300px;
        margin-left:75px;
    }  
`;

export const ArticleName = Styled.h1`
    margin-top: 10px;
    color: #1a222b;
    font-size: 20px;
    line-height: 24px;
    font-weight: 800;
    @media only screen and (max-width: 500px){
        width:80%;
    }
`;