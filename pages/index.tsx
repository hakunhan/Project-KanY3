import { Typography, Row, Col } from "antd";
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
  return (
    <>
      <Typography className={styles["game-number"]}>{`All free games: ${
        games.length
      } games`}</Typography>
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

export const getStaticProps = async () => {
  const games = await sanity.fetch(gamesQuery);
  return {
    props: {games}
  }
}