import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { CREATE_WITH_ENUM } from "../../components/GameCard/GameCard";
import { GameInterface } from "../../interfaces/GameInterface";
import sanity from "../../lib/sanity";
import imageUrlFor from "../../utils/imageUrlFor";

const gamesQuery = `*[_type == "games"] {_id}`;

const gameQuery = `*[_type == "games" && _id == $id] {
  _id,
  name,
  createWith,
  url,
}[0]
`;

export default function GamePage({ game }) {
  return <Iframe url={game.url} height="1000" width="100%"></Iframe>;
}

export const getStaticPaths = async () => {
  const games: any[] = await sanity.fetch(gamesQuery);
  const paths: any[] = games.map((game) => ({
    params: {id: game._id}
  }));
  return {
    paths, fallback: false,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const game = await sanity.fetch(gameQuery, { id: params.id });
  return {
    props: { game, ...await serverSideTranslations(locale, ["common"]) },
  };
};
