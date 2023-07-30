import Image from "next/image";
import { useWindowSize } from "@/plugins/windowDimensions";

const apps = [
  "Website Perusahaan",
  "Website Penjualan",
  "Website Pemerintahan",
  "Website UMKM",
  "Website Sekolah",
  "Website Personal",
  "Website Katalog Produk",
  "Website Organisasi",
  "Website Kampus"
];

export default function MakeWebsite() {
  const {width, height} = useWindowSize();

  return (<>
    <div style={{height: 200}} className="bg-secondary_a flex justify-center items-center text-xl text-center font-bold">
      <div className="relative -bottom-11">
        <h1 className="mb-0 px-5 tracking-wide">LAYANAN KAMI</h1>
        <hr />
        <p className="text-sm tracking-wide">Pembuatan Website</p>
      </div>
    </div>
    <div className="bg-primary pt-10 flex flex-col items-center justify-center relative pb-10 md:pb-64">
      <h1 className="text-3xl text-center text-white font-bold">Website apa yang anda butuhkan ?</h1>
      <Image src={"/ggggg.png"} width={600} height={384} alt="" />
      <div className="gap-3 mt-10 relative -top-5 px-5 w-full grid grid-cols-2 md:grid-cols-3 md:w-auto md:px-0">
        {apps.map((m: any, i: number) => {
          return <div key={i} className="bg-white flex items-center justify-center py-2.5 rounded-lg select-make-app text-sm w-full md:text-base md:w-52">{m}</div>;
        })}
      </div>
    </div>
    <div className="bg-wave flex flex-col items-center justify-center relative">
      <div className="flex flex-col justify-center items-center relative top-36">
        <h1 className="text-xl text-center font-bold text-primary">Langkah Mudah Wujudkan Website Impian Anda.</h1>
        <div className="mt-5 w-full gap-5 grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center relative rounded-xl or-design">
            <div className="relative top-4">
              <Image src={"/sec-21.png"} width={280} height={280} alt="We Listens" />
              <p className="text-lg text-center relative bottom-12 text-black">
                Konsultasi & Perencanaan
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative rounded-xl or-design">
            <div className="relative top-4">
              <Image src={"/sec-22.png"} width={280} height={280} alt="We Listens" />
              <p className="text-lg text-center relative bottom-12 text-black">
                Rancangan & Desain Web
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative rounded-xl or-design">
            <div className="relative top-4">
              <Image src={"/sec-23.png"} width={280} height={280} alt="We Listens" />
              <p className="text-lg text-center relative bottom-12 text-black">
                Pembuatan & Peluncuran
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 flex flex-col items-center justify-center relative">
        <div className="relative top-20">
          <h1 className="text-xl text-center font-bold text-primary">Kami adalah tempat yang Tepat</h1>
          <p className="italic text-sm text-center text-primary">Kami akan memberikan Solusi dan Inovasi untuk Bisnis anda</p>
          <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div className="bg-primary rounded flex items-center justify-center p-5" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/Harga.png"} width={110} height={110} alt="" />
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/jw_2.png"} width={110} height={110} alt="" />
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/jw_3.png"} width={110} height={110} alt="" />
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/jw_4.png"} width={110} height={110} alt="" />
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/jw_5.png"} width={110} height={110} alt="" />
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/jw_6.png"} width={110} height={110} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="gap-10 flex justify-between relative top-40 flex-col md:flex-row">
        <div className="w-80">
          <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
            <div className="text-3xl text-white text-center mb-5 font-bold">Basic</div>
            <div className="text-center mb-10 font-bold">
              <button className="text-primary px-8 py-2 rounded-full bg-secondary">Order Sekarang</button>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>5 Halaman</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>5 Hari Pengerjaan</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>1x Revisi</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>1 SEO Keyword</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>5 Page SEO Dasar</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>10 Upload Setup Gambar</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>+3 Akun Email</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>GRATIS! SSL</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>GRATIS! DOMAIN .COM/.ID</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>Mobile Friendly</span>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
            <div className="text-3xl text-white text-center mb-5 font-bold">Standard</div>
            <div className="text-center mb-10 font-bold">
              <button className="text-primary px-8 py-2 rounded-full bg-secondary">Order Sekarang</button>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>10 Halaman</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>14 Hari Pengerjaan</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>5x Revisi</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>3 SEO Keyword</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>50 Page SEO Dasar</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>10+ Upload Setup Gambar</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>+3 Akun Email</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>GRATIS! SSL</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>GRATIS! DOMAIN .COM/.ID</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>Mobile Friendly</span>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
            <div className="text-3xl text-white text-center mb-5 font-bold">Premium</div>
            <div className="text-center mb-10 font-bold">
              <button className="text-primary px-8 py-2 rounded-full bg-secondary">Order Sekarang</button>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>20 Halaman</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>1 Hari Pengerjaan</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>99x Revisi</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>99 SEO Keyword</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>99 Page SEO Dasar</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>99 Upload Setup Gambar</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>99 Akun Email</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>GRATIS! SSL</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>GRATIS! DOMAIN .COM/.ID</span>
            </div>
            <div className="text-white flex items-center gap-2">
              <Image src={"/check-circle.svg"} width={30} height={30} alt="" />
              <span>Mobile Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}