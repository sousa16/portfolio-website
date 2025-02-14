import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import { Container } from './styles/Global.styled';
import { HashRouter } from 'react-router-dom';

// import components
import Navbar from './components/Navbar';
import ParticleBg from './components/ParticleBg';
import Showcase from './components/Showcase';
import MySkills from './components/MySkills';
import WorkExperience from './components/WorkExperience';
import MyProjects from './components/MyProjects';

export default function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <ParticleBg></ParticleBg>
        <Navbar></Navbar>
        <Container>
          <Showcase id="showcase" />
          <MySkills id="skills" />
          <WorkExperience id="experience" />
          <MyProjects id="projects" />
        </Container>
      </ThemeProvider>
    </HashRouter>
  );
}