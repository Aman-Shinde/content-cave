import React, { useState } from 'react';
import styled from 'styled-components';
import { CgDarkMode } from "react-icons/cg";
import brandIndetity from './../BrandIdentity';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

interface HeaderProps {
  toggleTheme: () => void;
}

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;

  display: grid;
  grid-template-columns: 17rem auto 17rem;
  padding: 1rem 2rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};

  @media ${brandIndetity.mediaQuaries.mdD} {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  width: 100%;
  text-align: center;

  @media ${brandIndetity.mediaQuaries.mdD} {
    justify-self: start;
  }
`;

const GridItemWrapper = styled.div<{ $position: string }>`
  justify-self: ${({ $position }) => $position};
  align-self: center;

  @media ${brandIndetity.mediaQuaries.mdD} {
    &:nth-child(1) {
      order: 1;
      justify-self: start;
    }

    &:nth-child(2) {
      order: 2;
      justify-self: center;
    }

    &:nth-child(3) {
      order: 3;
      justify-self: end;
    }
  }
`;

const Hamburger = styled.div<{ $isOpen: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20px;
  position: relative;
  width: 25px;

  span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: ${({ theme }) => theme.fontColor};
    transition: all 0.3s ease;
    position: absolute;
  }

  span:nth-child(1) {
    top: ${({ $isOpen }) => ($isOpen ? '9px' : '0')};
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  span:nth-child(2) {
    top: 9px;
    opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
  }

  span:nth-child(3) {
    top: ${({ $isOpen }) => ($isOpen ? '9px' : '18px')};
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 4rem;
  left: 0;
  min-width: 100%;
  height: calc(100% - 4rem);
  background: white;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

const MenuContentWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  padding: 12px 2rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100%;
  text-align: center;

  @media ${brandIndetity.mediaQuaries.mdD} {
    padding: 12px 1rem;
  }
`;

const MenuContent = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0px;
  grid-row: span 1;
  margin: 0px auto;
  width: 50%;
  border-bottom: ${({theme}) => `1px solid ${theme.fontColor}`};
  
  @media ${brandIndetity.mediaQuaries.mdD} {
    padding: 1rem 0px;
    width: 80%;
  }
  
  a {
    margin: 0.5rem 0;
    text-decoration: none;
    display: block;
    font-family: ${brandIndetity.typography.bodyText.fontFamily};
    font-size: ${brandIndetity.typography.bodyText.fontSize};
    font-weight: ${brandIndetity.typography.bodyText.fontWeight};
    line-height: ${brandIndetity.typography.bodyText.lineHeight};
    color: ${({ theme }) => theme.fontColor};

    &:hover {
      text-decoration: underline;
    }

    @media ${brandIndetity.mediaQuaries.smD} {
      font-size: ${brandIndetity.typography.bodyText.smFontSize}
    }
  }
`;

const SocialWrapper = styled.div`
  grid-row: span 1;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0px;
  margin: 0px auto;
  align-self: center;
  @media ${brandIndetity.mediaQuaries.mdD} {
    padding: 1rem 0px;
    width: 80%;
  }
  color: ${({theme}) => theme.fontColor};

  svg {
    cursor: pointer;
    
    &:hover {
      transform: scale(2);
    }
  }
`;

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <GridItemWrapper $position={"start"}>
          <Hamburger onClick={toggleOverlay} $isOpen={isOpen}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </GridItemWrapper>
        <GridItemWrapper $position={"center"}>
          <Logo>Logo</Logo>
        </GridItemWrapper>
        <GridItemWrapper $position={"end"}>
          <CgDarkMode onClick={toggleTheme} size={20} title={"Toggle Theme"} style={{cursor:"pointer"}} />
        </GridItemWrapper>
      </HeaderWrapper>
      <Overlay $isOpen={isOpen} onClick={toggleOverlay}>
        <MenuContentWrapper>
          <MenuContent>
            <a href="#">Channel 1</a>
            <a href="#">Channel 2</a>
            <a href="#">Channel 3</a>
          </MenuContent>
          <MenuContent>
            <a href="#">Channel 4</a>
            <a href="#">Channel 5</a>
            <a href="#">Channel 6</a>
          </MenuContent>
          <MenuContent>
            <a href="#">Channel 7</a>
            <a href="#">Channel 8</a>
            <a href="#">Channel 9</a>
          </MenuContent>
          <SocialWrapper>

            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
            <FaDiscord />
            <FaPinterestP />

          </SocialWrapper>
        </MenuContentWrapper>

      </Overlay>
    </>
  );
};

export default Header;
