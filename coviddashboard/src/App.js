import React from 'react';

import Layout from './hoc/Layout/Layout';
import Home from './Containers/Dashboard/Dashboard'
import Faq from './Containers/Faq/Faq'
import HelpfulLinks from './Containers/HelpfulLinks/HelpfulLinks'
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
