import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSecond, setFirst, setHeaderColor } from "@/store/reducers/homeReducer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import Link from "next/link";

export default function HomeFirst() {
  const slider = useRef<any>(null);
  const [disabled, setDisabled] = useState<any>([false, false]);
  const dispatch = useDispatch();

  const nextSection = () => {
    dispatch(setSecond(true));
    dispatch(setFirst(false));
    dispatch(setHeaderColor("text-primary"));
  }

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,     
    arrows: false,
    rows: 1,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }],
    beforeChange: (oldIndex: any, newIndex: any) => {
      // let page = numItems > 8 ? 5 : numItems > 4 ? 2 : 0;
      // console.log(winSize.width)
      // if (newIndex > 0) {
      //   setDisabled([false, false])

      //   if (winSize.width > 1024) {
      //     if (
      //       ((numItems >= 1 && numItems <= 7) && newIndex >= 1) ||
      //       ((numItems == 8) && newIndex >= 4) ||
      //       ((numItems > 8) && newIndex >= 5) 
      //     ) {
      //       setDisabled([false, true])
      //     }
      //   }else{
      //     console.log(newIndex)
      //     if (
      //       // ((numItems >= 1 && numItems <= 5) && newIndex >= 1) ||
      //       // ((numItems >= 7 && numItems <= 8 ) && newIndex == 5) ||
      //       ((numItems >= 1 && numItems <= 6 ) && newIndex >= 1) ||
      //       ((numItems >= 7 && numItems <= 9 ) && newIndex >= 4) ||
      //       // ((numItems == 9 ) && newIndex == 6) ||
      //       ((numItems > 9) && newIndex >= 7) 
      //     ) {
      //       setDisabled([false, true])
      //     }
      //   }
      // }else{
      //   setDisabled([true, false])
      // }
    }
  };

  return (<>
    {/* <Image
      src={"/loofytech@1000p.png"}
      width={301}
      height={300}
      className="cursor-pointer mt-16"
      alt="logo home"
      onClick={nextSection}
    />
    <h1 className="text-9xl text-black">Loofytech</h1> */}
    {/* <div className="flex items-center">
      <Image
        src={"/loofytech@300p.png"}
        width={61}
        height={60}
        alt=""
        className="relative"
      />
      <span className="text-3xl relative -left-2 top-1" style={{zIndex: -1}}>Loofytech</span>
    </div> */}
    <div className="h-screen bg-white_a relative flex flex-col justify-center items-center">
      <h1 className="text-6xl w-2/3 text-center text-primary font-bold mb-64">
        We Provide the Key to Unlock All Doors of Your Plans
      </h1>
      <div className="absolute -bottom-0">
        <Image src={"/jumbo.png"} width={500} height={500} alt="" />
      </div>
    </div>
    <div className="h-screen bg-primary_a py-5 px-2 md:px-14 xl:px-52">
      <div className="flex flex-col justify-center items-center relative top-36">
        <h1 className="text-5xl text-center font-bold text-secondary">What Your Plans ?</h1>
        <p className="text-white text-3xl mt-3 mb-5">Tell us what is your plan, your problems, and what’s on your mind.</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center relative rounded-xl ur-plan">
            <div className="relative top-4">
              <Image src={"/sec-21.png"} width={350} height={350} alt="We Listens" />
              <span className="text-3xl left-0 right-0 text-center absolute bottom-12 text-black">We Listens</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative rounded-xl ur-plan">
            <div className="relative top-4">
              <Image src={"/sec-22.png"} width={350} height={350} alt="We Listens" />
              <span className="text-3xl left-0 right-0 text-center absolute bottom-12 text-black">We Care</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative rounded-xl ur-plan">
            <div className="relative top-4">
              <Image src={"/sec-23.png"} width={350} height={350} alt="We Listens" />
              <span className="text-3xl left-0 right-0 text-center absolute bottom-12 text-black">We Act</span>
            </div>
          </div>
        </div>
        <div className="text-center relative top-5">
          <button
            type="button"
            className="flex justify-center items-center gap-2 bg-primary text-white py-1.5 px-5 rounded-full drop-shadow-m"
          >
            <Image src={"/whatsapp.svg"} width={24} height={24} alt="logo whatsapp" />
            <span className="">Beritahu Kami Rencana Anda</span>
          </button>
        </div>
      </div>
    </div>
    <div>
      <div className="h-screen bg-secondary_a flex flex-col justify-center items-center px-2 md:px-14 xl:px-52">
        <h1 className="text-5xl text-center font-bold text-black">Why You Choose LoofyTech ?</h1>
        <p className="text-2xl mt-3 mb-5 text-black">Build with Love, to give the best for You</p>
        <div className="w-full">
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
      <div className="h-screen bg-secondary_a"></div>
      <div className="h-screen bg-gray flex flex-col justify-center items-center px-2 md:px-14 xl:px-52"></div>
      <div className="pb-5 pt-10 text-black bg-secondary_a flex justify-between px-2 md:px-14 xl:px-52">
        <div className="w-1/4">
          <Image src={"/logo.svg"} width={137} height={58} className="relative -left-1" alt="logo footer" />
          <div className="text-xs mt-2">
            Kami berdedikasi untuk menciptakan solusi inovatif digitalisasi Bisnis ataupun Produk anda. Dengan prinsip bekerja sepenuh hati untuk memberikan pengalaman terbaik kepada pelanggan, sehingga Anda dapat meraih potensi penuh dari teknologi dengan percaya diri dan tanpa beban finansial yang berlebihan.
          </div>
        </div>
        <div className="">
          <div>
            <div className="whitespace-nowrap mb-5 font-bold">Layanan Kami</div>
            <div className="flex flex-col gap-2 text-sm whitespace-nowrap">
              <Link href={"#"}>Jasa Pembuatan Website</Link>
              <Link href={"#"}>Jasa Pembuatan Aplikasi</Link>
              <Link href={"#"}>Jasa Desain Produk</Link>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div className="whitespace-nowrap mb-5 font-bold">Sosial Media</div>
            <div className="flex gap-1.5 items-center relative -left-0.5">
              <Link href={"#"}>
                <Image src={"/LINKEDIN.svg"} width={26} height={26} alt="" />
              </Link>
              <Link href={"#"}>
                <Image src={"/IG.svg"} width={26} height={26} alt="" />
              </Link>
              <Link href={"#"}>
                <Image src={"/GITHUB.svg"} width={26} height={26} alt="" />
              </Link>
              <Link href={"#"}>
                <Image src={"/FACEBOOK.svg"} width={26} height={26} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="" style={{width: "178px"}}>
          <div className="whitespace-nowrap mb-5 font-bold">Kontak Kami</div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <Image src={"/Wablack.svg"} width={25} height={25} alt="" />
              <div className="text-sm">+62853-7734-4144</div>
            </div>
            <div className="flex items-center gap-1.5">
              <Image src={"/Mail.svg"} width={25} height={25} alt="" />
              <div className="text-sm">contact@loofytech.com</div>
            </div>
            <div className="flex items-start gap-1.5">
              <Image src={"/Location.svg"} width={25} height={25} alt="" />
              <div className="text-sm">Bandar Lampung, Lampung, Indonesia</div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2.5 bg-secondary_a flex justify-between items-center px-2 md:px-14 xl:px-52">
        <div className="flex items-center gap-1.5 text-primary">
          <Image src={"/ph_copyright-light.svg"} width={20} height={20} alt="" />
          <span className="text-sm">2023 Loofytech | All Rights Reserved Copyright</span>
        </div>
        <div className="flex items-center gap-1.5 text-primary">
          Design with
          <Image src={"/made_love.svg"} width={12} height={11} alt="" />
          by Loofyteam
        </div>
      </div>
    </div>
  </>);
}