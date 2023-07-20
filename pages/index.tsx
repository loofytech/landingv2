import HomeSecond from "@/components/HomeSecond";
import HomeFirst from "@/components/HomeFirst";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const {FIRST, SECOND} = useSelector((state: any) => state.home);

  return (<>
    {FIRST && <HomeFirst />}
    {SECOND && <HomeSecond />}
  </>);
}
