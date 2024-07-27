import styled from 'styled-components';
import brandIndetity, { Navigation } from '../BrandIdentity';

interface props {
    navigation : Navigation[]
}

const StackWrapper = styled.div`
    display : flex;
    flex-diretion: row;
    justify-content: space-around;
    padding: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background-color: ${({theme}) => theme.invertedBackgroundColor}
`;

const AnchorLink = styled.a`
  color: ${({theme}) => theme.invertedFontColor};
  text-decoration: none;
  font-family: ${brandIndetity.typography.navigationLinks.fontFamily};
  font-size: ${brandIndetity.typography.navigationLinks.fontSize};
  font-weight: ${brandIndetity.typography.navigationLinks.fontWeight};
  line-height: ${brandIndetity.typography.navigationLinks.lineHeight};

  @media ${brandIndetity.mediaQuaries.smD} {
      font-size: ${brandIndetity.typography.navigationLinks.smFontSize}
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
    border: none;
    background: none;
`;

function NavigationBar({ navigation } : props) {

    return (
        <StackWrapper>
            {
                navigation.map((link,index) => {
                    if(link.type == 'external') {
                        return <AnchorLink key={index} href={`${link.href}`} target="_blank" referrerPolicy="no-referrer">{link.name}</AnchorLink>
                    }
                    else {
                        return <AnchorLink key={index} href={`${link.href}`}>{link.name}</AnchorLink>
                    }
                })
            }

        </StackWrapper>
    )
}

export default NavigationBar