import React from 'react';
import styled from 'styled-components';

const GradientBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%);
    z-index: -1;
`;

const ParticleBg = () => {
  return <GradientBg />;
};

export default ParticleBg;