import React, {Suspense, lazy, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled, {ThemeProvider} from 'styled-components';
import MockDatabase, {ApartmentData} from './api';
import {Switch} from './components/Switch';
import Loader from './components/Loader';
import {Colors} from './lib/colors';
import {themes} from './lib/themes';
import {setApartments} from './redux/reducers/apartments';
import {setFetching} from './redux/reducers/ui';
import {selectApartments} from './redux/selectors/apartments';
import {selectFetching, selectTheme} from './redux/selectors/ui';

const ApartmentCard = lazy(() =>
  import('./components/ApartmentCard').then(module => ({default: module.ApartmentCard}))
);

export const App = (): JSX.Element | null => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const apartments = useSelector(selectApartments);
  const fetching = useSelector(selectFetching);
  useEffect(() => {
    console.log(`%c React version: ${React.version}`, `color: ${Colors.mainColor}`);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await MockDatabase.getApartments();
        dispatch(setApartments(data as ApartmentData[]));
        dispatch(setFetching(false));
      } catch (error) {
        throw new Error((error as Error).message);
      } finally {
        dispatch(setFetching(false));
      }
    })();
  }, []);

  if (fetching) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <Suspense fallback={<Loader />}>
        <Main>
          <CardList>
            {apartments.map(apartment => (
              <ApartmentCard {...apartment} key={apartment.id} />
            ))}
          </CardList>
          <Switch />
        </Main>
      </Suspense>
    </ThemeProvider>
  );
};

const CardList = styled.div`
  margin: 0 auto;
  width: calc(100% - 85px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: calc(10px + 2vmin);
`;

const Main = styled.main`
  background-color: ${p => p.theme.backgroundColor};
  min-height: 100vh;
`;
