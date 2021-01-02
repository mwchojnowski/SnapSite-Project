import React from "react"
import { 
    Wrapper,
    Container,
    LOGOColumn,
    Column,
    Logo,
    Title,
    Item,
    BottomText
} from "./Styles/Styles"

export default function footer(){
    return(
        <Wrapper>
            <Container>
                <LOGOColumn>
                    <Logo>
                        Company
                    </Logo>
                </LOGOColumn>
                <Column>
                    <Title>
                        Products
                    </Title>
                    <Item href="/platforms">
                        Page Builder
                    </Item>
                    <Title>
                        Platforms
                    </Title>
                    <Item href="/shopify">
                        Shopify
                    </Item>
                    <Item href="/shopifyplus">
                        Shopify Plus
                    </Item>
                </Column>
                <Column>
                    <Title>
                        Resources
                    </Title>
                    <Item href="/">
                        Blog
                    </Item>
                    <Item href="#">
                        Remote Work Guide
                    </Item>
                    <Item href="#">
                        Tutorials
                    </Item>
                    <Item href="#">
                        Elements Library
                    </Item>
                    <Title>
                        Partners
                    </Title>
                    <Item href="/partner">
                        Become a Partner
                    </Item>
                </Column>
                <Column>
                    <Title>
                        Company
                    </Title>
                    <Item href="/about">
                        About Us
                    </Item>
                    <Item href="#">
                        Jobs
                    </Item>
                    <Item href="#">
                        Contact Us
                    </Item>
                    <Item href="#">
                        Privacy Policy
                    </Item>
                    <Item href="#">
                        Terms of Service
                    </Item>
                    <Item href="#">
                        Acceptable Use
                    </Item>
                    <Item href="#">
                        Data Protection
                    </Item>
                </Column>
            </Container>
            <BottomText>
                © 2020 Company, Inc. All rights reserved.
            </BottomText>
        </Wrapper>
    )
}