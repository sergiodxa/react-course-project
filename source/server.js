import http from 'http';
import fetch from 'isomorphic-fetch';
import React from 'react';
import { renderToString } from 'react-dom/server';


function requestHandler(request, response) {
  const html = renderToString(
    <div>hola platzi</div>
  );

  response.write(html);
  response.end();
}


const server = http.createServer(requestHandler);


server.listen(process.env.PORT || 3000);
