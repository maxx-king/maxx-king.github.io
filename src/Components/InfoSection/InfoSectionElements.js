import styled from 'styled-components'

export const InfoContainer = styled.div`
    background: #404040;   
    width: 100%; 
`;

export const Content = styled.div`
    z-index: 1; 
    max-width: 1290px;

    padding: 100px 24px; 
    margin-left: auto;
    margin-right: auto;
    justify-content: center;

    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({imgStart}) => (imgStart? `'imgCol textCol'` :
                                                      `'textCol imgCol'`)};

    @media screen and (max-width: 1000px) {
        grid-template-areas: 'textCol' 'imgCol';
    }
`;

export const TextCol = styled.div`
    grid-area: textCol;
    margin-right: 3rem;
    margin-left: 3rem;

    @media screen and (max-width: 700px) {
        transform: scale(0.7);
        &:hover {
            transform: scale(0.74);
        }
    }
`;

export const InfoH1 = styled.h1`
    color: #D4AF37;
    text-shadow: -5px 0 black, 0 5px black, 5px 0 black, 0 -5px black;
    font-size: 2.5rem;

    @media screen and (max-width: 1000px) {
        font-size: 2rem;
    }
    
`;

export const InfoP = styled.p`
    color: white;
    text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;
    font-size: 1.5rem;

    
`;

export const ImgCol = styled.div`
    margin-top: 3rem;
    margin-left: 3rem;
    margin-right: 3rem;

    grid-area: imgCol;
    background: white;
    border-radius: 10px;
    padding: 5px;

    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.04);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 700px) {
        transform: scale(0.7);
        &:hover {
            transform: scale(0.74);
        }
    }
`;

export const Img = styled.img`
    background-image: url(${({img}) => (img)});
    height: auto;
    width: auto;
    
    display: block;
    margin-left: auto;
    margin-right: auto;
`;