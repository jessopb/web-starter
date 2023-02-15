import Link from "next/link";

type ICTAProps = {
  text: string;
  secondary: boolean;
  dest: string;
};
export const CTAButton = (props: ICTAProps) => {
  return (
    <Link href={props.dest || "/"}>
      {!props.secondary && (
        <button className="bg-primary-800 p-2 px-8 rounded-md text-white font-bold">
          {props.text}
        </button>
      )}
      {props.secondary && (
        <button className="p-2 px-0 rounded-md text-primary underline text-primary-800">
          {props.text}
        </button>
      )}
    </Link>
  );
};

export default CTAButton;
