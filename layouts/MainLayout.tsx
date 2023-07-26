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
    <div className="z-50 fixed top-0 bg-white w-full flex items-center py-5 px-2 md:px-14 xl:px-52 shadow">
      <div className="relative top-1.5">
        <Image src={"/logo.svg"} width={197} height={58} alt="logo header" />
      </div>
      <div
        className={`h-full w-full flex items-center pr-10 gap-10 justify-center font-semibold ease-in-out duration-100 ${HEADER_COLOR_CSS}`}
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/webdev"}>Web Development</Link>
        <Link href={"/design"}>Product Design</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
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
    {/* {FLASH && <Loading />} */}
    <NextNProgress color="#00529D" />
  </div>);
}