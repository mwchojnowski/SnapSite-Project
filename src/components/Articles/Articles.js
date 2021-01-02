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
                    <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fd80d12ac5e6366635d3a51_TikTokShopify_Main-p-500.jpeg"/>
                    <Title>
                        How to Market Your Shopify Store on TikTok
                    </Title>
                    <MiniFeatureDetail>
                        <ShopifyCategory>
                            Shopify
                        </ShopifyCategory>
                        <Date>
                            December 16, 2020
                        </Date>
                    </MiniFeatureDetail>
                </Article>
                <Article>
                    <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5f33094d5e7fc09ef9cff03e_SPlusUpgrade_Main-p-500.jpeg"/>
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
                    <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fd08c15a010fcd724f50adc_Sales_Main-p-500.jpeg"/>
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
                    <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fc708740e8f88d7037215ee_Fbook_Main-p-500.jpeg"/>
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
                    <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fc666903b75657b6077be96_SEO_Main-p-500.jpeg"/>
                    <Title>
                        Create SEO-Friendly Landing Pages in 6 Easy Steps
                    </Title>
                    <MiniFeatureDetail>
                        <EcommerceCategory>
                            Ecommerce
                        </EcommerceCategory>
                        <Date>
                            December 2, 2020
                        </Date>
                    </MiniFeatureDetail>
                </Article>
                <Article>
                    <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fbe065cf240d6853e74f7f7_OrderMgt_Main-p-500.jpeg"/>
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
                    <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fb98e5759dd347ead73adec_Quizzes_Main-p-500.jpeg"/>
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
                    <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fb6283da7921a1f3235f340_Optimize_Main-p-500.jpeg"/>
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
                    <Img src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5f032dddb9e1a51c2b813745_Inventory_Main-p-500.jpeg"/>
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