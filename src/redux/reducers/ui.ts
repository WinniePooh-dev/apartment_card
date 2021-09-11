import {AnyAction} from 'redux';

export enum UITheme {
  Dark = 'dark',
  Light = 'light'
}

export interface UI {
  fetching: boolean;
  theme: UITheme;
}

const initialState: UI = {
  fetching: true,
  theme: UITheme.Light
};

export const SET_FETCHING = 'SET_FETCHING';
export const SET_THEME = 'SET_THEME';

export default (state = initialState, action: AnyAction): UI => {
  switch (action.type) {
    case SET_FETCHING:
      return {...state, fetching: action.payload.fetching};
    case SET_THEME:
      return {...state, theme: action.payload.theme};

    default:
      return state;
  }
};

export const setFetching = (fetching: boolean): AnyAction => {
  return {type: SET_FETCHING, payload: {fetching}};
};

export const setTheme = (theme: UITheme): AnyAction => {
  return {type: SET_THEME, payload: {theme}};
};
