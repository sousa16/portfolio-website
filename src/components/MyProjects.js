import React from 'react';

import {
    PaddingContainer,
    Heading,
    GreyText,
} from '../styles/Global.styled';
import { projectDetails } from '../utils/Data';
import Project from '../components/layouts/Project';

const MyProjects = () => {
  return (
    <PaddingContainer
        id='projects'
        bottom='5%'
        responsiveTop='6rem'
        responsiveLeft='1rem'
        responsiveRight='1rem'
    >
        <Heading as='h4' size='h4'>
            MY PROJECTS
        </Heading>

        <Heading as='h2' size='h2'>
            What <GreyText>I have built</GreyText>
        </Heading>

        {projectDetails.map((project) => ( 
            <PaddingContainer key={project.id} top='5rem' bottom='5rem'>
                <Project data={project}/>
            </PaddingContainer>
        ))}
    </PaddingContainer>
  )
}

export default MyProjects