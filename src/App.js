import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import { Container } from './styles/Global.styled';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// import components
import Navbar from './components/Navbar';
import ParticleBg from './components/ParticleBg';
import Showcase from './components/Showcase';
import MySkills from './components/MySkills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import WorkExperience from './components/WorkExperience';
import MyProjects from './components/MyProjects';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

const Portfolio = () => {
  return (
    <Container>
      <Showcase id="showcase" />
      <WorkExperience id="experience" />
      <MyProjects id="projects" />
      <MySkills id="skills" />
      <Certifications id="certifications" />
      <Education id="education" />
    </Container>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ParticleBg></ParticleBg>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}