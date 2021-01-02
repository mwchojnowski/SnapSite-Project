import React,{useState} from "react"
import {
    Wrapper,
    Container,
    Logo,
    Navigation,
    Wrap,
    NavItem,
    HoverContainer,
    HoverA,
    HoverAll,
    HoverItem,
    TitleText,
    HInfo,
    Arrow
} from "./Styles/Styles"
import Hamburger from 'hamburger-react'
import { FaChevronDown } from "react-icons/fa";

export default function Nav(){
    const [isOpen, setOpen] = useState(false)
    const [displayProd,setProd] = useState(false)
    const [displayRes,setRes] = useState(false)
    const [displayPart,setPart] = useState(false)
    const [displayComp,setComp] = useState(false)

    return(
        <Wrapper>
            <Container>
                <Wrap>
                    <Logo href="/">
                        SnapSite
                    </Logo>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </Wrap>
                { isOpen ?
                    <Navigation>
                        <NavItem>
                            <HoverContainer>
                                <HoverA onClick={()=>setProd(prev=>!prev)}>
                                    Products 
                                    <Arrow>
                                        <FaChevronDown />
                                    </Arrow>
                                </HoverA>
                                {
                                displayProd &&
                                    <HoverAll>
                                        <HoverItem>
                                            <TitleText href="/platforms">
                                                Page Builder
                                            </TitleText>
                                            <HInfo>
                                                Powerful store builder for ecommerce brands and agencies
                                            </HInfo>
                                        </HoverItem>
                                    </HoverAll>
                                }
                            </HoverContainer>
                        </NavItem>
                        <NavItem>
                            <HoverContainer>
                                <HoverA onClick={()=> setRes(prev=>!prev)}>
                                    Resources
                                    <Arrow>
                                        <FaChevronDown />
                                    </Arrow>
                                </HoverA>
                                {
                                displayRes &&
                                    <HoverAll>
                                        <HoverItem>
                                            <TitleText href="/blog">
                                                Blog
                                            </TitleText>
                                            <HInfo>
                                                Ecommerce Industry Insights
                                            </HInfo>
                                        </HoverItem>
                                        <HoverItem>
                                            <TitleText href="#">
                                                Webinar
                                            </TitleText>
                                            <HInfo>
                                                Learn how to get the most out of our product
                                            </HInfo>
                                        </HoverItem>
                                        <HoverItem>
                                            <TitleText href="#">
                                                Tutorials
                                            </TitleText>
                                            <HInfo>
                                                Learn how to use our product
                                            </HInfo>
                                        </HoverItem>
                                    </HoverAll>   
                                }
                            </HoverContainer>
                        </NavItem>
                        <NavItem>
                            <HoverContainer>
                                <HoverA onClick={()=> setPart(prev=>!prev)}>
                                    Partners 
                                    <Arrow>
                                        <FaChevronDown />
                                    </Arrow>
                                </HoverA>
                                {displayPart &&
                                    <HoverAll>
                                        <HoverItem>
                                            <TitleText href="#">
                                                Hire A Partner
                                            </TitleText>
                                            <HInfo>
                                                Discover experts who can help you make your projects
                                            </HInfo>
                                        </HoverItem>
                                        <HoverItem>
                                            <TitleText href="#">
                                                Become a Partner
                                            </TitleText>
                                            <HInfo>
                                                Grow your agency by partnering with us
                                            </HInfo>
                                        </HoverItem>
                                    </HoverAll>
                                }
                            </HoverContainer>
                        </NavItem>
                        <NavItem>
                            <HoverContainer>
                                <HoverA onClick={()=> setComp(prev=>!prev)}>
                                    Company 
                                    <Arrow>
                                        <FaChevronDown />
                                    </Arrow> 
                                </HoverA>
                                {displayComp &&
                                    <HoverAll>
                                        <HoverItem>
                                            <TitleText href="/about">
                                                About us
                                            </TitleText>
                                            <HInfo>
                                                Learn about our history and our plans for the future
                                            </HInfo>
                                        </HoverItem>
                                        <HoverItem>
                                            <TitleText href="#">
                                                Careers
                                            </TitleText>
                                            <HInfo>
                                                Join our growing team of developers
                                            </HInfo>
                                        </HoverItem>
                                        <HoverItem>
                                            <TitleText href="#">
                                                Contact Us
                                            </TitleText>
                                            <HInfo>
                                                Have any question? Ask our team
                                            </HInfo>
                                        </HoverItem>
                                    </HoverAll>
                                }
                            </HoverContainer>
                        </NavItem>
                        <NavItem>
                            <HoverContainer>
                                <HoverA href="/case-studies">
                                    Case Studies
                                </HoverA>
                            </HoverContainer>
                        </NavItem>
                    </Navigation>
                :null
                }
            </Container>
        </Wrapper>
    )
}