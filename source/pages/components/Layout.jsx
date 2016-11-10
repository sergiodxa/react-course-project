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
      <body
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </html>
  );
}


Layout.propTypes = propTypes;


export default Layout;
