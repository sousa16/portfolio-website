import React from 'react'

// import global styles´
import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
} from '../../styles/Global.styled';

// import project styles
import {
    TechStackCard,
} from '../../styles/MyProject.styled';

// import assets
import { FaGithub } from 'react-icons/fa';

const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>

        {/* --left-section-project-content-- */}
        <div style={{ flex: '1 1 100%' }}>
            <FlexContainer align='center' gap='1rem'>
                <Heading as='h3' size='h3' bottom='1rem'>
                    {data.project_name}
                </Heading>

                {data.project_url &&
                <a href={data.project_url} target='_blank' rel="noreferrer">
                    <IconContainer color='grey' size='2rem'>
                        <FaGithub />
                    </IconContainer>
                </a>
                }
            </FlexContainer>

            <PaddingContainer top='1rem'>
                <FlexContainer gap='1.5rem'>
                    {data.tech_stack.map((stack) => (
                        <TechStackCard>{stack}</TechStackCard>
                    ))}
                </FlexContainer>
            </PaddingContainer>

            <ParaText top='1.5rem' bottom='2rem'>
                {data.project_desc.split('\n').map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
                ))}
            </ParaText>

            {data.button_url && data.button_text && (
            <a href={data.button_url} target="_blank" rel="noreferrer">
                <Button>{data.button_text}</Button>
            </a>
            )}

        </div>

    </FlexContainer>
  )
}

export default Project