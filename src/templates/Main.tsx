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
      <div className="w-full bg-orange-100 grow content">
        <header className="flex justify-between w-11/12 max-w-screen-lg m-auto">
          <div className="bg-red-500">hi</div>
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
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="w-full">
        <main className="content py-5 text-xl w-11/12 max-w-screen-lg m-auto">
          {props.children}
        </main>
      </div>
      <div className="w-full bg-orange-200 absolute bottom-0 ">
        <footer className="flex justify-between w-11/12 max-w-screen-lg m-auto">
          bye
        </footer>
      </div>
    </div>
  );
};

export default Main;
