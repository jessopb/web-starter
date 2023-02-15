import Main from "@/templates/Main";
import { Inter, Metal } from "@next/font/google";
import { Meta } from "@/utils/Meta";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import FeatureSection from "@/components/FeatureSection";
import GridSection from "@/components/GridSection";
import QuoteBox from "@/components/QuoteBox";
import { Card } from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Main
        meta={
          <Meta
            title="Next.js Starter"
            description="Starter for 2023 website"
          />
        }
      >
        {/* hero */}
        <HeroSection
          content={
            <>
              <h1 className=" text-4xl font-bold">
                Some Amazing Headline Will Go Here
              </h1>
              <p className="font-bold">
                You won't believe how amazing the headline will be. It will have
                0 friction and bring all the customers to the yard. Milkshakes
                eat your heart out.
              </p>
              <div className="flex justify-start items-center gap-4">
                <CTAButton text="Level Up Now!" />
                <CTAButton text="Something else..." secondary />
              </div>
            </>
          }
          // image="/ocean.png"
          image="/ocean.png"
        />
        <HeroSection
          content={
            <>
              <h1 className=" text-4xl font-bold">
                Some Amazing Headline Will Go Here
              </h1>
              <p className="font-bold">
                *Slaps hood* you can fit so many CTAs in this baby. CTAs with
                kittens, with whales, with octopodes. Yes, Octopodes. Level up
                to find even more memes deeper into the tunnel system. Just
                don't forget your scuba gear and towel.
              </p>
              <div className="flex justify-start items-center gap-4">
                <CTAButton text="Level Up Now!" />
                <CTAButton text="Something else..." secondary />
              </div>
            </>
          }
          image="/ZGraphic.svg"
          bgimage="/ocean.png"
        />
        <FeatureSection>
          <QuoteBox
            text={`This quote will grab so many clients. It was passed down from marketing
        gurus long ago. Like the Shang dynasty or something.`}
            attrib={`Confucious, Probably`}
          />
          <QuoteBox
            text={`Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, at least, that's what I think he said.`}
            attrib={`Anonymous`}
          />
        </FeatureSection>
        <GridSection cols="3">
          <Card
            title="Best Card"
            text="You've never seen a card like this. These are great cards."
            dest={"/"}
            buttonText="Cardify"
          />
          <Card
            title="Best Card"
            text="You've never seen a card like this. These are great cards."
            dest={"/"}
            buttonText="Cardify"
          />
          <Card
            title="Best Card"
            text="You've never seen a card like this. These are great cards."
            dest={"/"}
            buttonText="Cardify"
          />
          <Card
            title="Best Card"
            text="You've never seen a card like this. These are great cards."
            dest={"/"}
            buttonText="Cardify"
          />
          <Card
            title="Best Card"
            text="You've never seen a card like this. These are great cards."
            dest={"/"}
            buttonText="Cardify"
          />
          <Card
            title="Best Card"
            text="You've never seen a card like this. These are great cards."
            dest={"/"}
            buttonText="Cardify"
          />
        </GridSection>
      </Main>
    </>
  );
}
