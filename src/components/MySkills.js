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
                            Having recently completed my Bachelor's, 
                            I'm actively expanding my knowledge and skills in various areas of technology, 
                            with a strong focus on Networking and Cybersecurity. 
                            I enjoy tackling complex problems and working on projects that challenge me to learn and grow.
                        </ParaText>

                        <ParaText>
                            I'm committed to continuous learning and staying up to date with advancements in technology to refine my expertise 
                            and stay ahead in the field.
                        </ParaText>
                </div>            
            </FlexContainer>
        </PaddingContainer>
    )
}

export default MySkills