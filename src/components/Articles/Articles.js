import React from "react"
import {
    Wrapper,
    Container,
    Article,
    Img,
    Title,
    ShopifyCategory,
    ShopifyPlusCategory,
    EcommerceCategory,
    SalesForceCategory,
    FacebookCategory,
    BigCommerceCategory,
    MiniFeatureDetail,
    Date
} from "./Styles/Styles"

export default function Articles(){
    return(
        <Wrapper>
            <Container>
                <Article>
                    <Img src="https://i.ibb.co/T8Ln6Sy/tiktok-marketing.jpg"/>
                    <Title>
                        Marketing on TikTok
                    </Title>
                    <MiniFeatureDetail>
                        <ShopifyCategory>
                            Shopify
                        </ShopifyCategory>
                        <Date>
                            December 28, 2020
                        </Date>
                    </MiniFeatureDetail>
                </Article>
                <Article>
                    <Img src="https://i.ibb.co/r46hKLh/shopify-plus-share-default-f432a4be6ee92bc59e226940c1accfa5b197850e9f347cec9d79880152a20299.png"/>
                    <Title>
                        The Benefits of Upgrading to Shopify Plus for Your Store
                    </Title>
                    <MiniFeatureDetail>
                        <ShopifyPlusCategory>
                            Shopify Plus
                        </ShopifyPlusCategory>
                        <Date>
                            December 10, 2020
                        </Date>
                    </MiniFeatureDetail>
                </Article>
                <Article>
                    <Img src="https://i.ibb.co/vj8cRht/859a40a0fcd0f8096430e7e41696acda.jpg"/>
                    <Title>
                        12 Simple Tips to Increase Sales for Your Shopify Store
                    </Title>
                    <MiniFeatureDetail>
                        <ShopifyCategory>
                            Shopify
                        </ShopifyCategory>
                        <Date>
                            December 8, 2020
                        </Date>
                    </MiniFeatureDetail>
                </Article>
                <Article>
                    <Img src="https://i.ibb.co/kQj1Vwb/Messenger-Colored.jpg"/>
                    <Title>
                        How to Get Started with Facebook Shops
                    </Title>
                    <MiniFeatureDetail>
                        <FacebookCategory>
                            Facebook
                        </FacebookCategory>
                        <Date>
                            December 3, 2020
                        </Date>
                    </MiniFeatureDetail>
                </Article>
                <Article>
                    <Img src="https://i.ibb.co/K9Xb3QS/landing-page-editor.png"/>
                    <Title>
                        SEO Friendly Home Pages in 3 simple Steps
                    </Title>
                    <MiniFeatureDetail>
                        <EcommerceCategory>
                            Ecommerce
                        </EcommerceCategory>
                        <Date>
                            December 15, 2020
                        </Date>
                    </MiniFeatureDetail>
                </Article>
                <Article>
                    <Img src="https://i.ibb.co/J3VgGpx/Zenkraft-into-SOM.png"/>
                    <Title>
                        The Complete Guide to Salesforce Order Management
                    </Title>
                    <MiniFeatureDetail>
                        <SalesForceCategory>
                            SalesForce CC
                        </SalesForceCategory>
                        <Date>
                            November 25, 2020
                        </Date>
                    </MiniFeatureDetail>
                </Article>
                <Article>
                    <Img src="https://i.ibb.co/RYpvKd7/buyer-profile.jpg"/>
                    <Title>
                        How — And Why — You Should Use Buyer Profiles and Quizzes for Your Store
                    </Title>
                    <MiniFeatureDetail>
                        <EcommerceCategory>
                            Ecommerce
                        </EcommerceCategory>
                        <Date>
                            November 24, 2020
                        </Date>
                    </MiniFeatureDetail>
                </Article>
                <Article>
                    <Img src="https://i.ibb.co/pKQd0yz/bigcommerce.png"/>
                    <Title>
                        12 BigCommerce Apps to Help You Optimize Your Store
                    </Title>
                    <MiniFeatureDetail>
                        <BigCommerceCategory>
                            Big Commerce
                        </BigCommerceCategory>
                        <Date>
                            November 19, 2020
                        </Date>
                    </MiniFeatureDetail>
                </Article>
                <Article>
                    <Img src="https://i.ibb.co/YRKjVDr/aaaaaaaaaaaaaad-design-11.png"/>
                    <Title>
                        Top 10 Shopify Inventory Management Apps
                    </Title>
                    <MiniFeatureDetail>
                        <ShopifyCategory>
                            Shopify
                        </ShopifyCategory>
                        <Date>
                            November 17, 2020
                        </Date>
                    </MiniFeatureDetail>
                </Article>
            </Container>
        </Wrapper>
    )
}