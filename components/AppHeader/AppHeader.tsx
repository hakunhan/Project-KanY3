import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { Layout } from "antd";
import styles from "./AppHeader.module.scss";
import logo from "../../public/img/logo.png";

const { Header } = Layout;

export default function AppHeader() {
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
              height={60}
            />
          </a>
        </Link>
      </Header>
    </>
  );
}
