import React,{useEffect,useState} from "react"
import {
    Wrapper,
    Container,
    Navigation,
    Logo,
    Button,
    NavItem,
    HoverA,
    HoverAll,
    HoverItem,
    TitleText,
    HInfo,
    HoverContainer,
    Arrow
} from "./Styles/Styles"
import Nav from "../Nav/Nav"
import { FaChevronDown } from "react-icons/fa";

export default function NavBar(props){
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
      }, []);

      useEffect(() => {
        function handleResize() {
          setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      const isMobile = windowDimension <= 1200;

    var displayLinks = props.display

    return(
        !isMobile ?
        <Wrapper>
            <Container>
                    <Logo href="/">
                        SnapSite
                    </Logo>
                <Navigation>
                    {
                        displayLinks ?
                            <>
                                <NavItem>
                                    <HoverContainer>
                                        <HoverA href="#">
                                            Products 
                                            <Arrow>
                                                <FaChevronDown />
                                            </Arrow>
                                        </HoverA>
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
                                    </HoverContainer>
                                </NavItem>
                                <NavItem>
                                    <HoverContainer>
                                        <HoverA>
                                            Resources
                                            <Arrow>
                                                <FaChevronDown />
                                            </Arrow>
                                        </HoverA>
                                        <HoverAll>
                                            <HoverItem>
                                                <TitleText href="/blog">
                                                    Blog
                                                </TitleText>
                                                <HInfo>
                                                    Ecommerce Industry Insights
                                                </HInfo>
                                            </HoverItem>
                                        </HoverAll>
                                    </HoverContainer>
                                </NavItem>
                                <NavItem>
                                    <HoverContainer>
                                        <HoverA >
                                            Partners 
                                            <Arrow>
                                                <FaChevronDown />
                                            </Arrow>
                                        </HoverA>
                                        <HoverAll>
                                            <HoverItem>
                                                <TitleText href="/partner">
                                                    Become a Partner
                                                </TitleText>
                                                <HInfo>
                                                    Grow your agency by partnering with us
                                                </HInfo>
                                            </HoverItem>
                                        </HoverAll>
                                    </HoverContainer>
                                </NavItem>
                                <NavItem>
                                    <HoverContainer>
                                        <HoverA>
                                            Company 
                                            <Arrow>
                                                <FaChevronDown />
                                            </Arrow>
                                        </HoverA> 
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
                                                <TitleText href="/careers">
                                                    Careers
                                                </TitleText>
                                                <HInfo>
                                                    Join our growing team of developers
                                                </HInfo>
                                            </HoverItem>
                                            <HoverItem>
                                                <TitleText href="/Contact">
                                                    Contact Us
                                                </TitleText>
                                                <HInfo>
                                                    Have any question? Ask our team
                                                </HInfo>
                                            </HoverItem>
                                        </HoverAll>
                                    </HoverContainer>
                                </NavItem>
                                <NavItem>
                                    <HoverA href="/case-studies">
                                        Case Studies
                                    </HoverA>
                                </NavItem>
                                <NavItem>
                                    <Button href="/platforms">
                                        Get Started
                                    </Button>
                                </NavItem>
                            </>
                        :null
                    }
                </Navigation>
            </Container>
        </Wrapper>
        :<Nav />  
    )
}