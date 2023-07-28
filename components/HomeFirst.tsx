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
  }

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
      <div className="pb-20 bg-secondary_a px-2 md:px-14 xl:px-52">
        <div className="gap-10 flex justify-between">
          <div className="w-80">
            <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
              <div className="text-3xl text-white text-center mb-5 font-bold">Basic</div>
              <div className="text-center mb-10 font-bold">
                <button className="text-primary px-8 py-2 rounded-full bg-secondary">Order Sekarang</button>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>5 Halaman</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>5 Hari Pengerjaan</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>1x Revisi</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>1 SEO Keyword</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>5 Page SEO Dasar</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>10 Upload Setup Gambar</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>+3 Akun Email</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>GRATIS! SSL</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>GRATIS! DOMAIN .COM/CO.ID</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>Mobile Friendly</span>
              </div>
            </div>
          </div>
          <div className="w-80">
            <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
              <div className="text-3xl text-white text-center mb-5 font-bold">Standard</div>
              <div className="text-center mb-10 font-bold">
                <button className="text-primary px-8 py-2 rounded-full bg-secondary">Order Sekarang</button>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>10 Halaman</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>14 Hari Pengerjaan</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>5x Revisi</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>3 SEO Keyword</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>50 Page SEO Dasar</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>10+ Upload Setup Gambar</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>+3 Akun Email</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>GRATIS! SSL</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>GRATIS! DOMAIN .COM/.ID</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>Mobile Friendly</span>
              </div>
            </div>
          </div>
          <div className="w-80">
            <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
              <div className="text-3xl text-white text-center mb-5 font-bold">Premium</div>
              <div className="text-center mb-10 font-bold">
                <button className="text-primary px-8 py-2 rounded-full bg-secondary">Order Sekarang</button>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>20 Halaman</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>1 Hari Pengerjaan</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>99x Revisi</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>99 SEO Keyword</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>99 Page SEO Dasar</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>99 Upload Setup Gambar</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>99 Akun Email</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>GRATIS! SSL</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>GRATIS! DOMAIN .COM/.ID</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
                <span>Mobile Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-primary_a flex flex-col justify-center items-center px-2 md:px-20 xl:px-72">
        <h1 className="text-center text-5xl font-bold text-white mb-16">Our Client</h1>
        <div className="w-full grid grid-cols-6">
          <div className="border border-b-0 border-r-0 border-black flex justify-center hover:bg-white">
            <Image src={"/Dinamika_Network_1.png"} width={144} height={144} alt="" />
          </div>
          <div className="border border-b-0 border-r-0 border-black flex justify-center hover:bg-white">
            <Image src={"/PT_Duma_1.png"} width={144} height={144} alt="" />
          </div>
          <div className="border border-b-0 border-r-0 border-black flex justify-center hover:bg-white">
            <Image src={"/Stars_1.png"} width={144} height={144} alt="" />
          </div>
          <div className="border border-b-0 border-r-0 border-black flex justify-center hover:bg-white">
            <Image src={"/Liffe_1.png"} width={144} height={144} alt="" />
          </div>
          <div className="border border-b-0 border-r-0 border-black flex justify-center hover:bg-white">
            <Image src={"/Meta_1.png"} width={144} height={144} alt="" />
          </div>
          <div className="border border-b-0 border-black flex justify-center hover:bg-white">
            <Image src={"/SMK_1.png"} width={144} height={144} alt="" />
          </div>
          <div className="border border-r-0 border-black flex justify-center hover:bg-white">
            <Image src={"/GPM_1.png"} width={144} height={144} alt="" />
          </div>
          <div className="border border-r-0 border-black flex justify-center hover:bg-white">
            <Image src={"/Catur_1.png"} width={144} height={144} alt="" />
          </div>
          <div className="border border-r-0 border-black flex justify-center hover:bg-white">
            {/* <Image src={"/PT_Duma_1.png"} width={144} height={144} alt="" /> */}
          </div>
          <div className="border border-r-0 border-black flex justify-center hover:bg-white">
            {/* <Image src={"/PT_Duma_1.png"} width={144} height={144} alt="" /> */}
          </div>
          <div className="border border-r-0 border-black flex justify-center hover:bg-white">
            {/* <Image src={"/PT_Duma_1.png"} width={144} height={144} alt="" /> */}
          </div>
          <div className="border border-black flex justify-center hover:bg-white">
            {/* <Image src={"/PT_Duma_1.png"} width={144} height={144} alt="" /> */}
          </div>
        </div>
        <h1 className="text-center text-5xl font-bold text-white my-16">Our Project</h1>
        <div className="w-full grid grid-cols-3 gap-10">
          <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
            <Image src={"/importir_1.png"} width={294} height={293} className="w-full" alt="" />
            <div className="text-white font-bold relative -top-6 text-center">Website Importir</div>
            <div className="project-info-part p-9">
              <p className="text-black text-center text-xs font-bold">WEBSITE</p>
              <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 px-5 text-center">Importir</div>
            </div>
          </div>
          <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
            <Image src={"/san_pradana_1.png"} width={294} height={293} className="w-full" alt="" />
            <div className="text-white font-bold relative -top-6 text-center">Website PT. San Pradana Teknik</div>
            <div className="project-info-part p-9">
              <p className="text-black text-center text-xs font-bold">WEBSITE</p>
              <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. San Pradana Teknik</div>
            </div>
          </div>
          <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
            <Image src={"/gpm_11.png"} width={294} height={293} className="w-full" alt="" />
            <div className="text-white font-bold relative -top-6 text-center">Website PT. Gading Persada Mandiri</div>
            <div className="project-info-part p-9">
              <p className="text-black text-center text-xs font-bold">WEBSITE</p>
              <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Gading Persada Mandiri</div>
            </div>
          </div>
          <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
            <Image src={"/yudatama_1.png"} width={294} height={293} className="w-full" alt="" />
            <div className="text-white font-bold relative -top-6 text-center">Website PT. Stars Yudathama</div>
            <div className="project-info-part p-9">
              <p className="text-black text-center text-xs font-bold">WEBSITE</p>
              <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Stars Yudathama</div>
            </div>
          </div>
          <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
            <Image src={"/baselog_1.png"} width={294} height={293} className="w-full" alt="" />
            <div className="text-white font-bold relative -top-6 text-center">Aplikasi BaseLog</div>
            <div className="project-info-part p-9">
              <p className="text-black text-center text-xs font-bold">APPLICATION</p>
              <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">BaseLog</div>
            </div>
          </div>
          <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
            <Image src={"/catur_11.png"} width={294} height={293} className="w-full" alt="" />
            <div className="text-white font-bold relative -top-6 text-center">Website PT. Catur Pariwara Utama</div>
            <div className="project-info-part p-9">
              <p className="text-black text-center text-xs font-bold">WEBSITE</p>
              <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Catur Pariwara Utama</div>
            </div>
          </div>
          <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
            <Image src={"/admin_11.png"} width={294} height={293} className="w-full" alt="" />
            <div className="text-white font-bold relative -top-6 text-center">POS metaWater</div>
            <div className="project-info-part p-9">
              <p className="text-black text-center text-xs font-bold">APPLICATION</p>
              <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">POS metaWater</div>
            </div>
          </div>
          <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
            <Image src={"/dinamika_1.png"} width={294} height={293} className="w-full" alt="" />
            <div className="text-white font-bold relative -top-6 text-center">Website PT. Dinamika Network Consultant</div>
            <div className="project-info-part p-9">
              <p className="text-black text-center text-xs font-bold">WEBSITE</p>
              <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Dinamika Network Consultant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}