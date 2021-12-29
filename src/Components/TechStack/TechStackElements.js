import styled from 'styled-components'


export const Container = styled.div`
    background: #404040;
`;

export const Wrapper = styled.div`
    max-width: 1242px;
    margin: auto auto;
    padding: 50px 24px;
`;

export const Row = styled.div`
    background: #F0F0F0;
    border-radius: 50px;
    width: 100%;
    display: grid;
    grid-auto-columns: auto;
    grid-template-areas: 'icon name exp';
    padding: 10px 0;
    margin-top: 10px;
    
    @media screen and (max-width: 390px) {
        grid-template-areas: 'icon exp';
    }

`;

export const Name = styled.p`
    font-size: 2.5rem;
    font-weight: 900;
    text-align: center;
    color: #D4AF37;

    @media screen and (max-width: 590px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 390px) {
        display: none;
    }
`;

export const NameB = styled.p`
    font-size: 2.5rem;
    font-weight: 900;
    text-align: center;
    color: #D4AF37;

    @media screen and (max-width: 590px) {
        font-size: 1.5rem;
    }
`;

export const Exp = styled.p`
    font-size: 2.5rem;
    text-align: right;
    padding-right: 25px;

    @media screen and (max-width: 590px) {
        font-size: 1.5rem;
    }
`;

