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
        top='10%'
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

                        <ParaText top='2rem' bottom='1.5rem'>
                            As a Computer Science student, I'm actively working on expanding my knowledge and skills in various areas of technology,
                            such as Cybersecurity, Web Development, Mobile Development, and more. I love problem solving, hence why I really
                            enjoy playing CTFs and embracing projects that challenge me in new ways. 
                        </ParaText>

                        <ParaText>
                        I'm committed to always learning and growing, with the intention of keeping up with changes in technology and staying ahead.

                        </ParaText>
                </div>            
            </FlexContainer>
        </PaddingContainer>
    )
}

export default MySkills