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
                            Cisco Certified Network Professional - Data Center (CCNP DC)
                        </Heading>
                        <GreyText>In Progress - 1/2 Exams Passed</GreyText>
                    </CertificationCardHeader>
                    <CertificationCardContent>
                        <ParaText>
                            Advanced certification validating expertise in data center design, implementation, and operations. Completed DCCOR (Data Center Core) in February 2026. Currently pursuing DCAI (Data Center AI Infrastructure) to complete the certification.
                        </ParaText>
                    </CertificationCardContent>
                </CertificationCard>

                <CertificationCard>
                    <CertificationCardHeader>
                        <Heading as="h3" size="h3">
                            Cisco Certified Network Associate Automation (CCNA Automation)
                        </Heading>
                        <GreyText>November 2025</GreyText>
                    </CertificationCardHeader>
                    <CertificationCardContent>
                        <ParaText>
                            Validated skills in network automation, scripting, API development, and infrastructure-as-code practices for modern network management.
                        </ParaText>
                    </CertificationCardContent>
                </CertificationCard>

                <CertificationCard>
                    <CertificationCardHeader>
                        <Heading as="h3" size="h3">
                            Cisco AI Technical Practitioner (AITECH)
                        </Heading>
                        <GreyText>February 2026</GreyText>
                    </CertificationCardHeader>
                    <CertificationCardContent>
                        <ParaText>
                            Designed for technical professionals transitioning to innovation-driven roles augmented by AI. Validates expertise in AI-powered code generation, generative AI workflows, model customization, RAG implementation, and AI workflow automation and optimization.
                        </ParaText>
                    </CertificationCardContent>
                </CertificationCard>
                
            </FlexContainer>
        </PaddingContainer>
    );
};

export default Certifications;
