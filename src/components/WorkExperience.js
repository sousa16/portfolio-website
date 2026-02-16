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
    ExperienceCard,
    ExperienceCardHeader,
    ExperienceCardContent,
} from '../styles/WorkExperience.styled';

const WorkExperience = () => {
    return (
        <PaddingContainer
            id="experience"
            bottom="10%"
            responsiveTop="6rem"
        >
            <Heading as="h2" size="h2" bottom="2rem">
                Work Experience
            </Heading>

            <FlexContainer justify="space-evenly" wrap="wrap">
                {/* Work Experience Cards */}
                <ExperienceCard>
                    <ExperienceCardHeader>
                        <Heading as="h3" size="h3">
                            Technical Intern - TAC DCSV
                        </Heading>
                        <GreyText>Cisco | Sep 2025 - Present</GreyText>
                    </ExperienceCardHeader>
                    <ExperienceCardContent>
                        <ParaText>
                            Providing technical support for Cisco Unified Computing System (UCS) technologies as part of the Server Virtualization TAC team. Supporting complex customer environments with UCS B, C, and X series servers, UCS Central, and Intersight. Troubleshooting virtualized infrastructure issues across VMware, Hyper-V, and other hypervisor platforms to resolve customer technical challenges.
                        </ParaText>
                    </ExperienceCardContent> 
                </ExperienceCard>

                <ExperienceCard>
                    <ExperienceCardHeader>
                        <Heading as="h3" size="h3">
                            Digital Business Engineer
                        </Heading>
                        <GreyText>t_insight | Sep 2024 – Feb 2025 (During Bachelor's)</GreyText>
                    </ExperienceCardHeader>
                    <ExperienceCardContent>
                        <ParaText>
                            Designed and developed dynamic web applications using JavaScript, TypeScript, and ASP.NET MVC. Collaborated on full-stack solutions with emphasis on cross-platform compatibility and user experience optimization across web and email channels.
                        </ParaText>
                    </ExperienceCardContent>
                </ExperienceCard>

                <ExperienceCard>
                    <ExperienceCardHeader>
                        <Heading as="h3" size="h3">
                            Apprentice QA Automation Engineer
                        </Heading>
                        <GreyText>Sky Portugal | Jul 2024 – Aug 2024 (Summer Internship)</GreyText>
                    </ExperienceCardHeader>
                    <ExperienceCardContent>
                        <ParaText>
                            Developed a Retrieval Augmented Generation (RAG) powered Slack bot to automate bug ticket triage and routing in Jira. Built Python integration with Jira and Azure OpenAI to enable intelligent ticket classification and team-based distribution. Project demonstrates advanced AI application for workflow automation and operational efficiency improvements.
                        </ParaText>
                    </ExperienceCardContent>
                </ExperienceCard>
                
            </FlexContainer>
        </PaddingContainer>
    );
};

export default WorkExperience;
