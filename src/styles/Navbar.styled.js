import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

export const NavbarContainer = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all 0.3s ease-in;
    background-color: ${({ bgColor }) => bgColor};
    border: 1px solid #333;
`

export const Logo = styled.p`
    font-size: 1.7rem;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    color: white;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1rem;
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
        color: white;
    }
`

export const MenuIcon = styled(Link)`
    font-size: 1.6rem;
    display: flex;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
    transition: all 0.2s ease;
    align-items: center;
    text-decoration: none;

    @media(min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`

export const NavButton = styled(Link)`
    font-size: 1.2rem;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    color: white;
    text-decoration: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
}
`

export const NavMenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary_light};
    z-index: 1;
`

export const MenuItem = styled(Link)`
    color: #fff;
    font-size: 2.5rem;
    margin-top: 3rem;
    cursor: pointer;
    text-decoration: none;
    to: ${({ to }) => to};
`