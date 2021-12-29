import "antd/dist/antd.css";

import PageLayout from "../components/PageLayout/PageLayout";
import React from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
};

export default MyApp;
