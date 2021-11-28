import { CREATE_WITH_ENUM } from '../components/GameCard/GameCard';
import { GameInterface } from '../interface/GameInterface';
import game2048 from "../public/img/2048.png";
import gameMineSweeper from "../public/img/minesweeper.png"

const games: GameInterface[] = [
  {
    name: "2048",
    createWith: CREATE_WITH_ENUM.HTML5,
    url: "https://minhle20001998.github.io/2048/",
    coverImg: game2048 
  },
  {
    name: "Minesweeper",
    createWith: CREATE_WITH_ENUM.HTML5,
    url: "https://minhle20001998.github.io/minesweeper/",
    coverImg: gameMineSweeper 
  }
]

export const getGames = () => {
  return games;
}