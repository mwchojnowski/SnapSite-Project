import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import MainBlock from "../components/MainBlock/MainBlock"
import ContactForm from "../components/ContactForm/ContactForm"
import Space from "../components/Space/Space"

export default function Contact(){
    return(
        <>
            <NavBar display={true}/>
            <MainBlock 
                buttonDisplay={false}
                title= "Still have questions?"
                text="Get in touch and we will be with you soon."
            />
            <ContactForm />
            <Space />
            <Footer />
        </>
    )
}