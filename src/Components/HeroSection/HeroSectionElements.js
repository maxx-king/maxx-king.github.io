import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: grid;
    grid-template-rows: 90% 10%;
    background: linear-gradient(180deg, black, #404040);
    backdrop-filter: blur(10px);

                
    height: 100vh;
    max-height: 1080px;
    width: 100%;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-rows: 70% 30%;
    }
`;

export const LogoImg = styled.img`
    max-width: 1290px;
    height: 100%;
    width: 100%;

`;

export const BtnRow = styled.div`
    z-index: 3;
    width: 100%;
    max-width: 1290px;
    margin: auto auto;

`;

export const BtnWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0 10%;
    }
`;
