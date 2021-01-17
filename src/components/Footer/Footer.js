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
                        SnapSite
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
                    <Title>
                        Partners
                    </Title>
                    <Item href="/partner">
                        Become a Partner
                    </Item>
                </Column>
                <Column>
                    <Title>
                        SnapSite
                    </Title>
                    <Item href="/about">
                        About Us
                    </Item>
                    <Item href="#">
                        Jobs
                    </Item>
                    <Item href="/Contact">
                        Contact Us
                    </Item>
                    <Item>
                        Privacy Policy
                    </Item>
                    <Item>
                        Terms of Service
                    </Item>
                </Column>
            </Container>
            <BottomText>
                © 2020 SnapSite, Inc. All rights reserved.
            </BottomText>
        </Wrapper>
    )
}