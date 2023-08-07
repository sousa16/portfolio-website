import styled from 'styled-components';

export const ShowcaseImageCard = styled.div`
    width: max-content;
    padding-top: 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
 
`
