import Image from "next/image";
import { useWindowSize } from "@/plugins/windowDimensions";

interface BProps {
  title?: string;
  subtitle?: string;
}

export default function BoxClient({title, subtitle}: BProps) {
  const {width} = useWindowSize();

  return (<>
    <div className="flex flex-col items-center justify-center bg-transparent py-14">
      {title && <h1 className="text-3xl md:text-4xl font-bold text-primary">{title}</h1>}
      {subtitle && <p className="text-center italic">{subtitle}</p>}
      <div className={`grid grid-cols-3 md:grid-cols-5 gap-5 ${title ? "mt-10" : "mt-4"}`}>
        <div className="box-client">
          <Image src={"/Dinamika_Network_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/PT_Duma_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Stars_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Liffe_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Meta_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/SMK_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/GPM_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Catur_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_2.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_5.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/ESD_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_3.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          {/*  */}
        </div>
        <div className="box-client">
          {/*  */}
        </div>
        <div className="box-client">
          {/*  */}
        </div>
      </div>
    </div>
  </>);
}