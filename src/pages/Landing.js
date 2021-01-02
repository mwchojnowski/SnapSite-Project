import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import Image from "../components/Image/Image"
import FeatureCards from "../components/FeatureCards/FeatureCards"
import FeatureImgText from "../components/FeatureImgText/FeatureImgText"
import {GrChatOption} from "react-icons/gr"
import LowerBlock from "../components/LowerBlock/LowerBlock"

export default function Landing(){
    return(
        <>
            <NavBar display={true}/>
            <MainBlock
                buttonDisplay = {true}
                title = "Build your store with ease."
                text = "Company helps brands to create user friendly and unique stores with ease"
                Button = "Get Company"
                href='/platforms'
            />
            <Image url="https://i.ibb.co/9r1f7Mc/fewfwe.webp"/>
            <MainBlock 
                buttonDisplay = {false}
                title = "Craft beautiful experiences"
                text = "Create engaging, fast and smooth ecommerce pages your customers will enjoy with a powerful suite of tools."
            />
            <FeatureCards />
            <FeatureImgText 
                imageDir = "right"
                icon = {GrChatOption}
                title = "Create pages with confidence"
                text = "Our 24/7 support will be there to help you solve any issue at any time."
                quote = '"The support experience has been outstanding. As we went through implementation, Shogun was with us every step of the way."'
                quotee = "Matthias Richter"
                url = "https://i.ibb.co/T0d11p6/5e8deaf81f4f27c8111145f7-create-with-confidence-p-800.jpg"
            />
            <FeatureImgText 
                imageDir = "left"
                icon = {GrChatOption}
                title = "Join a community of ecommerce leaders"
                text = "Be among leading brands and ecommerce agencies that use Company's tools daily."
                quote = '"The support experience has been outstanding. As we went through implementation, Company was with us every step of the way."'
                quotee = "Gabriella Santos"
                url = "https://i.ibb.co/GdfLTSn/5e8deaf74c8c9c20fce4003f-community-of-leading-brands.jpg"
            />
            <MainBlock 
                buttonDisplay = {false}
                title = "Boosting ecommerce around the world"
                text = "Businesses around the world generate much more in sales every day using Company."
            />
            <LowerBlock 
                buttonDisplay={true}
                title="Start building your store with Company"
                text="Try Company for free, and explore the tools designed to help you build a store your customers will love."
                Button= "Get Started"
            />
            <Footer />
        </>
    )
}