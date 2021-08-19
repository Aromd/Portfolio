import { createGlobalStyle } from "styled-components";

export const colorsVar = {
    primaryColor: "#151932",
    secondaryColor: "#252C48",
    cardShadow: "0px 14.3889px 28.7778px rgba(0, 0, 0, 0.25)",
    hoverCardShadow: "0px 30px 20px rgba(0, 0, 0, 0.35)",
    buttonShadow: "0px 10px 15px rgba(0, 0, 0, 0.25)",
    hoverButtonShadow: "0px 20px 30px rgba(0, 0, 0, 0.35)",
    titles: "#24292f",
    borders: "#eaeef2",
    firstGradient: "linear-gradient(116.6deg, #13338F 0%, rgba(123, 32, 231, 1) 53.65%, #FFA3BF 100%)",
    secondGradient: "linear-gradient(112.15deg, rgba(138, 43, 226, 0.85) 24.83%, rgba(60, 185, 252, 0.85) 94.42%)",
    thirdGradient: "linear-gradient(117.03deg, #52E2C1 31.77%, #3CB9FC 100%)",
    hero: {
        heroBackground: "#232a2f",
        heroTab: "#1a2023",
        heroTabText: "#8f99a1",
        heroShadow: "0px 0px 20px #FFFFFF"
    }
}

export const fontsVar = {
    title: "'Roboto', sans-serif;",
    text: "'Noto Sans JP', sans-serif;"
}

export const responsiveSize = {
    mobileSmall: "max-width: 400px",
    mobile: "max-width: 600px",
    tabletSmall: "max-width: 768px",
    tablet: "max-width: 992px",
    laptopSmall: "max-width: 1250px",
}

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    }

    body, html {
        background-color: ${colorsVar.primaryColor};
        /* scroll-behavior: smooth; */
    }

    #root {
        margin: 0 auto;
    }

    p {
        font-family: ${fontsVar.text};
    }

    h1,h2,h3 {
        font-family: ${fontsVar.title};
        color: white;
    }

    h2 {
        font-size: 60px;
    }

    h3 {
        font-size: 44px;
    }
`;

export default GlobalStyle;