import React, { useState } from 'react'

// import global styles
import {
    PaddingContainer,
    FlexContainer,
    Container,
    GreyText,
} from '../styles/Global.styled';

// import Navbar styles
import {
    NavbarContainer,
    Logo,
    MenuIcon,
} from '../styles/Navbar.styled'

import { GiHamburgerMenu } from 'react-icons/gi';
import { theme } from '../utils/Theme';
import NavMenu  from '../components/layouts/NavMenu';
import NavRightContainer from './layouts/NavRightContainer';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <NavbarContainer bgColor={theme.colors.primary}>
            <PaddingContainer
                top='1.2rem'
                bottom='1.2rem'
                responsiveLeft='1rem'
                responsiveRight='1rem'
            >
                <Container>
                    <FlexContainer justify='space-between' responsiveFlex>

                        {/* --left-logo-- */}
                        <Logo>
                            João<GreyText>Sousa</GreyText>
                        </Logo>

                        {/* --right-menu-- */}
                        <NavRightContainer></NavRightContainer>
                        <MenuIcon
                            onClick={() => { setOpenMenu(true) }}
                        >
                            <GiHamburgerMenu />
                        </MenuIcon>
                    </FlexContainer>
                </Container>

                {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
            </PaddingContainer>
        </NavbarContainer>
    )
}

export default Navbar