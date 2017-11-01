import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import DataWrapper from '../components/DataWrapper';
import GuildView from '../components/GuildView';
import Navigation from '../components/Navigation';

const Home = () =>
  <div>
    <h2>Welcome to Kroniikkamaatti v3</h2>
  </div>;

const routes = [
  { path: '/',
    guild: 'Home',
    component: Home,
  },
  { path: '/asteriski',
    guild: 'Asteriski',
    component: GuildView,
    dataLoader: () => {
      console.log('Fetching Data for Asteriski')
    }
  },
  { path: '/digit',
    guild: 'Digit',
    component: GuildView,
    dataLoader: () => {
      console.log('Fetching Data for Digit')
    }
  },
  { path: '/nucleus',
    guild: 'Nucleus',
    component: GuildView,
    dataLoader: () => {
      console.log('Fetching Data for Nucleus')
    }
  }
];

const RouteWrapper = (route) =>
  <Route exact path={route.path} render={ props => {
    return <DataWrapper route={route} {...props} />
  } }/>

const RouterComponent = () => (
<Router>
  <div>
    <Navigation routes={routes} />
    <hr/>
    {routes.map((route, i) => (
      <RouteWrapper key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default RouterComponent;