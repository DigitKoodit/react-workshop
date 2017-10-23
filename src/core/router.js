import React from 'react'
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const GuildView = ({ guild }) => <h3>Hello {guild}!</h3>;

GuildView.defaultProps = {
  guild: 'Everyone'
};

GuildView.propTypes = {
  guild: PropTypes.string
};

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
  },
  { path: '/digit',
    guild: 'Digit',
    component: GuildView,
  },
  { path: '/nucleus',
    guild: 'Nucleus',
    component: GuildView,
  }
];

const RouteWrapper = (route) =>
  <Route exact path={route.path} render={ props => {
    return <route.component {...props} guild={route.guild} routes={route.routes}/>
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