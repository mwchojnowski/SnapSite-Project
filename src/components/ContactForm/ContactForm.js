import React from "react"
import{
    Wrapper,
    Container,
    Form,
    Grid,
    HalfInput,
    Empty,
    Message,
    ButtonWrap,
    Submit
}from "./Styles/Styles"

export default function ContactForm(){
    return(
        <Wrapper>
            <Container>
                <Form>
                    <Grid>
                        <HalfInput type="text" placeholder="First Name"/>
                        <HalfInput type="text" placeholder="Last Name"/>
                        <HalfInput type="email" placeholder="Email Address"/>
                        <HalfInput type="text" placeholder="Company"/>
                        <Message type="text" placeholder="Message"/>
                        <Empty />
                    </Grid>
                    <ButtonWrap>
                        <Submit>
                            Submit
                        </Submit>
                    </ButtonWrap>
                </Form>
            </Container>
        </Wrapper>
    )
}