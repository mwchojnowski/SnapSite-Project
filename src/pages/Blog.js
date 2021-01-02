import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import LowerBlock from "../components/LowerBlock/LowerBlock"
import FeatureArticles from "../components/FeatureArticles/FeatureArticles"
import Articles from "../components/Articles/Articles"

export default function Blog(){
    return(
        <>
            <NavBar display={true}/>
            <MainBlock 
                buttonDisplay={false}
                title = "SnapSite Blog"
                text = "Build faster and convert more with a weekly dose of exclusive advice, tools and ecommerce strategies delivered directly to your inbox."
            />
            <FeatureArticles />
            <Articles />
            <LowerBlock
                buttonDisplay={true}
                title="Start building your store with SnapSite"
                text="Try SnapSite for free, and explore the tools designed to help you build a store your customers will love."
                Button= "Get Started"
                href='/platforms'
            />
            <Footer />
        </>
    )
}