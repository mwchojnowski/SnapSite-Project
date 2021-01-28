import React from "react"
import {
    FeatureWrapper,
    Container,
    Img,
    TextDiv,
    Title,
    Text,
    Button
} from "./Styles/Styles"
export default function FeatureImgText(props){
    return(
        <FeatureWrapper>
            <Container>
                {
                    (props.imageDir==="right") ?
                    <>
                        <TextDiv>
                            <Title>
                                {props.title}
                            </Title>
                            <Text>
                                {props.text}
                            </Text>
                            { props.buttonDisplay ?
                                <Button href={props.href}>
                                    {props.button}
                                </Button>
                                :null
                            }
                        </TextDiv>
                        <Img src={props.url}/>
                    </>
                    :
                    <>
                        <Img src ={props.url}/>
                        <TextDiv>
                            <Title>
                                {props.title}
                            </Title>
                            <Text>
                                {props.text}
                            </Text>
                            { props.buttonDisplay ?
                                <Button>
                                    {props.button}
                                </Button>
                                :null
                            }
                        </TextDiv>
                    </>

                }
            </Container>
        </FeatureWrapper>
    )
}