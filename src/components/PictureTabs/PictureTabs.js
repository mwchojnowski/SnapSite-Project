import React,{useState} from "react"
import {
    Wrapper,
    Container,
    Tabs,
    Tab,
    Title,
    Text,
    Image
} from "./Styles/Styles"

export default function PerksCards(){
    const [ImgNum,updateNum] = useState(0)
    const images =[
        "https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5ea21cc052307614b2f5e8d1_wmw.png",
        "https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5eb5b9d8e465b75a1da30882_workshop-L-copy_d31d0cd4dea9f8762425e9b05ba98bea.jpg",
        "https://assets-global.website-files.com/5e46eebdc58e17106fa817ed/5ea20ed04ec080074106f91e_Bitmap.jpg"
    ]
    return(
        <Wrapper>
            <Container>
                <Tabs>
                    <Tab onClick={updateNum(0)}>
                        <Title>
                            Access a vast network
                        </Title>
                        <Text>
                            Tap into our base of over 13,000 customers
                            in need of design and development help
                        </Text>
                    </Tab>
                    <Tab onClick={updateNum(1)}>
                        <Title>
                            Help your agency grow
                        </Title>
                        <Text>
                            Collaborate with us on everything from co-marketing
                            to promotion in our blog, portal and newsletter.
                        </Text>
                    </Tab>
                    <Tab onClick={updateNum(2)}>
                        <Title>
                            Reduce time to market
                        </Title>
                        <Text>
                            Reduce deployment time and minimize engineering costs on
                            client projects with Shogun’s help
                        </Text>
                    </Tab>
                </Tabs>
                <Image src={images[ImgNum]}/>
            </Container>
        </Wrapper>
    )
}