import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from "next/link";
import { useTranslation } from 'next-i18next';

import {
  Layout,
  Typography,
  Select,
  Space
} from "antd";
import styles from "./AppHeader.module.scss";
import logo from "../../public/logo.png";

const { Header } = Layout;

export default function AppHeader() {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");
  console.log(i18n.languages)

  const handleLocaleChange = (data: string) => {
    router.replace(router.pathname, router.pathname, { locale: data })
  }

  return (
    <Header className="header">
      <Link href="/" passHref>
        <a>
          <Image alt="Project KanYE" src={logo} width={200} height={64} />
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
  )
}