import React from 'react'
import { styled } from 'styled-components'
import brandIdentity from '../BrandIdentity';
import Sections2 from '../views/Sections2';

const ArticleWrapper = styled.div`
    width: min(680px, 50%);
    margin: 0px auto;

    @media ${brandIdentity.mediaQuaries.mdD} {
        width: 100%;
    }
`;

const ArticleHeader = styled.div`
    padding: 24px 0px;
    border-bottom: 1px solid black;
    text-align: center;
`;

const ArticleTag = styled.a`
    display: block;
    text-transform: uppercase;
    margin-bottom: 8px;
    font-family: ${brandIdentity.typography.articleCardTag.fontFamily};
    font-size: ${brandIdentity.typography.articleCardTag.fontSize};
    font-weight: ${brandIdentity.typography.articleCardTag.fontWeight};
    line-height: ${brandIdentity.typography.articleCardTag.lineHeight};
    color: ${({ theme }) => theme.fontColor};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    @media ${brandIdentity.mediaQuaries.smD} {
        font-size: ${brandIdentity.typography.articleCardTag.smFontSize};
    }
`;

const ArticleTitle = styled.h1`
    margin: 8px 0;
    font-family: ${brandIdentity.typography.articleCardTitle.fontFamily};
    font-size: ${brandIdentity.typography.articleCardTitle.fontSize};
    font-weight: ${brandIdentity.typography.articleCardTitle.fontWeight};
    line-height: ${brandIdentity.typography.articleCardTitle.lineHeight};
    color: ${({ theme }) => theme.fontColor};

    @media ${brandIdentity.mediaQuaries.smD} {
        font-size: ${brandIdentity.typography.articleCardTitle.smFontSize};
    }
`;

const ArticleSubtitle = styled.h2`
    margin: 8px 0;
    font-family: ${brandIdentity.typography.articleCardSubtitle.fontFamily};
    font-size: ${brandIdentity.typography.articleCardSubtitle.fontSize};
    font-weight: ${brandIdentity.typography.articleCardSubtitle.fontWeight};
    line-height: ${brandIdentity.typography.articleCardSubtitle.lineHeight};
    color: ${({ theme }) => theme.fontColor};

    @media ${brandIdentity.mediaQuaries.smD} {
        font-size: ${brandIdentity.typography.articleCardSubtitle.smFontSize};
    }
`;

const AuthorWrapper = styled.div`
    margin-top: 16px;
`;

const AuthorAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: lightgray;
    margin: 0px auto;
    margin-bottom: 8px;
`;

const AuthorName = styled.a`
    font-family: ${brandIdentity.typography.articleCardByline.fontFamily};
    font-size: ${brandIdentity.typography.articleCardByline.fontSize};
    font-weight: ${brandIdentity.typography.articleCardByline.fontWeight};
    line-height: ${brandIdentity.typography.articleCardByline.lineHeight};
    color: ${({ theme }) => theme.fontColor};

    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    @media ${brandIdentity.mediaQuaries.smD} {
        font-size: ${brandIdentity.typography.articleCardByline.smFontSize};
    }
`;

const ArticleDate = styled.div`
    margin-top: 12px;
    font-family: ${brandIdentity.typography.articleCardByline.fontFamily};
    font-size: ${brandIdentity.typography.articleCardByline.fontSize};
    font-weight: ${brandIdentity.typography.articleCardByline.fontWeight};
    line-height: ${brandIdentity.typography.articleCardByline.lineHeight};
    color: ${({ theme }) => theme.fontColor};

    @media ${brandIdentity.mediaQuaries.smD} {
        font-size: ${brandIdentity.typography.articleCardByline.smFontSize};
    }
`;

const ArticleImage = styled.img`
    width: 100%;
    height: auto;
    margin-top: 24px;
    border-radius: 8px;
    object-fit: cover;
`;

const ArticleBody = styled.div`
    padding: 24px 0px;
    border-bottom: 1px solid black;

    h1 {
        margin-bottom: 16px;
        font-family: ${brandIdentity.typography.headings.fontFamily};
        font-size: ${brandIdentity.typography.headings.fontSize};
        font-weight: ${brandIdentity.typography.headings.fontWeight};
        line-height: ${brandIdentity.typography.headings.lineHeight};
        color: ${({ theme }) => theme.fontColor};

        @media ${brandIdentity.mediaQuaries.smD} {
            font-size: ${brandIdentity.typography.headings.smFontSize};
        }
    }

    h2 {
        margin-bottom: 16px;
        font-family: ${brandIdentity.typography.subheadings.fontFamily};
        font-size: ${brandIdentity.typography.subheadings.fontSize};
        font-weight: ${brandIdentity.typography.subheadings.fontWeight};
        line-height: ${brandIdentity.typography.subheadings.lineHeight};
        color: ${({ theme }) => theme.fontColor};
        @media ${brandIdentity.mediaQuaries.smD} {
            font-size: ${brandIdentity.typography.subheadings.smFontSize};
        }
    }

    p {
        margin-bottom: 16px;
        font-family: ${brandIdentity.typography.bodyText.fontFamily};
        font-size: ${brandIdentity.typography.bodyText.fontSize};
        font-weight: ${brandIdentity.typography.bodyText.fontWeight};
        line-height: ${brandIdentity.typography.bodyText.lineHeight};
        color: ${({ theme }) => theme.fontColor};
        @media ${brandIdentity.mediaQuaries.smD} {
            font-size: ${brandIdentity.typography.bodyText.smFontSize};
        }
    }

    ul, ol {
        margin-bottom: 16px;
        padding-left: 20px;
        font-family: ${brandIdentity.typography.bodyText.fontFamily};
        font-size: ${brandIdentity.typography.bodyText.fontSize};
        font-weight: ${brandIdentity.typography.bodyText.fontWeight};
        line-height: ${brandIdentity.typography.bodyText.lineHeight};
        color: ${({ theme }) => theme.fontColor};
        @media ${brandIdentity.mediaQuaries.smD} {
            font-size: ${brandIdentity.typography.bodyText.smFontSize};
        }
    }

    ul li, ol li {
        margin-bottom: 8px;
    }

    img {
        display: block;
        max-width: 100%;
        margin: 16px 0;
    }

    .product {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        padding: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin: 16px 0;
    }

    .product img {
        max-width: 250px;
        margin-right: 16px;
    }

    .product-info {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .product-info h3 {
        margin-bottom: 8px;
        font-family: ${brandIdentity.typography.headings.fontFamily};
        font-size: ${brandIdentity.typography.headings.fontSize};
        font-weight: ${brandIdentity.typography.headings.fontWeight};
        line-height: ${brandIdentity.typography.headings.lineHeight};
        color: ${({ theme }) => theme.fontColor};

        @media ${brandIdentity.mediaQuaries.smD} {
            font-size: ${brandIdentity.typography.headings.smFontSize};
        }
    }

    .product-info p {
        margin-bottom: 8px;
        font-family: ${brandIdentity.typography.bodyText.fontFamily};
        font-size: ${brandIdentity.typography.bodyText.fontSize};
        font-weight: ${brandIdentity.typography.bodyText.fontWeight};
        line-height: ${brandIdentity.typography.bodyText.lineHeight};
        color: ${({ theme }) => theme.fontColor};
        @media ${brandIdentity.mediaQuaries.smD} {
            font-size: ${brandIdentity.typography.bodyText.smFontSize};
        }
    }

    .product-price {
        font-weight: bold;
        font-family: ${brandIdentity.typography.bodyText.fontFamily};
        font-size: ${brandIdentity.typography.bodyText.fontSize};
        line-height: ${brandIdentity.typography.bodyText.lineHeight};
        color: ${({ theme }) => theme.fontColor};
        @media ${brandIdentity.mediaQuaries.smD} {
            font-size: ${brandIdentity.typography.bodyText.smFontSize};
        }
    }

    @media ${brandIdentity.mediaQuaries.mdD} {
        .product {
            flex-direction: column;
        }

        .product img {
            margin: 0px;
        }

        .product-info {
            text-align: center;
        }
    }
`;


const ArticleFooter = styled.div`
    padding: 24px 0px;
    margin-bottom: 32px;
`;

const ArticleTags = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding: 12px 0;
`;

const Tag = styled.span`
    cursor: pointer;
    background-color: ${({ theme }) => theme.fontColor};
    color: white;
    padding: 4px 12px;
    border-radius: 4px;
    font-family: ${brandIdentity.typography.articleCardTag.fontFamily};
    font-size: ${brandIdentity.typography.articleCardTag.fontSize};
    font-weight: ${brandIdentity.typography.articleCardTag.fontWeight};
    line-height: ${brandIdentity.typography.articleCardTag.lineHeight};
    color: ${({ theme }) => theme.invertedFontColor};
    text-transform: uppercase;

    @media ${brandIdentity.mediaQuaries.smD} {
        font-size: ${brandIdentity.typography.articleCardTag.smFontSize}
    }
`;


function Article() {
    return (
        <>

            <ArticleWrapper>

                <ArticleHeader>
                    <ArticleTag>Technology</ArticleTag>
                    <ArticleTitle>The Future of AI</ArticleTitle>
                    <ArticleSubtitle>Exploring the next big things</ArticleSubtitle>
                    <AuthorWrapper>
                        <AuthorAvatar />
                        <AuthorName>John Doe</AuthorName>
                    </AuthorWrapper>
                    <ArticleDate>August 16, 2024</ArticleDate>
                    <ArticleImage src="https://via.placeholder.com/600x400" alt="Article Image" />
                </ArticleHeader>

                <ArticleBody>
                    <h1>Understanding React Components</h1>
                    <p>
                        React components are the building blocks of any React application. They allow you to split the UI into
                        independent, reusable pieces that can be handled separately.
                    </p>

                    <h2>Types of Components</h2>
                    <p>
                        There are two main types of components in React: <strong>Class Components</strong> and
                        <strong>Functional Components</strong>. While class components have been the traditional way to define
                        components, functional components have gained popularity with the introduction of React Hooks.
                    </p>

                    <h3>Functional Components</h3>
                    <p>
                        Functional components are simply JavaScript functions that accept props as an argument and return React elements.
                    </p>

                    <img src="https://via.placeholder.com/600x300" alt="React Functional Components" />

                    <h3>Class Components</h3>
                    <p>
                        Class components are ES6 classes that extend from React.Component. They can hold and manage state,
                        making them more feature-rich compared to functional components.
                    </p>

                    <h2>Benefits of React Components</h2>
                    <ul>
                        <li>Reusability of code</li>
                        <li>Better organization of UI</li>
                        <li>Improved maintainability</li>
                    </ul>

                    <p>
                        Using components effectively can drastically reduce the complexity of your application and help you build
                        scalable and maintainable software.
                    </p>

                    <h2>Featured Product</h2>
                    <div className="product">
                        <img src="https://via.placeholder.com/300x300" alt="Product Image" />
                        <div className="product-info">
                            <h3>React Guidebook</h3>
                            <p>Master React with this comprehensive guide that covers all the basics and advanced concepts.</p>
                        </div>
                        <div className="product-price">$29.99</div>
                    </div>

                    <p>
                        Using components effectively can drastically reduce the complexity of your application and help you build
                        scalable and maintainable software.
                    </p>

                    <h2>Featured Product</h2>

                    <div className="product">
                        <img src="https://via.placeholder.com/300x300" alt="Product Image" />
                        <div className="product-info">
                            <h3>React Guidebook</h3>
                            <p>Master React with this comprehensive guide that covers all the basics and advanced concepts.</p>
                        </div>
                        <div className="product-price">$29.99</div>
                    </div>
                    <div className="product">
                        <img src="https://via.placeholder.com/300x300" alt="Product Image" />
                        <div className="product-info">
                            <h3>React Guidebook</h3>
                            <p>Master React with this comprehensive guide that covers all the basics and advanced concepts.</p>
                        </div>
                        <div className="product-price">$29.99</div>
                    </div>
                    <div className="product">
                        <img src="https://via.placeholder.com/300x300" alt="Product Image" />
                        <div className="product-info">
                            <h3>React Guidebook</h3>
                            <p>Master React with this comprehensive guide that covers all the basics and advanced concepts.</p>
                        </div>
                        <div className="product-price">$29.99</div>
                    </div>
                </ArticleBody>


                <ArticleFooter>

                    <ArticleTags>
                        <Tag>React</Tag>
                        <Tag>JavaScript</Tag>
                        <Tag>Web Development</Tag>
                    </ArticleTags>

                </ArticleFooter>

            </ArticleWrapper>

            <Sections2 />

        </>
    )
}

export default Article
