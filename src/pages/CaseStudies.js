import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import LowerBlock from "../components/LowerBlock/LowerBlock"
import CaseStudy from "../components/CaseStudy/CaseStudy"

export default function CaseStudies(){
    return(
        <>
            <NavBar display={true}/>
            <MainBlock 
                buttonDisplay={false}
                title= "Don't just take it from us"
                text="Company is helping companies of all sizes create stunning online stores that convert. If you sell online, you'll love Company."
            />
            <CaseStudy 
                url="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5ecd6e433542c46b09e0f0cb_Wisdom_Supply_Co_weekly_planner-008_1_3500x-p-800.jpeg"
                logoURL="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5ecd6bfdb3f8f35e5e4115fe_wisdomsupply%20co.svg"
                title="Wisdom Supply Co. Realized an Additional $20,000 in Annual Revenue with Company Page Builder"
            />
            <CaseStudy 
                url="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5f9853852900100061e23093__3210545-p-1080.jpeg"
                logoURL="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5f9836ec505cca7a4c38318e_beardbrand%20logo%20(1)-p-500.png"
                title="How Beardbrand Increased its Conversion Rate by 40.1% (So Far) With Company Page Builder"
            />
            <CaseStudy 
                url="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fa437bf640e4d36b742cbbc_Screen%20Shot%202020-11-05%20at%2012.34.11%20PM-p-800.png"
                logoURL="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fa0752a87f036efdeb99d9e_badgley-mischka%20logo-p-500.png"
                title="Badgley Mischka Saved 200 Development Hours — and $30K in Costs — With Company Page Builder"
            />
            <CaseStudy 
                url="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5ea059bcca3b895dda5ebfa7_leesa%20main%20image-p-1080.jpeg"
                logoURL="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5ea058f844721d5ea052eeb2_leesa-sleep-logo-2.jpg"
                title="How Leesa Saved Over $250,000 and Increased Conversion Rates by 30% Using Company Page Builder"
            />
            <CaseStudy 
                url="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5ea283233e2908641a8fcbba_wallet-p-800.png"
                logoURL="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5ea2820f5230767e42f81418_ridge%20logo.svg"
                title="How The Ridge Increased Revenue by $2.5M Using Company Page Builder"
            />
            <CaseStudy 
                url="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5f19cc9045f1793e9748da54_07132019_lifestyle_Down_SamsonHatae_002-p-800.jpeg"
                logoURL="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5f19c1137daa575226cf3fa7_Rumpl%20Logo%20Suite-01-p-500.png"
                title="Rumpl Saw its Conversion Rate Increase 20% with Company Page Builder"
            />
            <LowerBlock 
                buttonDisplay={true}
                title="Start building your store with Company"
                text="Try Company for free, and explore the tools designed to help you build a store your customers will love."
                Button= "Get Started"
                href='/platforms'
            />
            <Footer />
        </>
    )
}