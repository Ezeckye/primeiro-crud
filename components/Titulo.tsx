import { ReactNode } from "react";

type TituloProps = {
  children: ReactNode;
};

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-7 py-5 text-2xl">{props.children}</h1>
      <hr className="border-2 border-blue-500" />
    </div>
  );
}
