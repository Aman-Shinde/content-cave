import React,{ useState } from 'react';
import NavigationBar from "./components/NavigationBar";
import brandIndetity from "./BrandIdentity";
import { ThemeProvider, createGlobalStyle, styled } from "styled-components";
import Header from './components/Header';
import Sections from './views/Sections';
import Sections1 from './views/Sections1';
import Footer from './components/Footer';
import Sections2 from './views/Sections2';
import Sections3 from './views/Sections3';
import Article from './pages/Article';


export const lightTheme = {
  backgroundColor: brandIndetity.colors.lightModeColors.backgroundColor,
  invertedBackgroundColor: brandIndetity.colors.darkModeColors.backgroundColor,
  fontColor: brandIndetity.colors.lightModeColors.fontColor,
  invertedFontColor: brandIndetity.colors.darkModeColors.fontColor,
  buttonBackgroundColor: brandIndetity.colors.lightModeColors.buttonBackgroundColor,
  buttonFontColor: brandIndetity.colors.lightModeColors.buttonFontColor,
};

export const darkTheme = {
  backgroundColor: brandIndetity.colors.darkModeColors.backgroundColor,
  invertedBackgroundColor: brandIndetity.colors.lightModeColors.backgroundColor,
  fontColor: brandIndetity.colors.darkModeColors.fontColor,
  invertedFontColor: brandIndetity.colors.lightModeColors.fontColor,
  buttonBackgroundColor: brandIndetity.colors.darkModeColors.buttonBackgroundColor,
  buttonFontColor: brandIndetity.colors.darkModeColors.buttonFontColor,
};
const GlobalStyle = createGlobalStyle<{ theme: any }>`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.invertFontColor};
  }
`;

const SectionWrapper = styled.div`
  padding: 0px 48px;
  padding-top: 24px;
  @media ${brandIndetity.mediaQuaries.mdD} {
    padding: 0px 24px;
    padding-top: 12px; 
  }
`;

function App() {

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme: any) => (
      prevTheme == lightTheme ? darkTheme : lightTheme
    )
    );
  }



  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Header toggleTheme={toggleTheme} />
      <NavigationBar navigation={brandIndetity.navigation} />
      <SectionWrapper>
        <Sections />
        <Sections1 />
        <Sections2 />
        <Sections3/>
        {/* <Article/> */}
      </SectionWrapper>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
