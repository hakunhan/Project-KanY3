import { Typography, Row, Col } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import sanity from "../lib/sanity";
import GameCard from "../components/GameCard/GameCard";
import styles from "./index.module.scss";

const gamesQuery = `*[_type == "games"] {
  _id,
  name,
  createWith,
  url,
  coverImg
}[0...10]`;

export default function Home({games}) {
  const { t } = useTranslation("common");

  return (
    <>
      <Typography className={styles["game-number"]}>{`${t("all-free-game")}: ${
        games.length
      } ${t("games")}`}</Typography>
      <Row>
        {games.map((game, index) => {
          return (
            <Col key={index} span={4}>
              <GameCard game={game} />
            </Col>
          )
        })}
      </Row>
    </>
  );
}

export const getStaticProps = async ({locale}) => {
  const games = await sanity.fetch(gamesQuery);
  return {
    props: {games, ...await serverSideTranslations(locale, ["common"])}
  }
}