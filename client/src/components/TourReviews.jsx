import { useEffect, useState } from "react";
import { FaCommentAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TourReviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const tourReviews = [
      {
        id: 1,
        name: "Hafizh",
        title: "Traveller",
        comment:
          "Not bad! Pelayanan Batam Destination sangat unggul, sebanding dengan harga yang ditawarkan dan itupun murah, wow.",
      },
      {
        id: 2,
        name: "Karim",
        title: "Traveller",
        comment:
          "First experience of traveling in Batam, fortunately we used the services of Batam Destination, the service was super complete. We just have to enjoy, thank you",
      },
      {
        id: 3,
        name: "Salahudin",
        title: "Traveller",
        comment:
          "Oke banget, besok lagi kalo mau ke Batam pakai jasa Batam Destination lagi, sepertinya udah yang paling murah dan oke. Worth it!",
      },
      {
        id: 4,
        name: "Susanti",
        title: "Tourist",
        comment:
          "Saya sebagai turis dari kota lain merasa takjub akan keindahan Kota Batam, Batam Destination membantu saya menikmati itu semua, terimakasih Batam Destination",
      },
      {
        id: 5,
        name: "Rara",
        title: "Traveller",
        comment:
          "Awalnya bingung mau liburan di Batam pakai jasa mana, muncul Batam Destination di pencarian yang menarik bagi saya, dan saya puas.",
      },
    ];

    setReviews(tourReviews);
  }, []);

  return (
    <article className="mx-auto text-center px-3 mb-14 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:px-0">
      <h1
        data-aos="fade-down"
        className="text-4xl md:text-5xl font-extrabold py-14">
        Tour Reviews
      </h1>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}>
        {reviews.map(reviewer => (
          <SwiperSlide key={reviewer.id}>
            <div
              data-aos="flip-left"
              className="relative w-64 xl:w-80 mx-auto">
              <p className="text-sm absolute z-10 px-4 text-neutral-800 font-light leading-8 flex h-full items-center w-full pb-12 xl:pb-16 xl:text-base">
                {reviewer.comment}
              </p>
              <FaCommentAlt
                className="w-64 xl:w-80 h-64 xl:h-80 mb-7 text-center mx-auto text-white"
                style={{
                  filter: "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2))",
                }}
              />
            </div>
            <h2
              data-aos="flip-left"
              className="font-semibold text-lg mb-2">
              {reviewer.name}
            </h2>
            <p
              data-aos="flip-left"
              className="text-sm text-neutral-500 font-light">
              {reviewer.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}
