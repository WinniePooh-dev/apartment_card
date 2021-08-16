import React from 'react';
import styled, {keyframes} from 'styled-components';

const Loader = () => {
  return (
    <StyledLoader>
      <Spiner />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const loader = () => keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Spiner = styled.div`
  width: 50px;
  height: 50px;
  border-top: 2px solid #00b2ff;
  border-right: 2px solid transparent;
  margin: 0 8px;
  animation: ${loader} 0.6s linear infinite;
  background: transparent;
  border-radius: 50%;
`;

export default Loader;
