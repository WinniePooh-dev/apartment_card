import React from 'react';
import {Sun} from 'react-feather';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {Colors} from '../lib/colors';
import {UITheme, setTheme} from '../redux/reducers/ui';
import {selectTheme} from '../redux/selectors/ui';

export const Lamp = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const toggleTheme = () => {
    dispatch(setTheme(theme === UITheme.Dark ? UITheme.Light : UITheme.Dark));
  };
  return (
    <StyledLamp
      onClick={toggleTheme}
      color={theme === UITheme.Light ? Colors.secondColor : undefined}>
      <Sun size={32} />
    </StyledLamp>
  );
};

const StyledLamp = styled.div<{color?: string}>`
  position: fixed;
  top: 30px;
  left: 30px;
  color: ${p => p.color || Colors.thirdColor};
  cursor: pointer;

  &:active {
    transform: scale(0.9) rotate(300deg);
    transition: 2ms;
  }
`;
