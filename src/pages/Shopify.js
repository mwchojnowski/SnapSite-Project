import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import ShopDisplay from "../components/ShopDisplay/ShopDisplay"
import MainBlock from "../components/MainBlock/MainBlock"
import Space from "../components/Space/Space"
import MiniCards from "../components/MiniCards/MiniCards"
import LowerBlock from "../components/LowerBlock/LowerBlock"

export default function Shopify(){
    return(
        <>
            <NavBar display={true}/>
            <Space />
            <ShopDisplay 
                buttonDisplay = {true}
                imageDir = "right"
                title = "Build Shopify pages that convert"
                text = "Create high-quality pages for your Shopify store with a powerful page builder designed with ecommerce teams in mind."
                button = "Add to Your Store"
                url = "https://i.ibb.co/4PfxBZ0/webPage.jpg"
            />
            <Space />
            <MainBlock 
                buttonDisplay = {false}
                title = "Build ecommerce pages quickly"
                text = "Design landing pages, blog pages or your entire Shopify store with our powerful editor. Swiftly A/B test page variations and optimize your store without burdening the team."
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "right"
                title = "Start from scratch or edit existing pages"
                text = "Create or edit an unlimited number of pages with 30+ page templates and a visual builder regardless of which Shopify theme you're using."
                url = "https://i.ibb.co/7SWm3yw/image.jpg"
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "left"
                title = "Perform unlimited tests and optimizations"
                text = "Convert more of your Shopify customers by uncovering what they love about your pages with built-in A/B testing."
                url = "https://i.ibb.co/cFvt9gQ/5eaadee34c1f3042acdf8211-ab-test.jpg"
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "right"
                title = "Track your store's performance"
                text = "Monitor key metrics like bounce rates, add to carts, number of sessions and form submissions with a detailed analytics dashboard."
                url = "https://i.ibb.co/8Y2xCgv/5eab51367dc3d1b1ddf34f07-analytics-2000x-100.jpg"
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "left"
                title = "Sync pages and products between stores"
                text = "Manage multiple stores easily by syncing products, pages and elements seamlessly between them. Staging? Dev? Multi-Language? No Problem."
                url = "https://i.ibb.co/BGLH5P5/5eaadecc0768419eb4e84554-sync.jpg"
            />
            <ShopDisplay 
                buttonDisplay = {false}
                imageDir = "right"
                title = "World class 24/7 support"
                text = "We’re here for you with a global support team ready to help you solve any issue at any time."
                url = "https://i.ibb.co/KjQRzWj/5eaadef252d8cd0b139f5d18-support.jpg"
            />
            <MainBlock 
                buttonDisplay = {false}
                title = "Beyond your standard drag-and-drop page builder"
            />
            <MiniCards />
            <LowerBlock 
                buttonDisplay={true}
                title="Start building your store with SnapSite"
                text="Try SnapSite for free, and explore the tools designed to help you build a store your customers will love."
                Button= "Get Started"
            />
            <Footer />
        </>
    )
}