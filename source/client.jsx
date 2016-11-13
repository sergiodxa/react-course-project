import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';
import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import Pages from './pages/index';

import messages from './messages.json';


addLocaleData([...es, ...en]);

const locale = navigator.languages.indexOf('es') >= 0 ? 'es' : 'en';

render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('render-target'),
);
