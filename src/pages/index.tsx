import Main from "@/templates/Main";
import { Inter, Metal } from "@next/font/google";
import { Meta } from "@/utils/Meta";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Main
        meta={
          <Meta
            title="Next.js Boilerplate Presentation"
            description="Boilerplate description"
          />
        }
      >
        {/* hero */}
        <HeroSection
          left={
            <>
              <h1 className=" text-4xl font-bold">
                Some Amazing Headline Will Go Here
              </h1>
              <p className="font-bold">
                You won't believe how amazing the headline will be. It will have
                0 friction and bring all the customers to the yard. Milkshakes
                eat your heart out.
              </p>
              <CTAButton text="Level Up Now!"></CTAButton>
            </>
          }
          right={<Image src="vercel.svg" fill></Image>}
        />
        <section className="bg-orange-100">
          <div className="max-w-screen-lg m-auto py-24 px-4 ">
            <h1>MAIN</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              incidunt accusamus dolores quam laborum ad non, vitae atque?
              Praesentium voluptas odio tenetur placeat ut maiores
              exercitationem quas explicabo corrupti unde.
            </p>
          </div>
        </section>
      </Main>
    </>
  );
}
