import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
// import ContactPage from './components/Contact/ContactPage';

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={AboutPage} />
    {/* <Route exact path="/contact" component={ContactPage} /> */}
  </Switch>
);
