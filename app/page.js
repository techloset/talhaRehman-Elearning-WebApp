import Success from "./components/success/Success";
import CloudSoftware from "./components/cloudSoftware/CloudSoftware";
import Totc from "./components/totc/Totc";
import OurFeatures from "./components/ourFeatures/OurFeatures";
import Footer from "./components/footer/Footer";
import Explore from "./components/explore/Explore";
import Testimonial from "./components/testimonial/Testimonial";
import LastestNews from "./components/lastestNews/LastestNews";
import HomeHeader from "./components/homeHeader/HomeHeader";


export default function Home() {
  return (
    <>

      <HomeHeader/>
      {/* Our Success */}
      <Success/>
      {/* All in One Cloud Software */}
      <CloudSoftware/>
      {/* What is TOTC */}
      <Totc/>
      {/* Our Features */}
      <OurFeatures/>
      {/* Explore */}
      <Explore/>
      {/* Testimonial */}
      <Testimonial/>
      {/* latest News */}
      <LastestNews/>

      {/* Footer */}
      <Footer/>
    </>
  )
}
