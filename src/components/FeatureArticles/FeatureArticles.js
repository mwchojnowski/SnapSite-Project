import React from "react"
import {
    Wrapper,
    Container,
    FeaturedArticle,
    FeatureImage,
    FeatureTitle,
    FeatureDetail,
    MiniFeatureDetail,
    ShopifyCategory,
    BusinessCategory,
    EcommerceCategory,
    Date,
    FeatureList,
    ListTitle,
    Article,
    ArticleName
} from "./Styles/Styles"

export default function FeatureArticles(){
    return(
        <Wrapper>
            <Container>
                <FeaturedArticle>
                    <FeatureImage src="https://assets-global.website-files.com/5e9a8be888adf7901fad5a5c/5fa0ad2ccf6bff98aaf60823_Cause_Main-p-800.jpeg" alt="Article"/>
                    <FeatureTitle>
                        How Your Shopify Store Can Leverage Cause Marketing 
                        This Holiday Season (and Year-Round)
                    </FeatureTitle>
                    <FeatureDetail>
                        <ShopifyCategory>
                            Shopify
                        </ShopifyCategory>
                        <Date>
                            November 3,2020
                        </Date>
                    </FeatureDetail>
                </FeaturedArticle>
                <FeatureList>
                    <ListTitle>
                        Featured
                    </ListTitle>
                    <Article>
                        <MiniFeatureDetail>
                            <ShopifyCategory>
                                Shopify
                            </ShopifyCategory>
                            <Date>
                                November 10,2020
                            </Date>
                        </MiniFeatureDetail>
                        <ArticleName>
                            6 Must-Read Articles About Shopify Themes
                        </ArticleName>
                    </Article>
                    <Article>
                        <MiniFeatureDetail>
                            <ShopifyCategory>
                                Shopify
                            </ShopifyCategory>
                            <Date>
                                November 3,2020
                            </Date>
                        </MiniFeatureDetail>
                        <ArticleName>
                            How Your Shopify Store Can Leverage Cause Marketing 
                            This Holiday Season (and Year-Round)
                        </ArticleName>
                    </Article>
                    <Article>
                        <MiniFeatureDetail>
                            <BusinessCategory>
                                Business
                            </BusinessCategory>
                            <Date>
                                October 7,2020
                            </Date>
                        </MiniFeatureDetail>
                        <ArticleName>
                            Shogun Raises $35M to Democratize Ecommerce for All
                        </ArticleName>
                    </Article>
                    <Article>
                        <MiniFeatureDetail>
                            <EcommerceCategory>
                                ECommerce
                            </EcommerceCategory>
                            <Date>
                                September 9,2020
                            </Date>
                        </MiniFeatureDetail>
                        <ArticleName>
                            The Ripple Effects of COVID-19 on Retail — 
                            And How Brands Should Plan for the Future
                        </ArticleName>
                    </Article>
                </FeatureList>
            </Container>
        </Wrapper>
    )
}