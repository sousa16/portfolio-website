import React from 'react'
import { NavButton } from '../../styles/Navbar.styled'
import { FlexContainer } from '../../styles/Global.styled'

const NavRightContainer = () => {
  return (
    <FlexContainer
        gap='3rem'
        flex-direction='horizontal'
        align='center'
        responsiveFlex
    >

        <NavButton to='#home'>
            About Me
        </NavButton>

        <NavButton to='#skills'>
            Skills
        </NavButton>

        <NavButton to='#projects'>
            Projects
        </NavButton>

    </FlexContainer>
  )
}

export default NavRightContainer