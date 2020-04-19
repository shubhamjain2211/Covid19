import React from 'react';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home'
import Faq from './containers/Faq/Faq'
import HelpfulLinks from './containers/HelpfulLinks/HelpfulLinks'
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {

  let route = (
     <Switch>
  <Route path='/' exact component={Home} />
      <Route path='/Faq' component={Faq} />
      <Route path='/helpfulLink' component={HelpfulLinks} />
      <Redirect to='/' />
     </Switch>
  )
  return (
    <Layout>
      {route}
    </Layout>
  );
}

export default App;
