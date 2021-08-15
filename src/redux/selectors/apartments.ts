import {createSelector} from 'reselect';
import {RootState} from '../reducers';

export const selectApartments = createSelector(
  (state: RootState) => state.apartments,
  apartments => apartments
);
