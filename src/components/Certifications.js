import React from 'react';

// import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    GreyText,
} from '../styles/Global.styled';

// import showcase styles
import {
    CertificationCard,
    CertificationCardHeader,
    CertificationCardContent,
} from '../styles/Certifications.styled';

const Certifications = () => {
    return (
        <PaddingContainer
            id="experience"
            bottom="10%"
            responsiveTop="6rem"
        >
            <Heading as="h2" size="h2" bottom="2rem">
                Certifications
            </Heading>

            <FlexContainer justify="space-evenly" wrap="wrap">
                {/* Certification Cards */}
                <CertificationCard>
                    <CertificationCardHeader>
                        <Heading as="h3" size="h3">
                            Cisco Certified Network Associate (CCNA)
                        </Heading>
                        <GreyText>November 2025</GreyText>
                    </CertificationCardHeader>
                    <CertificationCardContent>
                        <ParaText>
                            Validated skills in network fundamentals, IP connectivity, security fundamentals, and automation.
                        </ParaText>
                    </CertificationCardContent>
                </CertificationCard>

                <CertificationCard>
                    <CertificationCardHeader>
                        <Heading as="h3" size="h3">
                            Cisco Certified DevNet Associate (DEVASC)
                        </Heading>
                        <GreyText>November 2025</GreyText>
                    </CertificationCardHeader>
                    <CertificationCardContent>
                        <ParaText>
                            Validated skills in software development, including APIs, microservices, and application deployment.
                        </ParaText>
                    </CertificationCardContent>
                </CertificationCard>
                
            </FlexContainer>
        </PaddingContainer>
    );
};

export default Certifications;
