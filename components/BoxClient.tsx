import Image from "next/image";
import { useWindowSize } from "@/plugins/windowDimensions";

export default function BoxClient() {
  const {width} = useWindowSize();

  return (<>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-20 md:py-0">
      <h1 className="text-3xl md:text-5xl font-bold text-primary">OUR CLIENT</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 mt-10 md:mt-16">
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