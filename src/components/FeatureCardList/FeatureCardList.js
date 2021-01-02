import React from "react"
import {
    CardsWrapper,
    Container,
    Card,
    Top,
    Icon,
    Title,
    Text
} from "./Styles/Styles"

export default function FeatureCards(){
    return(
        <CardsWrapper>
            <Container>
                <Card>
                    <Icon>
                        1
                    </Icon>
                    <Top>
                        <Title>
                            Work in the open
                        </Title>
                        <Text>
                            Operate with high integrity and choose what's right over what's easy.
                            Be transparent as a company and with each other.
                        </Text>
                    </Top>
                </Card>
                <Card>
                    <Icon>
                        2
                    </Icon>
                    <Top>
                        <Title>
                            People are people
                        </Title>
                        <Text>
                            Treat yourself, colleagues, and customers with dignity, empathy, and respect.
                            Start from a presumption of positive intent.
                        </Text>
                    </Top>
                </Card>
                <Card>
                    <Icon>
                        3
                    </Icon>
                    <Top>
                        <Title>
                            Win and grow together
                        </Title>
                        <Text>
                            Strive to be the best, individually and as a team. Support and
                            encourage each other. Seek opportunities for growth.
                        </Text>
                    </Top>
                </Card>
            </Container>
        </CardsWrapper>
    )
}