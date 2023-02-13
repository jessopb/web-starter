import Link from "next/link";
import type { ReactNode } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="w-full flex flex-col relative min-h-screen">
      {props.meta}
      <div className="w-full bg-orange-100 content h-20">
        <header className="flex justify-between max-w-screen-lg px-4 m-auto items-center h-full">
          <div className="bg-red-500 text-white text-xl h-full w-20 flex items-center justify-around">
            Zeppi
          </div>
          <nav>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link
                  href="/"
                  className="border-none text-black hover:text-blue-900"
                >
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/"
                  className="border-none text-black hover:text-blue-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="w-full">
        <main className="content py-5 text-xl">{props.children}</main>
      </div>
      <div className="w-full bg-orange-200 absolute bottom-0 px-4 ">
        <footer className="flex justify-between w-11/12 max-w-screen-lg m-auto h-52">
          bye
        </footer>
      </div>
    </div>
  );
};

export default Main;
