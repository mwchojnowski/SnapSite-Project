import React from "react"
import{
    Wrapper,
    Container,
    Img,
    Info,
    Logo,
    Title,
    Link,
    Arrow
} from "./Styles/Styles"

import {HiOutlineArrowNarrowRight} from "react-icons/hi"

export default function CaseStudies(props){
    return(
        <Wrapper>
            <Container>
                <Img src={props.url}/>
                <Info>
                    <Logo src={props.logoURL}/>
                    <Title>
                        {props.title}
                    </Title>
                    <Link>
                        View Case Study 
                        <Arrow>
                            <HiOutlineArrowNarrowRight />
                        </Arrow>
                    </Link>
                </Info>
            </Container>
        </Wrapper>
    )
}