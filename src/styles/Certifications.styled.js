import styled from 'styled-components';

// Container for the Certifications Section
export const CertificationCard = styled.div`
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

    @media (max-width: 768px) {
        width: 100%;
    }
`;

// Header styling inside CertificationCard
export const CertificationCardHeader = styled.div`
    margin-bottom: 1rem;
    h3 {
        font-size: 1.8rem;
        color: #fff;
        margin-bottom: 0.5rem;
    }

    GreyText {
        color: #9e9e9e;
    }
`;

// Content within each CertificationCard
export const CertificationCardContent = styled.div`
    ParaText {
        font-size: 1rem;
        color: #d3d3d3;
        line-height: 1.5;
    }
`;
