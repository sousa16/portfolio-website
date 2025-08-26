import React from 'react'

// import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    GreyText,
    IconContainer,
} from '../styles/Global.styled';

// import MySkills styles
import {
    SkillsCardContainer,
    SkillsCard,
} from '../styles/MySkills.styled';

import { Skills } from '../utils/Data';


const MySkills = () => {
    return (
        <PaddingContainer
        id='skills'
        bottom='10%'
        responsiveLeft='1rem'
        responsiveRight='1rem'
        responsiveTop='6rem'>
            <FlexContainer 
            responsiveFlex 
            responsiveDirection='column-reverse' 
            fullWidthChild
            >
                
                {/* --left-section-- */}
                <SkillsCardContainer>
                    {Skills.map((skill) => (
                        <SkillsCard>
                            <IconContainer size='5rem' color='grey'>
                                {skill.icon}
                            </IconContainer>

                            <Heading as='h4' size='h4'>
                                {skill.tech}
                            </Heading>
                        </SkillsCard>
                    ))}
                </SkillsCardContainer>
                
                {/* --right-section-- */}
                <div>
                        <Heading as='h4' size='h4'>
                            MY SKILLS
                        </Heading>

                        <Heading as='h2' size='h2' top='0.5rem'>
                            What <GreyText>I can do</GreyText>
                        </Heading>

                        <ParaText top="2rem" bottom="1.5rem">
                            I am a Computer Science graduate with hands-on experience in networking and cybersecurity. 
                            I enjoy tackling complex technical challenges, from configuring networks and troubleshooting systems 
                            to exploring vulnerabilities in Capture The Flag (CTF) competitions. 
                            My work combines practical problem-solving with continuous learning.
                        </ParaText>

                        <ParaText>
                            I’m committed to expanding my skills in areas like network administration, security analysis, and Python automation, 
                            staying up to date with the latest technologies and best practices in the field.
                        </ParaText>
                </div>            
            </FlexContainer>
        </PaddingContainer>
    )
}

export default MySkills