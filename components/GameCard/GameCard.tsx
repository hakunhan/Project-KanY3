import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { GameInterface } from "../../interfaces/GameInterface";

import { Card, Typography } from "antd";
import htmlLogo from "../../public/assets/HTML5.svg";
import unityLogo from "../../public/assets/unity.svg";
import { useRouter } from "next/router";
const { Meta } = Card;

export enum CREATE_WITH_ENUM {
  HTML5,
  UNITY,
}

type GameCardProps = {
  game: GameInterface;
};

const description = (createdWith: CREATE_WITH_ENUM): ReactNode => {
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
  const router = useRouter();
  const href = {
    pathname: "/game/[id]",
    query: {id: props.game.id}
  }
  const as = `/game/${props.game.id}`

  return (
    <Link
      href={href}
      as={as}
      locale={router.locale}
      passHref
    >
      <Card
        hoverable
        style={{ width: 200 }}
        cover={
          <Image
            alt="No image found"
            src={props.game.coverImg}
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
    </Link>
  );
}
