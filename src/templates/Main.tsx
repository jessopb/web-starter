import { Card } from "@/components/Card";
import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="w-full flex flex-col relative min-h-screen">
      {props.meta}
      <div className="w-full bg-primary-100 content h-20">
        <header className="flex justify-between max-w-screen-xl px-4 m-auto items-center h-full">
          <div className=" h-full p-2 flex items-center justify-around">
            <div className=" h-full w-20 flex items-center justify-around object-fill relative">
              <Image src="Z.svg" fill alt="logo" />
            </div>
            logo
          </div>
          <nav>
            <ul className="flex flex-wrap">
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
        <main className="content">{props.children}</main>
      </div>
      <div className="w-full bg-primary-900">
        <footer className="content-center grid p-8 grid-cols-1 lg:grid-cols-3 w-full max-w-screen-lg m-auto">
          <div className="flex flex-col text-white place-self-center">
            <ul>
              <li>what</li>
              <li>what</li>
              <li>what</li>
            </ul>
          </div>
          <div className="flex flex-col text-white place-self-center">
            <ul>
              <li>what</li>
              <li>what</li>
              <li>what</li>
            </ul>
          </div>
          <div className="flex flex-col text-white place-self-center">
            <ul>
              <li>what</li>
              <li>what</li>
              <li>what</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Main;
