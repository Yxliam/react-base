import React, { Component , Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { routes } from './routes'
import store from './store'


const RouteWithSubRoutes = route => {
  return (
    <Route
      exact
      path={route.path}
      render={props => {
        document.title = route.title || "ah分享";
        return <route.component {...props} routes={route.routes}></route.component>
      }}
    />
  )
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Switch>
              {routes.map((route,i) => {
                return <RouteWithSubRoutes key={i} {...route} />
              })}
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
