import {AnyAction} from 'redux';
import {ApartmentData} from '../../api';

const initialState: Array<ApartmentData> = [];

export const SET_APARTMENTS = 'SET_APARTMENTS';

export default (state = initialState, action: AnyAction): ApartmentData[] => {
  switch (action.type) {
    case SET_APARTMENTS:
      return action.payload.apartments;

    default:
      return state;
  }
};

export const setApartments = (apartments: ApartmentData[]): AnyAction => {
  return {type: SET_APARTMENTS, payload: {apartments}};
};
