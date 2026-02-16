import React from 'react';

// import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    GreyText,
} from '../styles/Global.styled';

// import education styles
import {
    EducationCard,
    EducationHeader,
    EducationContent,
} from '../styles/Education.styled';

const Education = () => {
    return (
        <PaddingContainer
            id="education"
            bottom="10%"
            responsiveTop="6rem"
        >
            <Heading as="h2" size="h2" bottom="2rem">
                Education
            </Heading>

            <FlexContainer justify="space-evenly" wrap="wrap">
                <EducationCard>
                    <EducationHeader>
                        <Heading as="h3" size="h3">
                            Bsc in Computer Science and Engineering
                        </Heading>
                        <GreyText>Instituto Superior Técnico</GreyText>
                        <GreyText>Lisbon, Portugal</GreyText>
                    </EducationHeader>
                    <EducationContent>
                        <ParaText>
                            Comprehensive education in computer science fundamentals, software engineering, and systems design. 
                            Developed strong foundation in networking, infrastructure, and problem-solving through rigorous coursework 
                            and hands-on projects.
                        </ParaText>
                    </EducationContent>
                </EducationCard>
            </FlexContainer>
        </PaddingContainer>
    );
};

export default Education;
