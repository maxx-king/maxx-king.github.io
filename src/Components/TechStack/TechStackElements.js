import styled from 'styled-components'


export const Container = styled.div`
    height: 500px;
    background: white;
    margin: 100px;
`;

export const Row = styled.div`
    background: #F0F0F0;
    border-radius: 10px;
    width: 100%;
    display: grid;
    grid-auto-columns: auto;
    grid-template-areas: 'icon name exp';
    padding: 10px 0;
    margin-top: 10px;
`;

export const Name = styled.p`
    font-size: 2.5rem;
    text-align: center;
    color: #0056C6;

`;

export const Exp = styled.p`
    font-size: 2.5rem;
    text-align: right;
    padding-right: 25px;
`;

