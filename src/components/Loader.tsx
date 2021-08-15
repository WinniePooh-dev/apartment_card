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
  display: flex;
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
  width: 24px;
  height: 24px;
  border-top: 2px solid #00b2ff;
  border-right: 2px solid transparent;
  margin: 0 8px;
  animation: ${loader} 0.6s linear infinite;
  background: transparent;
  border-radius: 50%;
`;

export default Loader;
