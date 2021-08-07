import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route exact path="/badges/:badgeId" component={BadgeDetails} />
        <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;