import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import ShopDisplay from "../components/ShopDisplay/ShopDisplay"
import Data from "../components/Data/Data"
import Team from "../components/Team/Team"
import Space from "../components/Space/Space"

export default function Landing(){
    return(
        <>
            <NavBar display={true}/>
            <MainBlock
                buttonDisplay = {false}
                title = "Our mission is to help brands create the best ecommerce experiences in the world."
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "right"
                title = "Customers first — seriously."
                text = "Everything we do starts with our customers and our great team helping make their lives a little easier. From listening to their needs and designing products to meet them to supporting them at any time, on any day."
                url = "https://i.ibb.co/fxTLK04/5ea217bd0047df55cf176650-Bitmap-p-800.jpg"
            />
            <Data />    
            <MainBlock 
                buttonDisplay={false}
                title= "Meet the team"
            />
            <Team />
            <MainBlock 
                buttonDisplay={true}
                title="We’re always looking for great people to join our team"
                text="We are a tight knit distributed team of talented people who enjoy making ecommerce better for all. If you're interested in joining our mission, we'd love to hear from you. Join Our Team"
                Button = "Join Our Team"
                href='/careers'
            />
            <Space />
            <Footer />
        </>
    )
}