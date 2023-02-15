import { ReactNode } from "react";

type IFProps = {
  children: ReactNode;
};

export const FeatureSection = (props: IFProps) => {
  const { children } = props;

  return (
    <section className="bg-primary-100">
      <div className="flex flex-col max-w-screen-xl mx-auto py-20 px-16 ">
        {children}
      </div>
    </section>
  );
};

export default FeatureSection;
