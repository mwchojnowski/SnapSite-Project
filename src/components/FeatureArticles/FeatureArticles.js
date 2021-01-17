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
                    <FeatureImage src="https://i.ibb.co/3rm0rLM/marketing-holiday-ready.png" alt="Article"/>
                    <FeatureTitle>
                        How Your Brand Can Leverage Cause Marketing This Holiday Season
                    </FeatureTitle>
                    <FeatureDetail>
                        <ShopifyCategory>
                            Shopify
                        </ShopifyCategory>
                        <Date>
                            December 1,2020
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
                                November 31,2020
                            </Date>
                        </MiniFeatureDetail>
                        <ArticleName>
                            10 Must-Read Articles About Promoting Your Store
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
                            How Your Brand Can Leverage Cause Marketing This Holiday Season
                        </ArticleName>
                    </Article>
                    <Article>
                        <MiniFeatureDetail>
                            <BusinessCategory>
                                Business
                            </BusinessCategory>
                            <Date>
                                October 23,2020
                            </Date>
                        </MiniFeatureDetail>
                        <ArticleName>
                            SnapSite Holds Fundraiser to Democratize Ecommerce for Everyone
                        </ArticleName>
                    </Article>
                    <Article>
                        <MiniFeatureDetail>
                            <EcommerceCategory>
                                ECommerce
                            </EcommerceCategory>
                            <Date>
                                September 29,2020
                            </Date>
                        </MiniFeatureDetail>
                        <ArticleName>
                            The Effects of COVID-19 on online business and How To Plan for the Future
                        </ArticleName>
                    </Article>
                </FeatureList>
            </Container>
        </Wrapper>
    )
}