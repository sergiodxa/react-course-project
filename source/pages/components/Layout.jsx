import React, { PropTypes } from 'react';


const propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};


function Layout(props) {
  return (
    <html lang="es">
      <head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="http://localhost:3001/styles.css"
        />
      </head>
      <body>
        <div
          id="render-target"
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
        <script src="http://localhost:3001/app.js" />
      </body>
    </html>
  );
}


Layout.propTypes = propTypes;


export default Layout;
