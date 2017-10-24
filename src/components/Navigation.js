import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ routes }) =>
  <ul className="Navigation">
    { routes.map((route, i) =>
      <li key={i} className="Navigation-Link">
        <Link to={route.path}>{route.guild}</Link>
      </li>
    ) }
  </ul>;

export default Navigation;