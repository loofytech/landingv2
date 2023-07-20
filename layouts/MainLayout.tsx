import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setBgBot, setBgTop, setFlash } from "@/store/reducers/transitionReducer";
import { Suspense, useEffect } from "react";
import Loading from "@/pages/loading";
import { useRouter } from "next/router";
import { useEffectOnce } from "usehooks-ts";

const font = Bebas_Neue({
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
    <div className="z-50 fixed top-0 bg-transparent w-full flex items-center p-5">
      <Image src={"/loofytech@300p.png"} width={82} height={81} alt="logo header" />
      <div
        className={`h-full w-full pr-20 flex items-center gap-10 justify-center text-2xl ease-in-out duration-100 ${HEADER_COLOR_CSS}`}
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/webdev"}>Web Development</Link>
        <Link href={"/design"}>Product Design</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
    {children}
    {FLASH && <Loading />}
  </div>);
}