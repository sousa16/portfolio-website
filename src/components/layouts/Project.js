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
    ProjectImage,
    TechStackCard,
    ProjectImageContainer,
} from '../../styles/MyProject.styled';

// import assets
import { FaGithub } from 'react-icons/fa';

const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>

        {/* --left-section-project-content-- */}
        <div style={!data.project_img ? { flex: '0 1 70%' } : undefined}>
            <FlexContainer align='center' gap='1rem'>
                <Heading as='h3' size='h3' bottom='1rem'>
                    {data.project_name}
                </Heading>

                <a href={data.project_url} target='_blank' rel="noreferrer">
                    <IconContainer color='grey' size='2rem'>
                        <FaGithub />
                    </IconContainer>
                </a>
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

        {/* --right-section-project-content-- */}
        {data.project_img && (
        <ProjectImageContainer justify='flex-end' >
            <ProjectImage 
            src={data.project_img}
            alt={data.project_name}
            $solidBorder={false}
            />
        </ProjectImageContainer>
        )}
    </FlexContainer>
  )
}

export default Project