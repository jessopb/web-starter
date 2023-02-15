import React, { ReactNode } from "react";
import Image from "next/image";
type S_H_Props = {
  content: ReactNode;
  bgimage?: string;
  image?: string;
};

export const HeroSection = (props: S_H_Props) => {
  const { content, bgimage, image } = props;

  return (
    <section className="white relative">
      <div className="flex flex-col-reverse lg:flex-row max-w-screen-xl mx-auto py-20 px-4 z-10">
        <div className="lg:pr-4 lg:p-0 p-4 lg:w-full flex flex-col gap-12 items-start m-auto">
          {content}
        </div>
        {image && (
          <div className="lg:pl-4 rounded-md w-full p-4 pb-8 lg:pb-0 lg:p-0 flex items-center justify-center">
            <img className="h-full max-w-full" src={image}></img>
          </div>
        )}
      </div>
      {bgimage && (
        <div className="absolute w-full h-full left-0 top-0 right-0 bottom-0 -z-10">
          <Image
            src={bgimage}
            fill
            alt="decorate"
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
