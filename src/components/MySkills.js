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
                            Technical <GreyText>Expertise</GreyText>
                        </Heading>

                        <ParaText top="2rem" bottom="1.5rem">
                            I specialize in network engineering, cybersecurity, and automation. My expertise spans Cisco technologies, 
                            network architecture design, and hands-on security research through CTF competitions. I'm proficient in Python 
                            for both scripting and automation tasks, enabling infrastructure-as-code practices and network automation.
                        </ParaText>

                        <ParaText>
                            I combine theoretical knowledge with practical problem-solving, continuously expanding my capabilities in 
                            emerging technologies and best practices in networking and security.
                        </ParaText>
                </div>            
            </FlexContainer>
        </PaddingContainer>
    )
}

export default MySkills