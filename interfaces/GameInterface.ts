import { CREATE_WITH_ENUM } from "../components/GameCard/GameCard";

export interface GameInterface {
  id: number;
  name: string;
  createWith: CREATE_WITH_ENUM;
  url: string;
  coverImg: StaticImageData;
};
