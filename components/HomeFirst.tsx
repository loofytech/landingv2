import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSecond, setFirst } from "@/store/reducers/homeReducer";

export default function HomeFirst() {
  const dispatch = useDispatch();

  const nextSection = () => {
    dispatch(setSecond(true));
    dispatch(setFirst(false));
  }

  return (<div className="flex flex-col justify-center items-center gap-8 h-screen">
    <Image
      src={"/loofytech@1000p.png"}
      width={301}
      height={300}
      className="cursor-pointer mt-16"
      alt="logo home"
      onClick={nextSection}
    />
    <h1 className="text-9xl text-black">Loofytech</h1>
  </div>);
}