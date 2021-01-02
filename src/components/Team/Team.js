import React from "react"
import{
    Wrapper,
    Container,
    Row,
    Element,
    Img,
    Name,
    Title
} from "./Styles/Styles"

export default function Landing(){
    return(
        <Wrapper>
            <Container>
                <Row>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fc92e6f343d2f0f217e46c7_Image%20from%20iOS.jpg" alt="CEO"/>
                        <Name>Hasani Hendricks</Name>
                        <Title>Cofounder,CEO</Title>
                    </Element>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fd7a2eb45ac6b6bea16e259_William.jpg" alt="Cofounder"/>
                        <Name>Mick Rambutan</Name>
                        <Title>Cofounder</Title>
                    </Element>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fc67de7e7773809aa43fa85_Rhys.jpg"alt="VP of Design"/>
                        <Name>Greg Meyer</Name>
                        <Title>VP of Design</Title>
                    </Element>
                </Row>
                <Row>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5faed068f0b1e25657bec76e_img.jpg" alt="CTO"/>
                        <Name>Scott Diamond</Name>
                        <Title>CTO</Title>
                    </Element>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5eebda38074bfb75af6aa862_kyle_update.png" alt="Director of Client Service"/>
                        <Name>Rodrigo da Silva</Name>
                        <Title>Director of Client Service</Title>
                    </Element>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5ea2c82b0047df61171b3aaa_5e45119221a4f97c2739f47f_5cd1d5c23ab9b1cec77f819d_andre-p-500.jpeg" alt="Design Lead"/>
                        <Name>Andre Brown</Name>
                        <Title>Design Lead</Title>
                    </Element>
                </Row>
                <Row>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5ea2c8460047df5b1a1b3baa_5e4510e58e9f312f7f3716e4_5cd1d601de724f3804f2799c_sanal-p-500.jpeg"/>
                        <Name>Kunj Panicker</Name>
                        <Title>Partner Manager</Title>
                    </Element>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5ea2c83d3291998e1298ff4b_5e4510b08e9f31fb4b371636_5cd1d5ef82934ab9a1ee7752_karl-p-500.jpeg"/>
                        <Name>Karl Karlson</Name>
                        <Title>Software Engineer</Title>
                    </Element>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5eebd84a8a9c9c5bdde5b29f_a-p-500.jpeg"/>
                        <Name>Anatoly Karpov</Name>
                        <Title>Software Engineer</Title>
                    </Element>
                </Row>
                <Row>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5ea2c82ec0c91e4bcfc4ec58_5e8ca4f3565102a802197eb7_12829141_10205393331824210_7794276517383526398_o.jpeg"/>
                        <Name>Candy Felipe</Name>
                        <Title>Recruiter</Title>
                    </Element>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5f037691c594e04f609dfc75_6134864.jpeg"/>
                        <Name>Mateusz Nowak</Name>
                        <Title>Software Engineer</Title>
                    </Element>
                    <Element>
                        <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5ea2c82d3e290876af918bae_5e4d61eb72fc09759775a28a_IMG_0556-p-500.jpeg"/>
                        <Name>Brett Pence</Name>
                        <Title>Lead Technical Manager</Title>
                    </Element>
                </Row>
            </Container>
        </Wrapper>
    )
}