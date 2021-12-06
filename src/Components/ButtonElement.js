import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: white;
    white-space: nowrap;
    padding: 12px 24px;
    display: flex;
    justify-content: space-around;

    color: #0056C6;
    font-size: 1.5rem;
    font-weight: 900;

    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.07);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;