import React, { PropTypes } from 'react';


const propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};


function Layout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
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
