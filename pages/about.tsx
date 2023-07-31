import ProvidePart from "@/components/ProvidePart";
import Image from "next/image";
import { useWindowSize } from "@/plugins/windowDimensions";
import BoxClient from "@/components/BoxClient";

export default function About() {
  const {width} = useWindowSize();

  return (<>
    <div style={{height: 200}} className="bg-secondary_a flex justify-center items-center text-xl text-center font-bold">
      <h1 className="relative -bottom-11">Tentang Kami</h1>
    </div>
    <div className="py-20 bg-white">
      <div className="flex items-center gap-3 flex-col md:flex-row">
        <div className="w-full flex justify-center md:justify-end">
          <Image src={"/tk_1.png"} width={250} height={253} alt="" />
        </div>
        <div className="w-full flex justify-start">
          <div className="w-full md:w-2/3 text-2xl relative -bottom-4 text-center md:text-start">Memberikan Inovasi dan Solusi khususnya di bidang Teknologi Informasi agar berdampak Positif kepada pengguna.</div>
        </div>
      </div>
      <div className="flex items-center gap-5 flex-col mt-10 md:mt-0 md:flex-row">
        <div className="w-full flex justify-end">
          <div className="w-full md:w-2/3 text-2xl relative -bottom-4 text-center md:text-start" style={{direction: width < 640 ? "unset" : "rtl"}}>Mewujudkan sistem Teknologi profesional dengan harga terjangkau dalam membantu perubahan era digitalisasi di Indonesia.</div>
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <Image src={"/tk_2.png"} width={250} height={253} alt="" />
        </div>
      </div>
    </div>
    <ProvidePart />
    <BoxClient />
  </>);
}