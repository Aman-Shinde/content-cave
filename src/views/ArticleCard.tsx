import React from 'react'
import styled from 'styled-components';
import brandIndetity from '../BrandIdentity';

interface componentProps {
    title: string,
    subtitle: string,
    byline: string,
    tag: string,
    imgurl: string
}

const ArticleCardWrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
    color: ${({ theme }) => theme.fontColor};
    margin: 0px auto;
    cursor: pointer;
`;

const ArticleCardImage = styled.div`
    width: 100%;
    aspect-ratio: 3;
    margin-bottom: 12px;
`;

const ArticleCardContent = styled.div`
    width: 100%;
`;

const Tag = styled.a`
    color: ${({ theme }) => theme.fontColor};
    display: block;
    font-family: ${brandIndetity.typography.articleCardTag.fontFamily};
    font-size: ${brandIndetity.typography.articleCardTag.fontSize};
    font-weight: ${brandIndetity.typography.articleCardTag.fontWeight};
    line-height: ${brandIndetity.typography.articleCardTag.lineHeight};
    margin-bottom: 8px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    @media ${brandIndetity.mediaQuaries.smD} {
        font-size: ${brandIndetity.typography.articleCardTag.smFontSize}
    }
`;

const Title = styled.h2`
    font-family: ${brandIndetity.typography.articleCardTitle.fontFamily};
    font-size: ${brandIndetity.typography.articleCardTitle.fontSize};
    font-weight: ${brandIndetity.typography.articleCardTitle.fontWeight};
    line-height: ${brandIndetity.typography.articleCardTitle.lineHeight};
    margin-bottom: 4px;

    @media ${brandIndetity.mediaQuaries.smD} {
        font-size: ${brandIndetity.typography.articleCardTitle.smFontSize}
    }
`;

const Subtitle = styled.h3`
    font-family: ${brandIndetity.typography.articleCardSubtitle.fontFamily};
    font-weight: ${brandIndetity.typography.articleCardSubtitle.fontWeight};
    font-size: ${brandIndetity.typography.articleCardSubtitle.fontSize};
    line-height: ${brandIndetity.typography.articleCardSubtitle.lineHeight};

    @media ${brandIndetity.mediaQuaries.smD} {
        font-size: ${brandIndetity.typography.articleCardSubtitle.smFontSize}
    }
`;

const Byline = styled.p`
    color: ${({ theme }) => theme.fontColor};
    font-family: ${brandIndetity.typography.articleCardByline.fontFamily};
    font-size: ${brandIndetity.typography.articleCardByline.fontSize};
    font-weight: ${brandIndetity.typography.articleCardByline.fontWeight};
    line-height: ${brandIndetity.typography.articleCardByline.lineHeight};
    margin-top: 8px;
    @media ${brandIndetity.mediaQuaries.smD} {
        font-size: ${brandIndetity.typography.articleCardByline.smFontSize}
    }
`;

const By = styled.a`
    color: ${({ theme }) => theme.fontColor};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;



function ArticleCard({ title, subtitle, byline, tag, imgurl }: componentProps) {

    return (
        <ArticleCardWrapper>

            <ArticleCardImage>

                <img src={imgurl} alt="article-image" style={{ maxWidth: "100%" }} />

            </ArticleCardImage>

            <ArticleCardContent>

                <Tag href="#">{tag}</Tag>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Byline>- By <By href="#">{byline}</By></Byline>

            </ArticleCardContent>

        </ArticleCardWrapper>
    )
}

export default ArticleCard;