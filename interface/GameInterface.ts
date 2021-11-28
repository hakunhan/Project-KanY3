import { CREATE_WITH_ENUM } from "../components/GameCard/GameCard";

export interface GameInterface {
  name: string,
  createWith: CREATE_WITH_ENUM,
  url: string,
  coverImg: StaticImageData
}