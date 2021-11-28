import { Typography } from "antd"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

import GameCard from "../components/GameCard/GameCard";
import { getGames } from "../service/GameService";
import styles from "./index.module.scss";

export default function Home() {
  const { t } = useTranslation('common');
  const games = getGames();

  return (
    <>
      <Typography className={styles["game-number"]}>{`${t("all-free-game")}: ${games.length} ${t("games")}`}</Typography>
      {games.map((game, index) => {
        return (
          <GameCard
            key={index}
            game={game} />
        )
      })}
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});