import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useWindowSize } from "@/plugins/windowDimensions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const font = Bebas_Neue({
  subsets: ["latin"],
  weight: "400"
});

interface LProps {
  children: React.ReactNode;
}

export default function MainLayout({children}: LProps) {
  const {FIRST, SECOND, HEADER_COLOR_CSS} = useSelector((state: any) => state.home);

  return (<div className={font.className}>
    <div className="z-50 fixed top-0 bg-transparent w-full flex items-center p-5">
      <Image src={"/loofytech@300p.png"} width={82} height={81} alt="logo header" />
      <div
        className={`h-full w-full pr-20 flex items-center gap-10 justify-center text-2xl ease-in-out duration-100 ${HEADER_COLOR_CSS}`}
      >
        <Link href={""}>Home</Link>
        <Link href={""}>Web Development</Link>
        <Link href={""}>Product Design</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </div>
    </div>
    {children}
  </div>);
}