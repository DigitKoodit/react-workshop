import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import DataWrapper from '../components/DataWrapper';
import GuildView from '../components/GuildView';

const Home = () =>
  <div>
    <h2>Welcome to Kroniikkamaatti v3</h2>
  </div>;

const routes = [
  { path: '/',
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
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/asteriski">Asteriski</Link></li>
      <li><Link to="/digit">Digit</Link></li>
      <li><Link to="/nucleus">Nucleus</Link></li>
    </ul>
    <hr/>
    {routes.map((route, i) => (
      <RouteWrapper key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default RouterComponent;