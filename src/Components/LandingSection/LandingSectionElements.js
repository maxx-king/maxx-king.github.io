import styled from 'styled-components';

export const LandingContainer = styled.div`
    background: black;
    display: grid;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    top: 0;
    z-index: 1;
    justify-content: center;
    display: flex;
    align-items: center;
`;

export const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
`;

export const Content = styled.div`
    z-index: 3;
    
    max-width: 1290px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LandingH1= styled.h1`
    color: #0056C6;
    text-shadow: -5px 0 white, 0 5px white, 5px 0 white, 0 -5px white;
    font-size: 3rem;
    text-align: center;
`;

export const LandingH2= styled.h1`
    color: #0056C6;
    text-shadow: -5px 0 white, 0 5px white, 5px 0 white, 0 -5px white;
    font-size: 3rem;
    text-align: center;
`;

export const LandingH3= styled.h1`
    color: #0056C6;
    text-shadow: -5px 0 white, 0 5px white, 5px 0 white, 0 -5px white;
    font-size: 3rem;
    text-align: center;
`;

export const LandingP = styled.p`
    color: white;
    text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;
    font-size: 2rem;
`;

export const BtnWrap = styled.div`
    z-index: 3;
    max-width: 1000px;
    width: 100%;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 15px;
`;