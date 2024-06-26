/* eslint-disable react/no-unescaped-entities */
import SwiperCore from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Questions from "../components/Questions";
import HeroSecond from "../components/HeroSecond";
import TourReviews from "../components/TourReviews";
import WhyChooseUs from "../components/WhyChooseUs";
import TourVehicle from "../components/TourVehicle";
import TourPlaces from "../components/TourPlace";
import Hero from "../components/Hero";
// ..

export default function Home() {
  AOS.init({
    duration: 1000,
  });
  SwiperCore.use([Pagination, Autoplay, Navigation]);

  return (
    <main>
      <Hero />
      <TourPlaces />
      <TourVehicle />
      <WhyChooseUs />
      <TourReviews />
      <HeroSecond />
      <Questions />
      <Footer />
    </main>
  );
}
