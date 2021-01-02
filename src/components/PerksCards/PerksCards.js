import React from "react"
import {
    CardsWrapper,
    Container,
    Card,
    Icon,
    Title,
    Text
} from "./Styles/Styles"
import {BsHouseDoor} from "react-icons/bs"
import {BiCalendarAlt} from "react-icons/bi"
import {IoMdChatboxes} from "react-icons/io"

export default function PerksCards(){
    return(
        <CardsWrapper>
            <Container>
                <Card>
                    <Icon>
                        <IoMdChatboxes />
                    </Icon>
                    <Title>
                        Access software and support
                    </Title>
                    <Text>
                        Connect directly with the Company team through private
                        Slack channels for your immediate support needs.
                    </Text>
                </Card>
                <Card>
                    <Icon>
                        <BsHouseDoor />
                    </Icon>
                    <Title>
                        Join the Company family
                    </Title>
                    <Text>
                        We like to think of our agency partners as family which means 
                        we’ll always treat you to some food and drinks when we’re in town.
                    </Text>
                </Card>
                <Card>
                    <Icon>
                        <BiCalendarAlt />
                    </Icon>
                    <Title>
                        Team up on partner events
                    </Title>
                    <Text>
                        We love giving back to the community and helping our members grow 
                        by co-hosting events put by our agency partners.
                    </Text>
                </Card>
            </Container>
        </CardsWrapper>
    )
}