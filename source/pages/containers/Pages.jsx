import React from 'react';
import { Match, Miss } from 'react-router';

import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Error404 from './Error404';

import header from '../components/Header';


function Pages() {
  return (
    <main role="application">
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
