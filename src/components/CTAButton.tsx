import Link from "next/link";

type ICTAProps = {
  text: string;
};
export const CTAButton = (props: ICTAProps) => {
  return (
    <button className="bg-primary p-2 px-8 rounded-md text-white font-bold">
      <Link href="/">{props.text}</Link>
    </button>
  );
};

export default CTAButton;
