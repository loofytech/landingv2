import Image from "next/image";

export default function Information() {
  return (<>
    <div className="bg-white_a flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full relative" style={{boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.25)", height: 200, zIndex: 2}} />
      <div className="i-s1 w-full bg-white" style={{boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.25)"}}>
        <div className="relative mx-auto w-2/3 py-3">
          <div className="absolute bg-secondary_b pb-1.5 pt-3 px-5 rounded-t-xl font-bold left-0 -top-10">RESELLER JASA</div>
          <p className="text-sm">Bergabunglah dengan kami sebagai reseller jasa penyediaan Website / Aplikasi dan nikmati peluang menguntungkan untuk menghadirkan solusi website berkualitas tinggi kepada klien Anda.</p>
          <p className="text-sm mt-2">Dengan tim ahli dalam pembuatan dan desain website, kami menawarkan beragam opsi untuk memenuhi kebutuhan bisnis klien Anda. Mulai dari website pribadi hingga aplikasi yang kompleks, kami dapat menyediakan platform yang dioptimalkan untuk performa dan tampilan yang luar biasa.</p>
          <p className="font-bold py-10">BONUS PENJUALAN 10% !</p>
          <div className="text-sm w-3/4">
            <span className="font-bold leading-8">Manfaat Menjadi Reseller Bersama Kami:</span>
            <br />
            🚀 <span className="italic">Akses ke layanan berkualitas tinggi dengan harga kompetitif.</span>
            <br />
            📈 <span className="italic">Peluang meraih keuntungan yang menarik dari setiap proyek yang Anda rujuk.</span>
            <br />
            💼 <span className="italic">Dukungan penuh dari tim kami, termasuk bantuan dalam menjual dan mengenalkan layanan kami kepada klien Anda.</span>
            <br />
            🏆 <span className="italic">Kesempatan untuk bermitra dengan perusahaan yang berpengalaman dan terpercaya dalam dunia web development.</span>
          </div>
        </div>
        <div className="flex justify-around relative mx-auto w-2/3 pb-10">
          <Image src={"/Artboard_1@4x_1.png"} width={470} height={404} alt="" />
          <form className="w-96 flex flex-col mt-10">
            <span className="mb-0.5">Nama</span>
            <input type="text" className="py-2 px-3 rounded-md outline-none text-sm w-full" />
            <span className="mt-2 mb-0.5">Email</span>
            <input type="email" className="py-2 px-3 rounded-md outline-none text-sm w-full" />
            <span className="mt-2 mb-0.5">No Telepon</span>
            <div className="flex items-center">
              <div className="h-full rounded-l-md flex items-center pl-2 text-sm" style={{background: "#FFF"}}>+62</div>
              <input type="email" className="py-2 px-3 rounded-r-md outline-none text-sm w-full" />
            </div>
            <span className="mt-2 mb-0.5">Pesan</span>
            <input type="text" className="py-2 px-3 rounded-md outline-none text-sm w-full" />
            <div className="mt-8">
              <button type="submit" className="py-2 px-5 rounded-md bg-primary text-white font-bold">Submit Reseller</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="bg-white_a flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full relative" style={{boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.25)", height: 130, zIndex: 2}} />
      <div className="i-s1 w-full bg-white" style={{boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.25)"}}>
        <div className="relative mx-auto w-2/3 py-3">
          <div className="absolute bg-secondary_b pb-1.5 pt-3 px-5 rounded-t-xl font-bold left-0 -top-10">JASA SKRIPSI</div>
          <p className="text-sm">Kami dengan senang hati menawarkan jasa bimbingan skripsi berbasis website atau aplikasi guna membantu mahasiswa meraih kesuksesan akademik mereka. Dalam era digital yang terus berkembang, kami menyadari pentingnya solusi inovatif dan teknologi mutakhir untuk mendukung penelitian dan proyek akhir Anda.</p>
          <p className="font-bold py-10">HARGA KHUSUS UNTUK SKRIPSI ANDA !</p>
          <div className="text-sm w-3/4">
            <span className="font-bold leading-8">Mengapa Memilih Layanan Kami?</span>
            <br />
            🚀 <span className="italic">Pengalaman: Kami ahli di bidang pengembangan web dan aplikasi dengan pengalaman yang luas dan beragam.</span>
            <br />
            📈 <span className="italic">Kreativitas: Kami memberikanmerancang solusi yang sesuai dengan kebutuhan dan tujuan skripsi Anda.</span>
            <br />
            💼 <span className="italic">Pengetahuan Mendalam: Mengikuti perkembangan teknologi terbaru dan memiliki pemahaman mendalam tentang berbagai platform dan bahasa pemrograman.</span>
            <br />
            🏆 <span className="italic">Kualitas Tinggi: Kami menjamin hasil yang ramah pengguna dan desain yang menarik.</span>
            <br />
            🏆 <span className="italic">Pengerjaan Tepat Waktu: Kami memahami betapa pentingnya deadline skripsi Anda dan berkomitmen untuk menyelesaikan proyek sesuai waktu yang telah ditetapkan.</span>
          </div>
        </div>
        <div className="flex justify-around relative mx-auto w-2/3 pb-10">
          <Image src={"/Artboard_1@4x_1.png"} width={470} height={404} alt="" />
          <form className="w-96 flex flex-col mt-10">
            <span className="mb-0.5">Nama</span>
            <input type="text" className="py-2 px-3 rounded-md outline-none text-sm w-full" />
            <span className="mt-2 mb-0.5">Email</span>
            <input type="email" className="py-2 px-3 rounded-md outline-none text-sm w-full" />
            <span className="mt-2 mb-0.5">No Telepon</span>
            <div className="flex items-center">
              <div className="h-full rounded-l-md flex items-center pl-2 text-sm" style={{background: "#FFF"}}>+62</div>
              <input type="email" className="py-2 px-3 rounded-r-md outline-none text-sm w-full" />
            </div>
            <span className="mt-2 mb-0.5">Pesan</span>
            <input type="text" className="py-2 px-3 rounded-md outline-none text-sm w-full" />
            <div className="mt-8">
              <button type="submit" className="py-2 px-5 rounded-md bg-primary text-white font-bold">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div style={{height: 70, background: "#FFF"}}></div>
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
  </>);
}