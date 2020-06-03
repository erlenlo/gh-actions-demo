import { History } from 'history';
import React from 'react';
import { Router } from 'react-router';
import routes from 'src/routes';
import styled from 'styled-components';
import Navigation from './Navigation';

type Props = {
  history: History;
};

const App: React.FC<Props> = props => {
  const { history } = props;
  return (
    <Router history={history}>
      <Navigation />
      <MainContainer>{routes}</MainContainer>
    </Router>
  );
};

export default App;

const MainContainer = styled.section`
  padding: 100px 200px;

  @media only screen and (max-width: 1024px) {
    padding: 80px 64px;
  }
`;
