import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSecond, setFirst, setHeaderColor } from "@/store/reducers/homeReducer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import Link from "next/link";
import { useWindowSize } from "@/plugins/windowDimensions";

export default function HomeFirst() {
  const slider = useRef<any>(null);
  const [disabled, setDisabled] = useState<any>([false, false]);
  const dispatch = useDispatch();
  const {width, height} = useWindowSize();

  const nextSection = () => {
    dispatch(setSecond(true));
    dispatch(setFirst(false));
    dispatch(setHeaderColor("text-primary"));
  }

  const settings = {
    centerMode: true,
    centerPadding: "22%",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,     
    arrows: false,
    rows: 1,
    beforeChange: (oldIndex: any, newIndex: any) => {}
  }

  return (<>
    <style global jsx>{`
      body {
        background-image: url("/header2@4x_1.png");
        background-repeat: repeat;
        background-size: 100%;
      }
    `}</style>
    <div className="bg-transparent relative flex flex-col justify-center items-center">
      <h1 className="w-2/3 text-center text-primary font-bold mt-36 text-2xl md:text-4xl lg:text-6xl">
        We Provide the Key to Unlock All Doors of Your Plans
      </h1>
      <div className="relative -top-20">
        <Image src={"/jumbo.png"} width={500} height={500} alt="" />
      </div>
      <div className="relative -top-20 pt-5 pb-28 px-2 md:px-28 xl:px-64">
        <div className="flex flex-col justify-center items-center relative top-12">
          <h1 className="text-3xl md:text-5xl text-center font-bold text-secondary">What Your Plans ?</h1>
          <p className="text-secondary text-center text-lg px-5 md:px-0 md:text-3xl mt-3">Tell us what is your plan, your problems, and what’s on your mind.</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-5">
            <div className="flex flex-col justify-center items-center relative rounded-xl ur-plan">
              <div className="relative top-4">
                <Image src={"/sec-21.png"} width={width < 768 ? 250 : 350} height={width < 768 ? 250 : 350} alt="We Listens" />
                <span className="text-3xl left-0 right-0 text-center absolute bottom-0 md:bottom-12 text-black">We Listens</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center relative rounded-xl ur-plan">
              <div className="relative top-4">
                <Image src={"/sec-22.png"} width={width < 768 ? 250 : 350} height={width < 768 ? 250 : 350} alt="We Listens" />
                <span className="text-3xl left-0 right-0 text-center absolute bottom-0 md:bottom-12 text-black">We Care</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center relative rounded-xl ur-plan">
              <div className="relative top-4">
                <Image src={"/sec-23.png"} width={width < 768 ? 250 : 350} height={width < 768 ? 250 : 350} alt="We Listens" />
                <span className="text-3xl left-0 right-0 text-center absolute bottom-0 md:bottom-12 text-black">We Act</span>
              </div>
            </div>
          </div>
          <div className="text-center relative top-10 md:top-5">
            <button
              type="button"
              className="flex justify-center items-center gap-2 bg-primary text-white py-1.5 px-5 rounded-lg drop-shadow-m"
            >
              <Image src={"/whatsapp.svg"} width={24} height={24} alt="logo whatsapp" />
              <span className="">Beritahu Kami Rencana Anda</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="py-10 bg-white_a flex flex-col justify-center items-center px-2 md:py-20 md:px-28 xl:px-64">
      <h1 className="text-center font-bold text-black text-2xl md:text-5xl">Why You Choose LoofyTech ?</h1>
      <p className="text-lg mt-3 text-black md:text-2xl">Build with Love, to give the best for You</p>
      <div className="w-full mt-14 px-5 md:px-20">
        <Slider {...settings} ref={slider}>
          <div className="">
            <div className="px-2">
              <div className="bg-white flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <span className="font-bold text-xl">Design</span>
                <Image src={"/Design.png"} width={238} height={245} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-white flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <span className="font-bold text-xl">Skalabilitas</span>
                <Image src={"/Skalabilitas.png"} width={238} height={245} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-white flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <span className="font-bold text-xl">Security</span>
                <Image src={"/Security.png"} width={238} height={245} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-white flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <span className="font-bold text-xl">Speed</span>
                <Image src={"/Speed.png"} width={238} height={245} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-white flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <span className="font-bold text-xl">Server</span>
                <Image src={"/Server.png"} width={238} height={245} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-white flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <span className="font-bold text-xl">Harga</span>
                <Image src={"/Harga.png"} width={238} height={245} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    <div className="bg-transparent py-20 flex flex-col justify-center items-center px-2 md:px-20 xl:px-72">
      {/* <h1 className="text-center text-5xl font-bold text-white mb-16">Our Client</h1> */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        <div className="box-client">
          <Image src={"/Dinamika_Network_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/PT_Duma_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Stars_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Liffe_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Meta_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/SMK_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/GPM_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Catur_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_2.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_5.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/ESD_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_3.png"} width={114} height={114} alt="" />
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
      {/* <h1 className="text-center text-5xl font-bold text-white my-16">Our Project</h1> */}
      <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:mx-0">
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/importir_1.png"} width={294} height={293} className="w-full" alt="" />
          <div className="text-primary font-bold relative -top-6 text-center">Website Importir</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 px-5 text-center">Importir</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/san_pradana_1.png"} width={294} height={293} className="w-full" alt="" />
          <div className="text-primary font-bold relative -top-6 text-center">Website PT. San Pradana Teknik</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. San Pradana Teknik</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/gpm_11.png"} width={294} height={293} className="w-full" alt="" />
          <div className="text-primary font-bold relative -top-6 text-center">Website PT. Gading Persada Mandiri</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Gading Persada Mandiri</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/yudatama_1.png"} width={294} height={293} className="w-full" alt="" />
          <div className="text-primary font-bold relative -top-6 text-center">Website PT. Stars Yudathama</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Stars Yudathama</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/baselog_1.png"} width={294} height={293} className="w-full" alt="" />
          <div className="text-primary font-bold relative -top-6 text-center">Aplikasi BaseLog</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">APPLICATION</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">BaseLog</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/catur_11.png"} width={294} height={293} className="w-full" alt="" />
          <div className="text-primary font-bold relative -top-6 text-center">Website PT. Catur Pariwara Utama</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Catur Pariwara Utama</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/admin_11.png"} width={294} height={293} className="w-full" alt="" />
          <div className="text-primary font-bold relative -top-6 text-center">POS metaWater</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">APPLICATION</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">POS metaWater</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/dinamika_1.png"} width={294} height={293} className="w-full" alt="" />
          <div className="text-primary font-bold relative -top-6 text-center">Website PT. Dinamika Network Consultant</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Dinamika Network Consultant</div>
          </div>
        </div>
      </div>
    </div>
  </>);
}