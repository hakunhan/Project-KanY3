import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import Head from "next/head";

import {
  Layout,
  Typography,
  Select,
  Space
} from "antd";
import styles from "./AppHeader.module.scss";
import logo from "../../public/img/logo.png";

const { Header } = Layout;

export default function AppHeader() {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  const handleLocaleChange = (data: string) => {
    router.replace(router.pathname, router.pathname, { locale: data })
  }

  return (
    <>
      <Head>
        <title>Project KanY3</title>
      </Head>
      <Header className={styles["app-header"]}>
        <Link href="/" passHref>
          <a>
            <Image 
            alt="KanY3" 
            src={logo}
            className={styles["logo"]} 
            width={160}
            height={60} />
          </a>
        </Link>

        <div className={styles["language-selector"]}>
          <Space>
            <Typography.Text>{t('current-language')}</Typography.Text>
            <Select
              defaultValue={router.locale}
              onChange={handleLocaleChange} >
              <Select.Option value={"en"}>English</Select.Option>
              <Select.Option value={"vi"}>Tiếng Việt</Select.Option>
            </Select>
          </Space>
        </div>
      </Header>
    </>
  )
}