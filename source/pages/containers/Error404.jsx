import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import Title from '../../shared/components/Title';


function Error404() {
  return (
    <section name="home">
      <Title>
        Error 404
      </Title>
      <Link to="/">
        <FormattedMessage id="error.404" />
      </Link>
    </section>
  );
}


export default Error404;
