import Image from "next/image";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setBgBot, setBgTop, setFlash } from "@/store/reducers/transitionReducer";
import { Suspense, useEffect } from "react";
import Loading from "@/pages/loading";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import { useEffectOnce } from "usehooks-ts";
import Select from "react-select";

const font = Roboto({
  subsets: ["latin"],
  weight: "400"
});

interface LProps {
  children: React.ReactNode;
}

export default function MainLayout({children}: LProps) {
  const {FIRST, SECOND, HEADER_COLOR_CSS} = useSelector((state: any) => state.home);
  const {FLASH} = useSelector((state: any) => state.transition);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRouteStartChange = () => {
    dispatch(setFlash(true));
    setTransitionStart();
  }
  
  const handleRouteCompleteChange = () => {
    setTimeout(() => {
      setTransitionEnd();
      setTimeout(() => dispatch(setFlash(false)), 500);
    }, 1000);
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteStartChange);
    router.events.on('routeChangeComplete', handleRouteCompleteChange);
  }, []);

  useEffectOnce(() => {
    dispatch(setFlash(true));
    setTransitionEnd();
    setTimeout(() => dispatch(setFlash(false)), 500);
  });

  const setTransitionStart = () => {
    dispatch(setBgTop({
      initial: {left: "-100%"},
      animate: {left: 0},
      transition: {ease: "easeInOut"}
    }));
    dispatch(setBgBot({
      initial: {left: "-100%"},
      animate: {left: 0},
      transition: {ease: "easeInOut"}
    }));
  }

  const setTransitionEnd = () => {
    dispatch(setBgTop({
      initial: {left: 0},
      animate: {left: "-100%"},
      transition: {ease: "easeInOut"}
    }));
    dispatch(setBgBot({
      initial: {left: 0},
      animate: {left: "-100%"},
      transition: {ease: "easeInOut"}
    }));
  }

  return (<div className={font.className}>
    <div className="z-50 fixed top-0 bg-white w-full flex items-center py-5 px-2 md:px-28 xl:px-64 shadow">
      <div className="relative top-1.5">
        <Image src={"/logo.svg"} width={197} height={58} alt="logo header" />
      </div>
      <div className="h-full w-full flex items-center gap-10 justify-center font-semibold ease-in-out duration-100">
        <Link href={"/"}>Beranda</Link>
        <div className="head-dropdown">
          <span>Layanan Kami</span>
          <div className="head-dropdown-content">
            <Link className="whitespace-nowrap hover:bg-gray_a" href={"/"}>Pembuatan Website</Link>
            <Link className="whitespace-nowrap hover:bg-gray_a" href={"/make-application"}>Pembuatan Program / Aplikasi</Link>
            <Link className="whitespace-nowrap hover:bg-gray_a" href={"/design-product"}>Desain Produk</Link>
          </div>
        </div>
        <Link href={"/information"}>Informasi</Link>
        <Link href={"/about"}>Tentang Kami</Link>
        <Link href={"/contact"}>Kontak</Link>
      </div>
      <div>
        <button
          type="button"
          className="gap-2 font-semibold w-36 h-10 relative text-white rounded-lg bg-primary"
        >
          <div className="flex justify-center items-center gap-2 absolute w-full right-0 top-0 bottom-0 left-0">
            <Image src={"/whatsapp.svg"} width={24} height={24} alt="logo whatsapp" />
            <span className="">Konsultasi</span>
          </div>
        </button>
      </div>
    </div>
    {children}
    <div className="pb-5 pt-10 text-black bg-secondary_a flex flex-col lg:flex-row justify-between px-2 md:px-28 xl:px-64">
      <div className="w-full md:w-1/4">
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
    <div className="py-2.5 bg-secondary_a flex flex-col lg:flex-row justify-between items-center px-2 md:px-28 xl:px-64">
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
    <NextNProgress color="#0F3D3E" />
  </div>);
}