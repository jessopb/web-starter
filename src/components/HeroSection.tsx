import React from "react";

type S_H_Props = {
  left: ReactNode;
  right: ReactNode;
};

export const HeroSection = (props: S_H_Props) => {
  const { left, right } = props;
  return (
    <section className="white">
      <div className="flex flex-col-reverse lg:flex-row max-w-screen-lg mx-auto py-20 px-4 ">
        <div className="lg:w-6/12 lg:pr-4 lg:p-0 p-4 flex flex-col gap-8 items-start">
          {left}
        </div>
        <div className="lg:w-6/12 lg:pl-4 p-4 w-96 lg:w-full relative h-24 object-cover m-auto">
          {right}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
