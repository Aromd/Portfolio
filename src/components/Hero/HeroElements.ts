import styled from "styled-components";
import { colorsVar, fontsVar} from "../../styles/GlobalStyle";

export const HeroWrapper = styled.section`
    align-items: center;
    background-color: ${colorsVar.primaryColor};
    color: white;
    display: flex;
    height: 900px;
    width: 100%;
    justify-content: center;

    .transition-enter {
        opacity: 0;
        /* transform: translate(-900px, 0); */
    }

    .transition-enter-active {
        opacity: 1;
        /* transform: translate(0, 0); */
        transition: all 2500ms ease-in;
    }

    .transition-exit {
        opacity: 1;
        transform: translate(-900, 0);
        margin-left: -1000px;

        /* @media screen and (max-width: 1300px){
            margin-left: -1000px;
        } */
    }

    .transition-exit-active {
        opacity: 0;
        transform: translate(900px, 0);
        transition: all 2000ms ease-in;
    }
`

export const HeroContainer = styled.div`
    background-color: ${colorsVar.hero.heroBackground};
    border: 1px solid black;
    border-radius: 12px;
    box-shadow: ${colorsVar.hero.heroShadow};
    display: flex;
    flex-direction: column;
    height: 517px;
    width: 72.92%;
    max-width: 1050px;
`
//tabs
export const TabLine = styled.div`
    /* border-bottom: 2px solid black; */
    width: 100%;
    height: 60px;
    background-color: ${colorsVar.hero.heroTab};
    display: flex;
    border-radius: 8px 8px 0px 0px;
`

export const OpenTab = styled.div`
    border-radius: 12px 0px 0px 0px;
    height: 100%;
    width: fit-content;
    border-right: 1px solid black;
    background-color: ${colorsVar.hero.heroBackground};
    /* border-bottom: 2px solid ${colorsVar.hero.heroTab}; */
    display: flex;
    align-items: center;
    justify-content: center;
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 35px;
    }

    p {
        color: ${colorsVar.hero.heroTabText};
        font-size: 20px;
        margin-left: 7px;
    }

    i {
        font-size: 22px;
        color: ${colorsVar.hero.heroTabText};
    }
`
export const EmptyTabs = styled.div`
    width: 86%;
    height: 100%;
    border-bottom: 1px solid black;
`

export const InfoContainer = styled.div`
    border-radius: inherit;
    width: 100%;
    height: 100%;
    display: flex;
`

export const NumbersContainer = styled.div`
    width: 18px;
    height: 400px;
    margin-left: 36px;
    margin-top: 20px;

    p {
        font-size: 16px;
        text-align: right;
        color: ${colorsVar.hero.heroTabText}
    }
`

export const CodeContainer = styled.div`
    width: 714px;
    height: 370px;
    margin-left: 22px;
    margin-top: 20px;
    overflow: auto;

    pre {
        font-size: 16px;
        /* color: ${colorsVar.firstGradient}; */
        /* line-height: 25px; */
        font-family: ${fontsVar.text};
        background: white;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        width: 100%;
    }
`

// Segundo Hero

export const SecondHeroContainer = styled.div`
    width: 77.36%;
    max-width: 1114px;
    height: 500px;
    /* border: 2px solid skyblue; */
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    position: relative;
    box-shadow: ${colorsVar.cardShadow};
    /* background-color: rgba(1,1,1,0.6);
    background-image: url("https://bunkerdb.com/blog/wp-content/uploads/2020/07/Low-code-No-code.jpg");
    background-blend-mode: multiply; */
    background-color: ${colorsVar.secondaryColor};
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: inherit;
    justify-content: center;

    h1 {
        /* margin-top: 150px; */  

        font-size: 80px;
    }

    p{
        margin-top: 15px;
        font-size: 18px;
        background: ${colorsVar.hero.heroTabText};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

export const LogoContainer = styled.div`
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        /* width: 400px; */
        -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  filter: drop-shadow( 0px 10px 7px rgba(0, 0, 0, .6));
    }
    
    p{
        font-family: ${fontsVar.title};
        font-size: 300px;
        font-weight: bold;
        background: ${colorsVar.secondGradient};;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  filter: drop-shadow( 0px 10px 15px rgba(0, 0, 0, .6));
    }
`