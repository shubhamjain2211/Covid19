import React from 'react';
import View from './View';
import Dashboard from './Containers/Dashboard/Dashboard'
import Faq from './Containers/Faq/Faq'
import HelpfulLinks from './Containers/HelpfulLinks/HelpfulLinks'
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {

  let route = (
     <Switch>
  	<Route path='/' exact component={Dashboard} />
      	<Route path='/Faq' component={Faq} />
      	<Route path='/helpfulLink' component={HelpfulLinks} />
      	<Redirect to='/' />
     </Switch>
  )
  return (
    <View>
      {route}
    </View>
  );
}

export default App;
