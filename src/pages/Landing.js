import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import Image from "../components/Image/Image"
import FeatureCards from "../components/FeatureCards/FeatureCards"
import FeatureImgText from "../components/FeatureImgText/FeatureImgText"
import LowerBlock from "../components/LowerBlock/LowerBlock"

export default function Landing(){
    return(
        <>
            <NavBar display={true}/>
            <MainBlock
                buttonDisplay = {true}
                title = "Create your store with ease."
                text = "SnapSite helps brands to create user friendly, unique stores quickly and efficiently"
                Button = "Get SnapSite"
                href='/platforms'
            />
            <Image url="https://i.ibb.co/9r1f7Mc/fewfwe.webp"/>
            <MainBlock 
                buttonDisplay = {false}
                title = "Craft Engaging Pages"
                text = "Your customers will enjoy your site with a wide variety of tools."
            />
            <FeatureCards />
            <FeatureImgText 
                imageDir = "right"
                title = "Create pages confidently"
                text = "With 24/7 support we'll be there to help resolve any issue, any time."
                quote = '"The support experience was great. SnapSite was always with us."'
                quotee = "Matthias Richter"
                url = "https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/08/28183850/home_post_2.gif"
            />
            <FeatureImgText 
                imageDir = "left"
                title = "Join an amazing community of leaders"
                text = "Be among the ecommerce agencies that use SnapSite daily."
                quote = '"Since we have been with shogun we have seen a 25% increase in conversion."'
                quotee = "Gabriella Santos"
                url = "https://www.womened.org/images/2020/01/31/networking-infographic.png"
            />
            <MainBlock 
                buttonDisplay = {false}
                title = "Boosting ecommerce Everywhere"
                text = "Businesses everywhere generate more in sales using SnapSite."
            />
            <LowerBlock 
                buttonDisplay={true}
                title="Get started with SnapSite"
                text="Try for free, and explore the tools to build a store people will remember."
                Button= "Get Started"
            />
            <Footer />
        </>
    )
}