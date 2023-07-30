import Image from "next/image";

export default function About() {
  return (<>
    <div style={{height: 200}} className="bg-secondary_a flex justify-center items-center text-xl text-center font-bold">
      <h1 className="relative -bottom-11">Tentang Kami</h1>
    </div>
    <div className="py-20 bg-white">
      <div className="flex items-center gap-3">
        <div className="w-full flex justify-end">
          <Image src={"/tk_1.png"} width={250} height={253} alt="" />
        </div>
        <div className="w-full flex justify-start">
          <div className="w-2/3 text-2xl relative -bottom-4">Memberikan Inovasi dan Solusi khususnya di bidang Teknologi Informasi agar berdampak Positif kepada pengguna.</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-full flex justify-end">
          <div className="w-2/3 text-2xl relative -bottom-4" style={{direction: "rtl"}}>Mewujudkan sistem Teknologi profesional dengan harga terjangkau dalam membantu perubahan era digitalisasi di Indonesia.</div>
        </div>
        <div className="w-full flex justify-start">
          <Image src={"/tk_2.png"} width={250} height={253} alt="" />
        </div>
      </div>
    </div>
    <div className="bg-primary relative flex flex-col justify-center items-center text-xl text-center wbgx" style={{minHeight: 556}}>
      <div className="absolute -top-20">
        <Image src={"/jumbo.png"} width={500} height={500} alt="" />
      </div>
      <div className="relative -bottom-28 text-5xl w-2/3 text-center text-white font-bold">
        We Provide the Key to
        <br />
        Unlock All Doors of Your Plans
      </div>
      <div className="absolute bottom-10">
        <button className="bg-white text-primary flex items-center gap-2 rounded-lg px-8 py-2">
          <Image src={"/formkit_whatsapp.svg"} width={24} height={24} alt="logo whatsapp" />
          <span className="">Ceritakan Rencana Anda</span>
        </button>
      </div>
    </div>
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold text-primary">OUR CLIENT</h1>
      <div className="grid grid-cols-5 gap-5 mt-16">
        <div className="box-client">
          <Image src={"/Dinamika_Network_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/PT_Duma_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Stars_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Liffe_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Meta_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/SMK_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/GPM_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Catur_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_2.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_5.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/ESD_1.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_3.png"} width={114} height={114} alt="" />
        </div>
        <div className="box-client">
          {/*  */}
        </div>
        <div className="box-client">
          {/*  */}
        </div>
        <div className="box-client">
          {/*  */}
        </div>
      </div>
    </div>
  </>);
}