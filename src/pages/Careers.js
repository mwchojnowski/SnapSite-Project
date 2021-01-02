import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import Space from "../components/Space/Space"
import Image from "../components/Image/Image"
import FeatureCardList from "../components/FeatureCardList/FeatureCardList"
import CareerCards from "../components/CareerCards/CareerCards"

export default function Careers(){
    return(
        <>
            <NavBar display={true}/>
            <MainBlock
                buttonDisplay={true}
                title = "Join us in creating a better ecommerce experience for all."
                text = "We're helping brands create the best ecommerce experiences in the world. If that sounds good to you, apply to join our completely distributed team of rockstars living around the globe."
                Button="View Positions"
                href='#position'
            />
            <Image
                url="https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5ea98adceffbba8197125ae7_team-wave.gif"
            />
            <MainBlock
                buttonDisplay={false}
                title = "Our Core Values"
                text = "At Company, people and values come first. We're not only building great products we're fostering a community of transparency, support and positivity."
            />
            <FeatureCardList />
            <MainBlock
                buttonDisplay={false}
                title = "Working at Company"
                text = "We appreciate all of the great people that have joined us to make Company what it is today. To show our appreciation these are some of the perks we offer to make sure our team members are cared for:"
            />
            <CareerCards />
            <MainBlock 
                name="position"
                buttonDisplay={false}
                title="Open Positions"
            />
            <MainBlock 
                buttonDisplay={false}
                text="Currently no open positions"
            />
            <Space />
            <Footer />
        </>
    )
}