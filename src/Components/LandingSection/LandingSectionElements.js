import styled from 'styled-components';
import img from '../../Images/MK_Logo.png'

export const LandingContainer = styled.div`
    display: grid;
    flex-direction: column;
    padding: 0 30px;
    background-color: black;
    position: relative;
    top: 0;
    z-index: 1;
    justify-content: center;
    align-items: center;

    height: 100vh;
    min-height: 1000px;

`;

export const Image = styled.img`
    object-fit: fill;
    max-height: 60vh;
    max-width: 100vw;
    
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const Content = styled.div`
    z-index: 3;
    
    max-width: 1290px;
    
    padding: auto auto;
    display: flex;
    flex-direction: column;
    align-items: bottom;
`;

export const LandingH1= styled.h1`
    color: #D4AF37;
    
    font-size: 3rem;
    text-align: center;
`;

export const LandingH2= styled.h1`
    color: #D4AF37;
    text-shadow: -5px 0 white, 0 5px white, 5px 0 white, 0 -5px white;
    font-size: 3rem;
    text-align: center;
`;

export const LandingP = styled.p`
    color: #D4AF37;
    text-shadow: -3px 0 white, 0 3px white, 3px 0 white, 0 -3px white;
    font-size: 2rem;
    text-align: center;
`;

export const BtnWrap = styled.div`
    z-index: 3;
    max-width: 1000px;
    width: 100%;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    grid
`;