import Image from "next/image";
import { ReactNode } from "react";
import CTAButton from "./CTAButton";

type CardProps = {
  title: ReactNode;
  text: ReactNode;
  dest: string;
  buttonText: string;
};

export const Card = (props: CardProps) => {
  const { title, text, dest, buttonText } = props;
  return (
    <div className=" max-w-md p-8 relative justify-self-center">
      <div className="absolute object-cover w-8 h-8 left-0 top-0">
        <Image src="/dubslash.svg" fill alt="decorate"></Image>
      </div>
      <h2>{title || "Check out this card"}</h2>
      <div>{text || "You've never seen a card like this."}</div>
      {dest && <CTAButton dest={dest} secondary text={buttonText} />}
    </div>
  );
};
