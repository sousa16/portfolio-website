import React from 'react'

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
    MenuItem,
} from '../../styles/Navbar.styled';

const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer>

        {/* --close-button-- */}
        <PaddingContainer left='5%' right='5%' top='2rem'>
            <FlexContainer justify='flex-end' responsiveFlex>
                <MenuIcon 
                    onClick={() => setOpenMenu(false)}
                >
                    <AiOutlineClose />
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>

        {/* --menu-items-- */}
        <PaddingContainer top='8%'>
            <FlexContainer
                direction='column'
                align='center'
                responsiveFlex
            >
                {navLinks.map((link) => (
                    <MenuItem 
                    key={link.id}
                    to={`#${link.to}`}
                    onClick={() => setOpenMenu(false)}
                    >
                        {link.name}
                    </MenuItem>
                ))}
            </FlexContainer>
        </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu