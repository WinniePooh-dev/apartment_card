import React from 'react';
import {Moon, Sun} from 'react-feather';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {Colors} from '../lib/colors';
import {UITheme, setTheme} from '../redux/reducers/ui';
import {selectTheme} from '../redux/selectors/ui';

export const Switch = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const toggleTheme = () => {
    dispatch(setTheme(theme === UITheme.Dark ? UITheme.Light : UITheme.Dark));
  };
  return (
    <StyledSwitch color={theme === UITheme.Light ? Colors.moonColor : Colors.thirdColor}>
      <Input type="checkbox" id="switch" onClick={toggleTheme} />
      <Label htmlFor="switch">
        <StyledSun size={24} />
        <StyledMoon size={24} />
      </Label>
    </StyledSwitch>
  );
};

const StyledSun = styled(Sun)`
  position: absolute;
  top: 3px;
  left: 3px;
`;

const StyledMoon = styled(Moon)`
  position: absolute;
  top: 3px;
  right: 3px;
`;

const Input = styled.input`
  &:checked + label {
    background: ${p => p.theme.backgroundColor};
    border: 2px solid #808080;
  }

  &:checked + label:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`;

const Label = styled.label`
  cursor: pointer;
  text-indent: 1;
  width: 60px;
  height: 30px;
  background: #808080;
  display: block;
  border-radius: 30px;
  position: relative;
  border: 2px solid transparent;
  cursor: pointer;

  &:active:after {
    width: 30px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    background: #fffff0;
    border-radius: 24px;
    transition: 0.3s;
    z-index: 2;
  }
`;

const StyledSwitch = styled.div<{color: string}>`
  position: fixed;
  top: 10px;
  left: 10px;
  color: ${p => p.color};
  transition: 0.3s;

  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
`;
