import React from 'react';
import { Match, Miss, Link } from 'react-router';

import Home from './Home.jsx';
import Post from './Post.jsx';
import Profile from './Profile.jsx';
import Error404 from './Error404.jsx';

import header from '../components/Header.jsx';


function Pages() {
  return (
    <main role="applcation">
      {header}

      {/* Lista de artículos */}
      <Match
        pattern="/"
        exactly
        component={Home}
      />
      {/* Detalle de artículo */}
      <Match
        pattern="/post/:id"
        exactly
        component={Post}
      />
      {/* Perfil de usuario */}
      <Match
        pattern="/user/:id"
        exactly
        component={Profile}
      />
      {/* Error 404 */}
      <Miss
        component={Error404}
      />
    </main>
  );
}


export default Pages;
