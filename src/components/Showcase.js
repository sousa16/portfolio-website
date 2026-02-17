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

// import showcase styles
import {
    ShowcaseImageCard,
    InitialsBadge,
} from '../styles/Showcase.styled'

// import react icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';


const Showcase = () => {
  return (
    <PaddingContainer 
        id='home'
        left='3%'
        right='10%'
        top='15%'
        bottom='10%'
        responsiveLeft='1rem'
        responsiveRight='1rem'
        responsiveTop='8rem'
    >
        <FlexContainer fullWidthChild>

            {/* --left-content-- */}
            <div>
                <Heading
                    as='h2'
                    size='h2'
                    bottom='1rem'
                >
                    <GreyText>João Sousa</GreyText>
                </Heading>

                <Heading as='h3' size='h3'>
                    Network & Infrastructure <GreyText>Engineer</GreyText>
                </Heading>

                <ParaText as='p' top='2rem' bottom='4rem'>
                Passionate about building and optimizing infrastructure at scale. Currently interning at Cisco TAC focused on server virtualization and infrastructure optimization. Dedicated to continuous learning in networking, virtualization, and emerging technologies while pursuing industry certifications. Driven to solve complex architectural challenges and contribute to robust, scalable systems.
                </ParaText>

                {/* --social-icons-- */}
                <FlexContainer gap='20px' responsiveFlex>
                    <a href='https://www.linkedin.com/in/joao-p-c-sousa/' target='_blank' rel="noreferrer">
                        <IconContainer color='white' size='2rem'>
                            <FaLinkedin />
                        </IconContainer>
                    </a>
                    <a href='https://github.com/sousa16' target='_blank' rel="noreferrer">
                        <IconContainer color='white' size='2rem'>
                            <FaGithub />
                        </IconContainer>
                    </a>

                    <a href='mailto:jpcsousa@outlook.pt' target='_blank' rel="noreferrer">
                        <IconContainer color='white' size='2rem'>
                            <AiOutlineMail />
                        </IconContainer>
                    </a>
                </FlexContainer>
            </div>

            {/* --right-content-- */}
            <FlexContainer 
                justify='flex-end'
            >
                <ShowcaseImageCard>
                    <InitialsBadge>JS</InitialsBadge>
                </ShowcaseImageCard>
            </FlexContainer>

        </FlexContainer>

    </PaddingContainer>
  )
}

export default Showcase