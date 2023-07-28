import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DesignProduct() {
  const slider = useRef<any>(null);
  const slider2 = useRef<any>(null);
  const slider3 = useRef<any>(null);

  const settings = {
    centerMode: true,
    centerPadding: "24%",
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
    focusOnSelect: true,
    beforeChange: (oldIndex: any, newIndex: any) => {}
  }

  const settings2 = {
    centerMode: true,
    centerPadding: "20%",
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
    focusOnSelect: true,
    beforeChange: (oldIndex: any, newIndex: any) => {}
  }

  return (<>
    <div className="dp-section-1 px-2 md:px-14 xl:px-52">
      <h1 className="text-5xl font-bold text-center text-primary select-none">Desain Produk yang Menggambarkan Identitas Anda, Ungkapkan Cerita Diri Anda!</h1>
      <div className="w-full flex items-start mt-24 gap-10">
        <div className="w-1/2 select-none">
          <h3 className="text-primary text-2xl font-bold mb-3">Desain Logo Perusahaan / Usaha Anda</h3>
          <p className="text-sm italic">Kami senang dapat memberikan penawaran jasa desain logo untuk membantu memperkuat identitas merek Anda. Dengan kombinasi kreativitas, profesionalisme, dan keahlian dalam desain grafis, kami siap menciptakan logo yang unik dan mengesankan untuk merek Anda.</p>
        </div>
        <div style={{width: "500px"}}>
          <Slider {...settings} ref={slider}>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/l5_1.png"} width={262} height={262} alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/l8.png"} width={262} height={262} alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/l9.png"} width={262} height={262} alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/l10.png"} width={262} height={262} alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/l4.png"} width={262} height={262} alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/l6.png"} width={262} height={262} alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/l7.png"} width={262} height={262} alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/l1.png"} width={262} height={262} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
    <div className="mb-28 flex flex-col justify-center items-center px-2 md:px-14 xl:px-52">
      <div className="w-full flex items-start mt-24 gap-10">
        <div style={{width: "500px"}}>
          <Slider {...settings} ref={slider2}>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-gray_b flex justify-center items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/Mesa_de_trabajo_1.png"} width={162} height={162} alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-gray_b flex justify-center items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/Mesa_de_trabajo_2.png"} width={182} height={182} alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-gray_b flex justify-center items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/Mesa_de_trabajo_3.png"} width={182} height={182} alt="" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-gray_b flex justify-center items-center" style={{width: "262px", height: "262px"}}>
                  <Image src={"/Mesa_de_trabajo_4.png"} width={182} height={182} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="w-1/2 select-none">
          <h3 className="text-primary text-2xl font-bold mb-3">Desain Logo Perusahaan / Usaha Anda</h3>
          <p className="text-sm italic">Kami senang dapat memberikan penawaran jasa desain logo untuk membantu memperkuat identitas merek Anda. Dengan kombinasi kreativitas, profesionalisme, dan keahlian dalam desain grafis, kami siap menciptakan logo yang unik dan mengesankan untuk merek Anda.</p>
        </div>
      </div>
    </div>
    <div className="dp-section-3 px-2 md:px-14 xl:px-52">
      <h1 className="text-5xl font-bold text-center text-primary mb-3 select-none">Desain Stationary Perusahaan / Usaha Anda</h1>
      <h3 className="italic text-center text-primary select-none">Kami dengan senang hati ingin menawarkan jasa desain stationary perusahaan untuk membantu memperkuat citra dan profesionalisme bisnis Anda. Pengalaman kami mencakup desain stationary, brosur, poster, Mock up untuk ATK (Pulpen, Name Tag, Amplop) dan berbagai materi pemasaran.</h3>
      <div className="w-full mt-20">
        <Slider {...settings2} ref={slider3}>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="bg-gray_b flex justify-center items-center" style={{width: "100%", height: "262px"}}>
                <Image src={"/S1@4x_1.png"} width={540} height={262} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="bg-gray_b flex justify-center items-center" style={{width: "100%", height: "262px"}}>
                <Image src={"/s2@4x.png"} width={540} height={262} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="bg-gray_b flex justify-center items-center" style={{width: "100%", height: "262px"}}>
                <Image src={"/S4@4x.png"} width={540} height={262} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="bg-gray_b flex justify-center items-center" style={{width: "100%", height: "262px"}}>
                <Image src={"/S5@4x.png"} width={420} height={262} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="text-center relative top-10">
        <button
          className="bg-primary text-white py-3 px-8 font-semibold rounded-xl"
          type="button"
          style={{filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}
        >
          Buat Company Profile Anda
        </button>
      </div>
    </div>
  </>);
}