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
                            Apprentice QA Automation Engineer
                        </Heading>
                        <GreyText>Sky Portugal | Jul 2024 – Aug 2024</GreyText>
                    </ExperienceCardHeader>
                    <ExperienceCardContent>
                        <ParaText>
                            Enhanced Jira bug triage using GenAI to automate workflows.
                            Developed Python scripts to integrate with Jira and Azure OpenAI.
                        </ParaText>
                    </ExperienceCardContent>
                </ExperienceCard>

                <ExperienceCard>
                    <ExperienceCardHeader>
                        <Heading as="h3" size="h3">
                            Digital Business Engineer
                        </Heading>
                        <GreyText>t_insight | Sep 2024 – Feb 2025</GreyText>
                    </ExperienceCardHeader>
                    <ExperienceCardContent>
                        <ParaText>
                            Contributed to the design and implementation of dynamic web applications using JavaScript, TypeScript, and ASP.NET MVC.
                        </ParaText>
                    </ExperienceCardContent>
                </ExperienceCard>

                <ExperienceCard>
                    <ExperienceCardHeader>
                        <Heading as="h3" size="h3">
                            Technical Intern - TAC DCSV
                        </Heading>
                        <GreyText>Cisco | Sep 2025 - Present</GreyText>
                    </ExperienceCardHeader>
                    <ExperienceCardContent>
                        <ParaText>
                            Starting role supporting case workflows in data center virtualization environments.
                        </ParaText>
                    </ExperienceCardContent> 
                </ExperienceCard>
                
            </FlexContainer>
        </PaddingContainer>
    );
};

export default WorkExperience;
