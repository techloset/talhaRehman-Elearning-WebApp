import Header from "./components/header.jsx/Header";
import logo from '../public/images/mainLogo.svg';
import watch from '../public/images/watch.svg';
import headerPromotion from '../public/images/headerPromotion.svg';
import teengergirl from '../public/images/teengerGirl.svg';
import Image from "next/image";
import Success from "./components/success/Success";
import CloudSoftware from "./components/cloudSoftware/CloudSoftware";
import Totc from "./components/totc/Totc";
import OurFeatures from "./components/ourFeatures/OurFeatures";
import Footer from "./components/footer/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <header className="header-bg ">
        <nav className="ml-[7.56rem] pt-[1.88rem] flex items-center justify-between ">
          <div>
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
          <div className="flex items-center">
            <ul className="text-[#fff] text-[1.375rem] flex  font-normal  tracking-[0.0275rem]">
              <li className="ml-20" >Home</li>
              <li className="ml-20" >Courses</li>
              <li className="ml-20" >Careers</li>
            <Link href="./blog">  <li className="ml-20" >Blog</li></Link>
              <li className="ml-20" >About Us</li>
            </ul>
            <div className="flex items-center  ml-[5.06rem] mr-[8.375rem] h-auto">
            <Link href="./login"><button className="text-[#5B5B5B] text-[1.375rem] font-medium tracking-[0.0275rem] w-40 h-[3.75rem] rounded-[5rem] shadow-[0px 20px 24px 0px rgba(0, 0, 0, 0.03)] bg-[#fff]">Login</button></Link>
             <Link href="./login/register"> <button className="text-[#FFFFFF] text-[1.375rem] font-medium tracking-[0.0275rem] w-40 h-[3.75rem] rounded-[5rem] shadow-[0px 20px 24px 0px rgba(0, 0, 0, 0.03)] bg-[rgba(255,255,255,0.30)] ml-[1.63rem]">Sign Up</button></Link>
            </div>
          </div>
        </nav>
        <main className="pt-[15.06rem] ml-[8.75rem] grid grid-cols-2 pb-[23.69rem] ">
          <div>
            <h1 className="font-bold text-[3.375rem] leading-normal text-[#fff] w-[42.5625rem]"><span className="text-[#F48C06]">Studying</span> Online is now much easier</h1>
            <p className="text-[#fff] text-2xl font-normal leading-[2.4rem] w-[32.6875rem] mt-[2.12rem]">TOTC is an interesting platform that will teach you in more an interactive way</p>
            <div className="mt-[3.25rem] flex">
              <button className="text-[#FFFFFF] text-[1.5rem] font-semibold leading-normal w-[13.75rem] h-[5rem] rounded-[5rem] shadow-[0px 20px 24px 0px rgba(0, 0, 0, 0.03)] bg-[rgba(255,255,255,0.30)] ">Join for free</button>
              <div className="flex items-center -mt-10 -ml-8 ">
                <Image src={watch} alt="Watch How it work " className="" />
                <p className="text-[#252641] text-2xl leading-normal font-normal -ml-7 -mt-8 ">Watch how it works</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={headerPromotion} alt="Promotion" className="absolute top-0 -left-24 z-10"/>
            <Image src={teengergirl} alt="Promotion" className="absolute z-0 -top-[10.5rem] overflow-y-hidden"/>

          </div>
        </main>
      </header>
      {/* Our Success */}
      <Success/>
      {/* All in One Cloud Software */}
      <CloudSoftware/>
      {/* What is TOTC */}
      <Totc/>
      {/* Our Features */}
      <OurFeatures/>

      {/* Footer */}
      <Footer/>
    </>
  )
}
