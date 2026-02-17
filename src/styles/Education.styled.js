import styled from 'styled-components';

export const EducationCard = styled.div`
    background: #1f1f1f;
    border-radius: 10px;
    padding: 1.5rem;
    width: 45%;
    margin: 1rem 0;
    transition: all 0.3s ease;
    
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 48%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
    }
`;

export const EducationHeader = styled.div`
    margin-bottom: 1rem;
    
    h3 {
        font-size: 1.8rem;
        color: #fff;
        margin-bottom: 0.5rem;
    }

    span {
        display: block;
        color: #9e9e9e;
        font-size: 0.95rem;
        margin-bottom: 0.25rem;
    }
`;

export const EducationContent = styled.div`
    p {
        font-size: 1rem;
        color: #d3d3d3;
        line-height: 1.5;
    }
`;
