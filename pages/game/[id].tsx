import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { CREATE_WITH_ENUM } from "../../components/GameCard/GameCard";
import { GameInterface } from "../../interfaces/GameInterface";
import { getGame } from "../../service/GameService";

export default function GamePage() {
  const router = useRouter();
  const { id } = router.query;
  const [game, setGame] = useState<GameInterface>({
    id: 0,
    name: "",
    createWith: CREATE_WITH_ENUM.HTML5,
    url: "",
    coverImg: null,
  });

  useEffect(() => {
    const game = getGame(parseInt(id as string));
    setGame(game);
  }, [id])

  return (
    <Iframe
      url={game.url}
      height="1000"
      width="100%"
    ></Iframe>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
