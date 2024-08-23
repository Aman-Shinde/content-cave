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
    width: 100%;
    max-height: 100%;
    color: ${({ theme }) => theme.fontColor};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${brandIndetity.mediaQuaries.mdD} {
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    @media ${brandIndetity.mediaQuaries.smD} {
        justify-content: space-between;
    }
`;

const ArticleCardImage = styled.div`
    width: fit-content;
    margin-bottom: 12px;

    @media ${brandIndetity.mediaQuaries.mdD} {
        max-width: 50%;
        height: 100%;
        width: auto;
        margin-bottom: 0;
    }
`;

const ArticleCardContent = styled.div`
    width: 100%;
    @media ${brandIndetity.mediaQuaries.mdD} {
        max-width: 50%;
        height: 100%;
        width: auto;
        margin-left: 16px;
    }
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

const Title = styled.a`
    font-family: ${brandIndetity.typography.articleCardTitle.fontFamily};
    font-size: ${brandIndetity.typography.articleCardTitle.fontSize};
    font-weight: ${brandIndetity.typography.articleCardTitle.fontWeight};
    line-height: ${brandIndetity.typography.articleCardTitle.lineHeight};
    margin-bottom: 4px;
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};

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

const ResponsiveArticleCard = ({ title, subtitle, byline, tag, imgurl }: componentProps) => {
    return (
        <>
            <ArticleCardWrapper>

                <ArticleCardImage>

                    <img src={imgurl} alt="article-image" style={{ maxWidth: "100%" }} onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x300" }} />

                </ArticleCardImage>

                <ArticleCardContent>

                    <Tag href="#">{tag}</Tag>
                    <Title href="#article">{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <Byline>- By <By href="#">{byline}</By></Byline>

                </ArticleCardContent>

            </ArticleCardWrapper>
        </>
    );
}

export default ResponsiveArticleCard;
