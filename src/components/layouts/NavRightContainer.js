import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavButton, NavButtonStyled } from '../../styles/Navbar.styled';
import { FlexContainer } from '../../styles/Global.styled';
import { navLinks } from '../../utils/Data';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const NavRightContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll on hash change
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => scrollWithOffset(element), 100);
      }
    }
  }, [location.hash]);

  const handleNavClick = (link) => {
    if (link.isRoute) {
      navigate(`/${link.to}`);
    } else {
      // For hash links, navigate to home first if not already there
      if (location.pathname !== '/') {
        navigate(`/#${link.to}`);
      } else {
        // If already on home, use hash scrolling
        const element = document.getElementById(link.to);
        if (element) {
          scrollWithOffset(element);
        }
      }
    }
  };

  return (
    <FlexContainer
      gap='3rem'
      tabletGap='2rem'
      flex-direction='horizontal'
      align='center'
      responsiveFlex
    >
      {navLinks.map((link) => (
        link.isRoute ? (
          <NavButtonStyled 
            key={link.id}
            onClick={() => handleNavClick(link)}
          >
            {link.name}
          </NavButtonStyled>
        ) : (
          <NavButtonStyled 
            key={link.id}
            onClick={() => handleNavClick(link)}
          >
            {link.name}
          </NavButtonStyled>
        )
      ))}
    </FlexContainer>
  );
};

export default NavRightContainer;