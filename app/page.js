import Image from "next/image";
import Knjiga from "./components/Knjiga";
import Forma from "./components/Forma";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-amber-200">
      <Forma />
      <Knjiga />
    </div>
  );
}
