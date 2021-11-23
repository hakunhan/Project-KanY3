import { Layout, Typography } from "antd"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

import AppHeader from "../components/AppHeader/AppHeader";

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <AppHeader />
      <Typography>{t("current-language")}</Typography>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});