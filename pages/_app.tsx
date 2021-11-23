import 'antd/dist/antd.dark.css';

import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />
export default appWithTranslation(MyApp)