export interface Navigation {
    type: String,
    name: String,
    href: String
}

export interface Colors {
    backgroundColor: string;
    fontColor: string;
    buttonBackgroundColor: string;
    buttonFontColor: string;
}

export interface TypographySettings {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    smFontSize: string;
}

interface Typography {
    bodyText: TypographySettings;
    navigationLinks: TypographySettings;
    headings: TypographySettings;
    subheadings: TypographySettings;
    captions: TypographySettings;
    articleCardTag: TypographySettings;
    articleCardTitle: TypographySettings;
    articleCardSubtitle: TypographySettings;
    articleCardByline: TypographySettings;
}

export interface MediaQuaries {
    smD: string,
    mdD: string,
    lgD: string,
    xlD: string
}

export interface Modes {
    darkModeColors: Colors,
    lightModeColors: Colors
}

export interface ButtonStyles {
    default: Colors;
    hover: Colors;
    active: Colors;
}

const navigation: Navigation[] = [{
    type: 'channel',
    name: 'channel-1',
    href: '#channel-1'
},
{
    type: 'channel',
    name: 'channel-2',
    href: '#channel-2'
},
{
    type: 'external',
    name: 'external-1',
    href: '#external-1'
},
{
    type: 'external',
    name: 'external-2',
    href: '#external-2'
}];

const subNavigation: Navigation[] = [{
    type: 'channel',
    name: 'channel-1',
    href: '#channel-1'
},
{
    type: 'channel',
    name: 'channel-2',
    href: '#channel-2'
},
{
    type: 'external',
    name: 'external-1',
    href: '#external-1'
},
{
    type: 'external',
    name: 'external-2',
    href: '#external-2'
}];

const darkModeColors: Colors = {
    backgroundColor: '#121212',
    fontColor: '#ffffff',
    buttonBackgroundColor: '#333333',
    buttonFontColor: '#ffffff',
};

const lightModeColors: Colors = {
    backgroundColor: '#ffffff',
    fontColor: '#000000',
    buttonBackgroundColor: '#f0f0f0',
    buttonFontColor: '#000000',
};

const typography: Typography = {
    bodyText: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',

        smFontSize: '12px'
    },
    navigationLinks: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '1.2',

        smFontSize: '10px'
    },
    headings: {
        fontFamily: 'Lora, serif',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '1.3',

        smFontSize: '20px'
    },
    subheadings: {
        fontFamily: 'Merriweather, serif',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '1.3',

        smFontSize: '16px'
    },
    captions: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '1.4',

        smFontSize: '8px'
    },
    articleCardTag: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '12px',
        fontWeight: '600',
        lineHeight: '1.2',

        smFontSize: '8px'
      },
    
    articleCardTitle: {
        fontFamily: 'Lora, serif',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '1.3',

        smFontSize: '16px'
      },
      articleCardSubtitle: {
        fontFamily: 'Merriweather, serif',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.4',

        smFontSize: '12px'
      },
      articleCardByline: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '1.5',

        smFontSize: '10px'
      },
};

const button: ButtonStyles = {
    default: {
        backgroundColor: '#007bff',
        fontColor: '#ffffff',
        buttonBackgroundColor: '#007bff',
        buttonFontColor: '#ffffff',
    },
    hover: {
        backgroundColor: '#0056b3',
        fontColor: '#ffffff',
        buttonBackgroundColor: '#0056b3',
        buttonFontColor: '#ffffff',
    },
    active: {
        backgroundColor: '#004085',
        fontColor: '#ffffff',
        buttonBackgroundColor: '#004085',
        buttonFontColor: '#ffffff',
    },
};

const mediaQuaries: MediaQuaries = {
    smD: 'screen and (max-width: 600px)',
    mdD: 'screen and (max-width: 960px)',
    lgD: 'screen and (max-width: 1280px)',
    xlD: 'screen and (max-width: 1920px)'
};

interface BrandIdentity {
    logo: String;
    navigation: Navigation[];
    subNavigation: Navigation[];
    colors: Modes;
    typography: Typography;
    button: ButtonStyles;
    mediaQuaries: MediaQuaries;
}

const brandIdentity: BrandIdentity = {
    logo: "./logo.png",
    navigation,
    subNavigation,
    colors: {
        darkModeColors,
        lightModeColors
    },
    typography,
    button,
    mediaQuaries
}

export default brandIdentity