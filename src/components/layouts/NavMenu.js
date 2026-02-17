import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

// import global styles
import {
    PaddingContainer,
    FlexContainer,
} from '../../styles/Global.styled';

import { AiOutlineClose } from 'react-icons/ai';
import { navLinks } from '../../utils/Data';

// import navbar styles
import { 
    MenuIcon,
    NavMenuContainer,
    MenuItemStyled,
} from '../../styles/Navbar.styled';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

const NavMenu = ({ setOpenMenu }) => {
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

  const handleMenuItemClick = (link) => {
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
    setOpenMenu(false);
  };

  return (
    <NavMenuContainer>

        {/* --close-button-- */}
        <PaddingContainer left='5%' right='5%' top='1.5rem'>
            <FlexContainer justify='flex-end' responsiveFlex>
                <MenuIcon 
                    onClick={() => setOpenMenu(false)}
                >
                    <AiOutlineClose />
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>

        {/* --menu-items-- */}
        <PaddingContainer top='4rem'>
            <FlexContainer
                direction='column'
                align='center'
                responsiveFlex
            >
                {navLinks.map((link) => (
                    <MenuItemStyled 
                        key={link.id}
                        onClick={() => handleMenuItemClick(link)}
                    >
                        {link.name}
                    </MenuItemStyled>
                ))}
            </FlexContainer>
        </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu