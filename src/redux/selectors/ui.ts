import {createSelector} from 'reselect';
import {RootState} from '../reducers';

export const selectTheme = createSelector(
  (state: RootState) => state.ui,
  ui => ui.theme
);

export const selectFetching = createSelector(
  (state: RootState) => state.ui,
  ui => ui.fetching
);
