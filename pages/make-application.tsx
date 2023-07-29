import Image from "next/image";
import { useState } from "react";

const sdlcs = [
  {
    key: "analisis",
    desc: "Identifikasi dan pemahaman Kebutuhan Aplikasi yang akan dikembangkan.",
    position: {
      right: 50,
      top: 70,
      height: 70,
      width: 160,
      rotate: "40deg"
    }
  },
  {
    key: "perencanaan",
    desc: "Penyusunan rencana proyek secara keseluruhan baik Alur Sistem & Desain sistem.",
    position: {
      width: 80,
      height: 150,
      right: 34,
      top: 197
    }
  },
  {
    key: "proses",
    desc: "Proses Pengembangan Aplikasi oleh tim Loofytech",
    position: {
      width: 160,
      height: 70,
      bottom: 50,
      right: 113,
      rotate: "-30deg"
    }
  },
  {
    key: "testing",
    desc: "pengujian fungsional, pengujian kinerja, pengujian keamanan, dan lain-lain.",
    position: {
      width: 160,
      height: 50,
      bottom: 90,
      left: 50,
      rotate: "40deg"
    }
  },
  {
    key: "implementasi",
    desc: "Instalasi dan Pelatihan terkait aplikasi kepada Instansi / Klien",
    position: {
      width: 80,
      height: 160,
      left: 33,
      top: 140
    }
  },
  {
    key: "pemeliharaan",
    desc: "Pemeliharaan rutin dan pembaruan sesuai kebutuhan dan perubahan",
    position: {
      width: 160,
      height: 80,
      top: 40,
      left: 100,
      rotate: "-30deg"
    }
  }
];

const apps = [
  "Aplikasi Perkantoran",
  "Aplikasi Tiket",
  "Aplikasi Persuratan",
  "Aplikasi Toko",
  "Aplikasi Rumah Sakit",
  "Aplikasi Pergudangan",
  "Aplikasi Pemerintahan",
  "Aplikasi keuangan",
  "Aplikasi Koperasi"
]

export default function MakeApplication() {
  const [showInfo, setShowInfo] = useState<string>("Identifikasi dan pemahaman Kebutuhan Aplikasi yang akan dikembangkan.");

  const handleSDLC = (param: string) => {
    setShowInfo(param);
  }

  return (<>
    <div style={{height: 200}} className="bg-secondary_a flex justify-center items-center text-xl text-center font-bold">
      <div className="relative -bottom-11">
        <h1 className="mb-0 px-5 tracking-wide">LAYANAN KAMI</h1>
        <hr />
        <p className="text-sm tracking-wide">Pembuatan Aplikasi</p>
      </div>
    </div>
    <div className="bg-primary pt-10 pb-44 flex flex-col items-center justify-center relative">
      <h1 className="text-3xl text-white font-bold">Aplikasi apa yang anda butuhkan ?</h1>
      <Image src={"/ggggg.png"} width={600} height={384} alt="" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10 relative -top-5">
        {apps.map((m: any, i: number) => {
          return <div key={i} className="w-full md:w-52 bg-white flex items-center justify-center py-2.5 rounded-lg select-make-app">
            Aplikasi Perkantoran
          </div>;
        })}
      </div>
    </div>
    <div className="bg-wave flex flex-col items-center justify-center relative">
      <h1 className="text-xl font-bold text-primary mt-44">Software Development Life Cycle</h1>
      <span className="italic text-sm text-primary">Panduan untuk mengelola proyek pengembangan Aplikasi secara efisien.</span>
      <div className="info-sldc bg-white">{showInfo}</div>
      <div className="my-5 animate-spin-cus relative">
        <Image src={"/SDLC_2.png"} width={500} height={500} alt="" />
        <div className="absolute w-full h-full opacity-50 top-0 rounded-full">
          {sdlcs.map((e: any, i: number) => {
            return <div
              key={i}
              className="absolute cursor-pointer"
              style={e.position}
              onClick={() => handleSDLC(e.desc)}
            />
          })}
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center relative">
        <h1 className="text-xl font-bold text-primary">Stack yang kami gunakan</h1>
        <span className="italic text-sm text-primary">Teknologi terkini yang banyak digunakan perusahaan - perusahaan besar.</span>
        <div className="grid grid-cols-6 gap-5 mt-10">
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_76.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_94.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_87.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_86.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_82.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_79.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_98.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_93.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_95.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_78.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_77.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_97.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/boot@300x_1.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_92.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_90.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/nuxt_1.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_91.png"} width={70} height={70} alt="" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_96.png"} width={70} height={70} alt="" />
          </div>
        </div>
      </div>
    </div>
  </>);
}