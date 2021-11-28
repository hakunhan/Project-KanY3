import 'antd/dist/antd.css';

import PageLayout from '../components/PageLayout/PageLayout';
import { appWithTranslation } from 'next-i18next'
import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default appWithTranslation(MyApp);