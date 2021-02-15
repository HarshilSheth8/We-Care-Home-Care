import styled from 'styled-components';
import { Link } from 'react-scroll';   

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#ffe484': '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px': '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606': '#fff !important')};
    font-size: ${({ fontBig }) => (fontBig ? '20px': '16px')};
    outline: none;
    border:  none;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
    border: 1px solid #010606;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    

    &:hover {
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background: ${({ primary }) => (primary ? '#563D7C': '#15cdfc')};
    text-decoration: none;
    border-color: #ffe484 !important;
    border: 1px solid;
    color: #ffe484;

    
    }
`
