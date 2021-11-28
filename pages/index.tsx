import { Typography } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { Row, Col } from "antd";

import GameCard from "../components/GameCard/GameCard";
import { getGames } from "../service/GameService";
import styles from "./index.module.scss";

export default function Home() {
  const { t } = useTranslation("common");
  const games = getGames();

  return (
    <>
      <Typography className={styles["game-number"]}>{`${t("all-free-game")}: ${
        games.length
      } ${t("games")}`}</Typography>
      <Row>
        {games.map((game, index) => {
          return (
            <Col key={index} span={4}>
              <GameCard game={game} />;
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
