import Image from "next/image";
import { ReactNode } from "react";

type IQBProps = {
  text: string;
  attrib: string;
};

export const QuoteBox = (props: IQBProps) => {
  return (
    <div className="m-auto p-8 quote text-gray-700 font-serif relative">
      <div className="absolute object-cover w-8 h-8 left-0 top-0">
        <Image src="/dubslash.svg" fill alt="decoration"></Image>
      </div>
      {props.text}
      <div className="text-2xl text-center">{`- ${props.attrib}`}</div>
    </div>
  );
};

export default QuoteBox;
