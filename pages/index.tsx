import HomeSecond from "@/components/HomeSecond";
import HomeFirst from "@/components/HomeFirst";
import MainLayout from "@/layouts/MainLayout";
import { useSelector } from "react-redux";

export default function Home() {
  const {FIRST, SECOND} = useSelector((state: any) => state.home);

  return (<MainLayout>
    {FIRST && <HomeFirst />}
    {SECOND && <HomeSecond />}
  </MainLayout>);
}
