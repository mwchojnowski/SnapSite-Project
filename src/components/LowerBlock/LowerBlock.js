import React from "react"
import {
    Block,
    Title,
    Text,
    Button,
    BlockWrap
} from "./Styles/Styles"

export default function MainBlock(props){
    return(
        <BlockWrap>
            <Block>
                <Title>
                    {props.title}
                </Title>
                <Text>
                    {props.text}
                </Text>
                {props.buttonDisplay ?
                    <Button href="/platforms">
                        {props.Button}
                    </Button>
                    :null
                }
            </Block>
        </BlockWrap>
    )
}