import { ReactNode } from "react";
import className from "classnames";

type S_H_Props = {
  children: ReactNode;
  cols: string;
};

export const GridSection = (props: S_H_Props) => {
  const { children, cols } = props;

  const gridClass = className(
    "grid",
    "grid-cols-1",

    "max-w-screen-xl",
    "mx-auto",
    "py-20",
    "px-4",
    "gap-4",
    {
      "lg:grid-cols-2": cols === "2",
      "lg:grid-cols-3": cols === "3",
      "lg:grid-cols-4": cols === "4",
      "lg:grid-cols-5": cols === "5",
    }
  );
  return (
    <section className="bg-primary-100">
      <div className={gridClass}>{children}</div>
    </section>
  );
};

export default GridSection;
