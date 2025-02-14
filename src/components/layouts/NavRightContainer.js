import React from 'react';
import { NavButton } from '../../styles/Navbar.styled';
import { FlexContainer } from '../../styles/Global.styled';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const NavRightContainer = () => {
  return (
    <FlexContainer
      gap='3rem'
      flex-direction='horizontal'
      align='center'
      responsiveFlex
    >
      <NavButton to='#home' scroll={el => scrollWithOffset(el)}>
        About Me
      </NavButton>

      <NavButton to='#skills' scroll={el => scrollWithOffset(el)}>
        Skills
      </NavButton>

      <NavButton to='#experience' scroll={el => scrollWithOffset(el)}>
        Experience
      </NavButton>

      <NavButton to='#projects' scroll={el => scrollWithOffset(el)}>
        Projects
      </NavButton>
    </FlexContainer>
  );
};

export default NavRightContainer;