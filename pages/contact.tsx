import Image from "next/image";

export default function Contact() {
  return (<>
    <div style={{height: 200}} className="bg-secondary_a flex justify-center items-center text-xl text-center font-bold">
      <h1 className="relative -bottom-11">KONTAK</h1>
    </div>
    <div className="h-screen relative">
      <div className="w-full" style={{height: 430}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.0617622124!2d105.23912712849075!3d-5.379255599661072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40dab84cd7a0c5%3A0xbd524cbf6353402c!2sCengkeh%209%20No.54%2C%20Gn.%20Terang%2C%20Kec.%20Tj.%20Karang%20Bar.%2C%20Kota%20Bandar%20Lampung%2C%20Lampung%2035147!5e0!3m2!1sen!2sid!4v1690603249463!5m2!1sen!2sid" width="100%" height="430" style={{border: 0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="absolute bottom-20 w-full flex justify-center gap-10">
        <div className="flex flex-col items-center p-10 text-center w-72 h-72 rounded-md" style={{background: "rgba(97, 142, 135, 0.95)"}}>
          <Image src={"/ph_phone-call.png"} width={117} height={117} alt="" />
          <span className="text-white font-bold text-xl">+62853-7734-4144</span>
        </div>
        <div className="flex flex-col items-center p-10 text-center w-72 h-72 rounded-md" style={{background: "rgba(97, 142, 135, 0.95)"}}>
          <Image src={"/basil_location-outline.png"} width={117} height={117} alt="" />
          <span className="text-white font-bold text-xl">Bandar Lampung Lampung</span>
        </div>
        <div className="flex flex-col items-center p-10 text-center w-72 h-72 rounded-md" style={{background: "rgba(97, 142, 135, 0.95)"}}>
          <Image src={"/fluent_mail-20-regular.png"} width={117} height={117} alt="" />
          <span className="text-white font-bold text-xl">contact@loofytech.com</span>
        </div>
      </div>
    </div>
  </>);
}