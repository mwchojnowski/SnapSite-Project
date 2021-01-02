import React from "react"
import {
    CardsWrapper,
    Container,
    Card,
    Icon,
    Title,
    Text
} from "./Styles/Styles"
import {AiOutlineRise, AiOutlineClockCircle} from "react-icons/ai"
import {GiScales} from "react-icons/gi"

export default function FeatureCards(){
    return(
        <CardsWrapper>
            <Container>
                <Card>
                    <Icon>
                        <AiOutlineRise />
                    </Icon>
                    <Title>
                        Build without limits
                    </Title>
                    <Text>
                        Make Pages with templates and pre-made elements or make your own. 
                    </Text>
                </Card>
                <Card>
                    <Icon>
                        <GiScales />
                    </Icon>
                    <Title>
                        Optimize for conversions
                    </Title>
                    <Text>
                        Find out what your customers love most and optimize your store.
                    </Text>
                </Card>
                <Card>
                    <Icon>
                        <AiOutlineClockCircle />
                    </Icon>
                    <Title>
                        Reduce Development Time
                    </Title>
                    <Text>
                        Create or edit pages with no code.
                    </Text>
                </Card>
            </Container>
        </CardsWrapper>
    )
}