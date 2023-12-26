import React from "react"
import {
    Wrapper,
    Container,
    PlatformBlock,
    Logo,
} from "./Styles/Styles"

export default function PlatformSelect(){
    return(
        <Wrapper>
           <Container>
                <PlatformBlock href="/Shopify">
                    <Logo src="https://i.gyazo.com/6d2310710852beca7ea429bc82919126.png"/>
                </PlatformBlock>
                <PlatformBlock href="/ShopifyPlus">
                    <Logo src="https://i.gyazo.com/cfc52007305b9695332dc38a8405856e.png"/>
                </PlatformBlock>
            </Container>
        </Wrapper>
    )
}
