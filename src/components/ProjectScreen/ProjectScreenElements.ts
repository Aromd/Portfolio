import styled from 'styled-components';
import { colorsVar, responsiveSize } from '../../styles/GlobalStyle';

const {tabletSmall, mobile, mobileSmall} = responsiveSize;

interface FrontImageProps {
    imageTwo: boolean;
}

export const ProjectScreenWrapper = styled.main`
    background-color: ${colorsVar.primaryColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    h1{
        padding-top: 150px;
        text-align: center;
        font-size: 80px;
    }

    @media only screen and (${mobile}) {
        h1 {
            font-size: 45px;
        }
    }
`

export const ImagesContainer = styled.div`
    margin-top: 90px;
    width: 80%;
    height: 474px;
    max-width: 982px;
    position: relative;
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
    flex-direction: column;

    @media only screen and (${mobileSmall}) {
        height: fit-content;
        justify-content: space-around;
        width: 95%;
    }

    
`

export const BackImage = styled.img`
    max-height: 323px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    box-shadow: ${colorsVar.cardShadow};
    max-width: 100%;
    @media only screen and (${mobileSmall}) {
     position: relative;   
    }
`

export const FrontImage = styled.img<FrontImageProps>`
    max-height: 323px;
    position: absolute;
    right:0;
    bottom: 0;
    border-radius: 4px;
    box-shadow: ${colorsVar.hoverCardShadow};
    max-width: 100%;
    @media only screen and (${mobileSmall}) {
     position: relative;   
    }
`

export const InfoContainer = styled.div `
    width: 80%;
    max-width: 1014px;
    /* border: 2px solid red; */
    margin-top: 90px;
    /* height: 771px; */
    background-color: ${colorsVar.secondaryColor};
    border-radius: 8px;
    display : grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    padding: 20px;
    box-shadow: ${colorsVar.cardShadow};

    @media only screen and (${tabletSmall}) {
        grid-template-columns: 1fr;
    }

    @media only screen and (${mobileSmall}) {
        width: 95%;
    }
`

export const ResumenInfo = styled.div`
    margin-bottom: 30px;
    padding: 30px;
    /* border: 2px solid red; */
    color: ${colorsVar.hero.heroTabText};

    h3 {
        padding-bottom: 25px;
        font-size: 30px;
    }

    @media only screen and (${mobileSmall}) {
        padding: 2px;
    }
`

export const TecnologiasInfo = styled(ResumenInfo)`
`

export const AprendizajeInfo = styled(ResumenInfo)`
`

export const RolInfo = styled(ResumenInfo)`
`

export const LinksInfoContainer = styled.div`
    /* border: 2px solid red; */
    width: 100%;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    color: ${colorsVar.hero.heroTabText};
    grid-column: 1/3;
    justify-content: center;
    height: 150px;

    div {
        display: flex;
        width: 90px;
        /* border: 2px solid red; */
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    @media only screen and (${tabletSmall}) {
        grid-column: 1;
    }
`

export const ArrowsContainer = styled.div`
    width: 100%;
    height: 150px;
    display : flex;
    justify-content: space-around;
    align-items: flex-end;
    /* border: 2px solid red; */
    
    div {
        width: 250px;
        display: flex;
        color: white;
        /* border: 2px solid red; */
        padding: 10px 0px;
        cursor: pointer;
        align-items: center;
        justify-content: space-between
        
    }

    @media only screen and (${tabletSmall}) {
        /* flex-direction: column; */
        /* align-items: center; */
    }

    @media only screen and (${mobile}) {
        div {
            width: 120px;
        }
    }
`

export const SmallArrowRight = styled.img`
    display: none;

    @media only screen and (${mobile}) {
        display: flex;
    }
`

export const ArrowRight = styled.img`
    display: flex;

    @media only screen and (${mobile}) {
        display: none;
    }
`

export const SmallArrowLeft = styled.img`
    display: none;

    @media only screen and (${mobile}) {
        display: flex;
    }
`

export const ArrowLeft = styled.img`
    display: flex;

    @media only screen and (${mobile}) {
        display: none;
    }
`