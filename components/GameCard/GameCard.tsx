import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import { GameInterface } from "../../interfaces/GameInterface";
import { Card, Typography } from "antd";
import htmlLogo from "../../public/assets/HTML5.svg";
import unityLogo from "../../public/assets/unity.svg";

import imageUrlFor from "../../utils/imageUrlFor";
const { Meta } = Card;

export const CREATE_WITH_ENUM = {
  HTML5: "HTML5",
  UNITY: "UNITY",
};

type GameCardProps = {
  game: GameInterface;
};

const description = (createdWith: string): ReactNode => {
  return createdWith === CREATE_WITH_ENUM.HTML5 ? (
    <>
      <Image alt="html-logo" src={htmlLogo} width={25} height={25} />
      <Typography.Text>HTML5</Typography.Text>
    </>
  ) : createdWith === CREATE_WITH_ENUM.UNITY ? (
    <>
      <Image alt="unity-logo" src={unityLogo} width={50} height={25} />
      <Typography.Text>Unity</Typography.Text>
    </>
  ) : null;
};

export default function GameCard(props: GameCardProps) {
  const href = {
    pathname: `/game/[id]`,
    query: { id: props.game._id },
  };
  const as = `/game/${props.game._id}`;

  return (
    <Link href={href} as={as}>
      <a>
        <Card
          hoverable
          style={{ width: 200 }}
          cover={
            <Image
              alt="No image found"
              src={imageUrlFor(props.game.coverImg)
                .ignoreImageParams()
                .width(200)
                .url()}
              width={200}
              height={200}
            />
          }
        >
          <Meta
            title={props.game.name}
            description={description(props.game.createWith)}
          />
        </Card>
      </a>
    </Link>
  );
}
