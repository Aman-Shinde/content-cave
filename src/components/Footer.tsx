import React from 'react'
import { styled } from 'styled-components';
import brandIndetity from '../BrandIdentity';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const FooterWrapper = styled.div`
    margin-top: 48px;
    padding: 24px 24px;
    background-color: ${({ theme }) => theme.invertedBackgroundColor};
`;

const GridContainer = styled.div`
    width: 100%;
    margin: 0px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-row: repeat(1, 1fr);
    column-gap: 24px;
    row-gap: 24px;
    align-items: center;
    
    @media ${brandIndetity.mediaQuaries.mdD} {
        padding : 12px 12px;

        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: auto;
        row-gap: 0px;
    }
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    color: ${({ theme }) => theme.invertedFontColor};
`;

const AnchorLink = styled.a`
  color: ${({ theme }) => theme.invertedFontColor};
  text-decoration: none;
  margin: 12px auto;

  font-family: ${brandIndetity.typography.bodyText.fontFamily};
  font-size: ${brandIndetity.typography.bodyText.fontSize};
  font-weight: ${brandIndetity.typography.bodyText.fontWeight};
  line-height: ${brandIndetity.typography.bodyText.lineHeight};

  &:hover {
      text-decoration: underline;
  }

  @media ${brandIndetity.mediaQuaries.smD} {
    margin: 8px auto;
    font-size: ${brandIndetity.typography.bodyText.smFontSize}
  }
`;

const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0px;
  margin: 0px auto;
  align-self: center;
  @media ${brandIndetity.mediaQuaries.mdD} {
    margin-top: 24px;
    padding: 1rem 0px;
    width: 80%;
  }
  color: ${({ theme }) => theme.invertedFontColor};

  svg {
    cursor: pointer;
    
    &:hover {
      transform: scale(2);
    }
  }
`;

const Logo = styled.h1`
  @media ${brandIndetity.mediaQuaries.mdD} {
      margin-bottom: 24px;
  }
`;

const Footer: React.FC = () => {
    return (
        <>

            <FooterWrapper>

                <GridContainer>
                    <GridItem>
                        <GridContainer>
                            <GridItem>
                                    <Logo> Logo </Logo>
                            </GridItem>
                            <GridItem>
                                <AnchorLink href="#"> Channel-1 </AnchorLink>
                                <AnchorLink href="#"> Channel-2 </AnchorLink>
                                <AnchorLink href="#"> Channel-3 </AnchorLink>
                            </GridItem>
                        </GridContainer>
                    </GridItem>

                    <GridItem>
                        <GridContainer>
                            <GridItem>
                                <AnchorLink href="#"> Channel-1 </AnchorLink>
                                <AnchorLink href="#"> Channel-2 </AnchorLink>
                                <AnchorLink href="#"> Channel-3 </AnchorLink>
                            </GridItem>
                            <GridItem>
                                <SocialWrapper>
                                    <FaFacebookF />
                                    <FaInstagram />
                                    <FaXTwitter />
                                    <FaYoutube />
                                    <FaDiscord />
                                    <FaPinterestP />
                                </SocialWrapper>
                            </GridItem>
                        </GridContainer>


                    </GridItem>
                </GridContainer>

            </FooterWrapper>

        </>
    )
}

export default Footer


