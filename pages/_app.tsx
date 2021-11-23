import 'antd/dist/antd.css';

import AppHeader from "../AppHeader/AppHeader"
import { appWithTranslation } from 'next-i18next'
import { Layout } from 'antd';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <AppHeader />
      <Component {...pageProps} />
    </Layout>
  )
}
export default appWithTranslation(MyApp)