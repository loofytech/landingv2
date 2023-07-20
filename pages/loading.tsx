import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setBgBot, setBgTop } from "@/store/reducers/transitionReducer";

export default function Loading() {
  const {FLASH, TRANSITION_BG_TOP, TRANSITION_BG_BOT} = useSelector((state: any) => state.transition);
  const dispatch = useDispatch();

  return (<div className={`flash`}>
    <div className="h-1/2 w-full flex">
      {[...Array(10).fill(undefined).map((e: any, i: number) => {
        return <div key={i} className="relative overflow-hidden" style={{width: "10%"}}>
          <motion.div
            className="absolute w-full h-full top-0 bg-black"
            {...TRANSITION_BG_TOP}
          />
        </div>
      })]}
    </div>
    <div className="h-1/2 w-full flex">
      {[...Array(10).fill(undefined).map((e: any, i: number) => {
        return <div key={i} className="relative overflow-hidden" style={{width: "10%"}}>
          <motion.div
            className="absolute w-full h-full top-0 bg-black"
            {...TRANSITION_BG_BOT}
          />
        </div>
      })]}
    </div>
  </div>);
}