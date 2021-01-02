import React from "react"
import {
    Wrapper,
    Container,
    Row,
    Card,
    Icon,
    Title,
    Text
} from "./Styles/Styles"
import {GiReceiveMoney, GiPalmTree, GiShinyApple, GiScales} from "react-icons/gi"
import {AiOutlineClockCircle} from "react-icons/ai"

export default function Careers(){
    return(
        <Wrapper>
            <Container>
                <Row>
                    <Card>
                        <Icon>
                            <GiReceiveMoney />
                        </Icon>
                        <Title>
                            Competitive compensation
                        </Title>
                        <Text>
                            We want our team members to feel taken care of; 
                            that's why we ask every candidate, 
                            "What salary would make you happy?"
                        </Text>
                    </Card>
                    <Card>
                        <Icon>
                            <AiOutlineClockCircle />
                        </Icon>
                        <Title>
                            Remote company and flexible hours
                        </Title>
                        <Text>
                            We're a remote first company with team members all over the world.
                            Work from home, or we'll reimburse the cost of a coworking space!
                        </Text>
                    </Card>
                    <Card>
                        <Icon>
                            <GiPalmTree />
                        </Icon>
                        <Title>
                            Team and company offsites
                        </Title>
                        <Text>
                            While we use Zoom and Slack daily, 
                            our company retreats give us the chance 
                            to connect as a team on a more human level.
                        </Text>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <Icon>
                            <GiShinyApple />
                        </Icon>
                        <Title>
                            Learning and Development
                        </Title>
                        <Text>
                            Whether it's attending conferences or joining online 
                            courses we're here to support your personal growth.
                        </Text>
                    </Card>
                    <Card>
                        <Icon>
                            <GiScales />
                        </Icon>
                        <Title>
                            A focus on work-life balance
                        </Title>
                        <Text>
                            We're a results-oriented work environment—we care about results, 
                            not hours in a chair, and we want you to have a life beyond your work.
                        </Text>
                    </Card>
                    <Card>
                        <Icon>
                            
                        </Icon>
                        <Title>
                            
                        </Title>
                        <Text>
                            
                        </Text>
                    </Card>
                </Row>
            </Container>
        </Wrapper>
    )
}