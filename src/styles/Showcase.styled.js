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
`;

export const InitialsBadge = styled.div`
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary_light} 0%, ${({ theme }) => theme.colors.primary} 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border: 2px solid ${({ theme }) => theme.colors.primary_light};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`
