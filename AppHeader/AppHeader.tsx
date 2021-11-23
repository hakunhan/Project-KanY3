import Image from 'next/image';
import { useRouter } from 'next/router'
import Link from "next/link";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout, Menu } from "antd";
import styles from "./AppHeader.module.scss";
import logo from "../public/logo.png";

const { Header } = Layout;

export default function AppHeader() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <Header className="header">
      <Link href="/" passHref>
        <Image alt="Project KanYE" src={logo} width={200} height={64} />
      </Link>
    </Header>
  )
}