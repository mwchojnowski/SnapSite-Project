import React from "react"
import {
    FeatureWrapper,
    Container,
    Img,
    TextDiv,
    IconDiv,
    Title,
    Text,
    Line,
    Quote,
    Quotee

} from "./Styles/Styles"
export default function FeatureImgText(props){
    return(
        <FeatureWrapper>
            <Container>
                {
                    (props.imageDir==="right") ?
                    <>
                        <TextDiv>
                            <IconDiv>
                                {props.icon}
                            </IconDiv>
                            <Title>
                                {props.title}
                            </Title>
                            <Text>
                                {props.text}
                            </Text>
                            <Line />
                            <Quote>
                                {props.quote}
                            </Quote>
                            <Quotee>
                                {props.quotee}
                            </Quotee>
                        </TextDiv>
                        <Img src={props.url}/>
                    </>
                    :
                    <>
                        <Img src ={props.url}/>
                        <TextDiv>
                            <IconDiv>
                                
                            </IconDiv>
                            <Title>
                                {props.title}
                            </Title>
                            <Text>
                                {props.text}
                            </Text>
                            <Line />
                            <Quote>
                                {props.quote}
                            </Quote>
                            <Quotee>
                                {props.quotee}
                            </Quotee>
                        </TextDiv>
                    </>

                }
            </Container>
        </FeatureWrapper>
    )
}