import React from "react"
import {
    Wrapper,
    Container,
    Card,
    Image,
    Title,
    Text,
    Cards
} from "./Styles/Styles"

export default function MiniCard(){
    return(
        <Wrapper>
            <Container>
                <Cards>
                    <Card>
                        <Image src="https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5ea8a0a06413820bb915e9a2_30%20page%20templates-p-500.jpeg"/>
                        <Title>
                            30+ Page Templates
                        </Title>
                        <Text>
                            Choose from a library of pre-built page templates designed for conversions, 
                            then simply customize them to your liking.
                        </Text>
                    </Card>
                    <Card>
                        <Image src="https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5ea8a08e46a2550fa4e2df3b_library%20of%20elements.svg"/>
                        <Title>
                            Robust Library of Elements
                        </Title>
                        <Text>
                            Go beyond the basic building blocks with page elements 
                            like advanced forms, sliders, accordions, and countdown 
                            timers.
                        </Text>
                    </Card>
                    <Card>
                        <Image src="https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5ea8a0a00f24f1262b5cb262_responsive-p-800.jpeg"/>
                        <Title>
                            Design by Screen Size
                        </Title>
                        <Text>
                            Create fluid customer experiences for widescreen, 
                            laptop, tablet and mobile screen sizes.
                        </Text>
                    </Card>
                </Cards>
                <Cards>
                    <Card>
                        <Image src="https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5ea8a10d722d4da5f00d4a22_optimize%20seo.svg"/>
                        <Title>
                            Optimize for SEO
                        </Title>
                        <Text>
                            Easily optimize page titles, meta descriptions, 
                            open graph meta tags, and image alternate text 
                            on every page
                        </Text>
                    </Card>
                    <Card>
                        <Image src="https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5ea8a11576d269f532ebc1b2_dev%20tools.svg"/>
                        <Title>
                            Extendable + Dev Friendly
                        </Title>
                        <Text>
                            Technical team members can code custom reusable page 
                            elements for the rest of the ecommerce team to use.
                        </Text>
                    </Card>
                    <Card>
                        <Image src="https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5ea8a3cf8c4bf9412b8e0ec3_user%20permissions_1-p-500.jpeg"/>
                        <Title>
                            Team User Persmissions
                        </Title>
                        <Text>
                            Control who on your team can make page edits and perform 
                            A/B tests with easy-to-use permissions controls.
                        </Text>
                    </Card>
                </Cards>
            </Container>
        </Wrapper>
    )
}