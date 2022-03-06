import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import QrGenerator from '../pages/QrGenerator';
import QrReader from '../pages/QrReader';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/qrgenerator' component={QrGenerator} />
      <Route path='/qrreader' component={QrReader} />
    </Switch>
  );
}
