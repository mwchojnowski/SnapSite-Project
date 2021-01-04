import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import ShopDisplay from "../components/ShopDisplay/ShopDisplay"
import MainBlock from "../components/MainBlock/MainBlock"
import LowerBlock from "../components/LowerBlock/LowerBlock"
import Space from "../components/Space/Space"
import PerksCards from "../components/PerksCards/PerksCards"

export default function Partner(){
    return(
        <>
            <NavBar display={true}/>
            <Space />
            <ShopDisplay 
                buttonDisplay = {true}
                imageDir = "right"
                title = "Become a SnapSite agency partner"
                text = "Gain access to our community of ecommerce clients and enjoy exclusive perks like priority support and training to help grow your agency."
                button = "Become a Partner"
                url = "https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5efb684acbac06125c24ec27_agency%20iamge%20opt%202.png"
            />
            <MainBlock 
                buttonDisplay = {false}
                title = "Change the way you design and develop"
                text = "Design and launch your client’s ecommerce sites faster than before without sacrificing quality or page speed. With Shogun’s help, there’s no limit to what you can build to help your client’s scale their businesses."
            />
            
            <MainBlock 
                buttonDisplay={false}
                title="Even more great perks"
            />
            <PerksCards />
            <LowerBlock 
                title='“We have seen a 30% reduction in development cost as well as near-immediate turnaround time for making changes”'
                text="Paul Miller"
                buttonDisplay={false}
            />
            <MainBlock 
                buttonDisplay={true}
                title="Team up and elevate your company."
                text="Join the Partner Program to enjoy all of the perks."
                Button = "Become a Partner"
                href=''
            />
            <Space />
            <Space />
            <Footer />
        </>
    )
}