/* eslint-disable react/no-unescaped-entities */
// className="py-3 px-3 mx-auto text-center space-y-3  text-white shadow-sm md:flex justify-between items-center md:space-y-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:py-5 sm:px-0"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

export default function Home() {
  SwiperCore.use([Pagination, Autoplay, Navigation]);
  const [tourPlaces, setTourPlaces] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const place = [
      {
        id: 1,
        name: "Pulau Abang",
        image: "public/pulau-abang.jpg",
        description:
          "Salah satu unggulan destinasi wisata di Pulau Abang Batam adalah pemandangan bawah lautnya yang indah, dengan terumbu karang berwarna-warni yang terkenal dengan sebutan Blue Coral.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 2,
        name: "Pulau Ranoh",
        image: "public/pulau-ranoh.jpg",
        description:
          "Pulau ini menawarkan keindahan pantai bersih dan pasir putih yang menakjubkan.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 3,
        name: "Pantai Tunjuk",
        image: "public/pulau-tunjuk.jpg",
        description:
          "Menawarkan pantai dengan pasir putih bersih dan panorama matahari terbit dan tenggelam yang memukau.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 4,
        name: "Sea Forest Adventure",
        image: "public/sea-forest-adventure.webp",
        description:
          "Wisata air dengan berbagai wahana permainan yang seru, cocok untuk keluarga yang ingin bersenang-senang bersama.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 5,
        name: "Pantai Mirota",
        image: "public/pantai-mirota.webp",
        description:
          "Dikenal sebagai surga pasir putih di ujung Batam, pantai ini menawarkan keindahan alam yang masih asli dan terjaga.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 6,
        name: "Ocarina Park",
        image: "public/ocarina.jpg",
        description:
          "Dengan luas sekitar 40 hektar, taman ini menawarkan berbagai wahana seperti Waterpark dan Giant Wheels dengan harga tiket yang terjangkau.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 7,
        name: "Alun-alun Engku Putri",
        image: "public/engku-putri.jpg",
        description:
          "Lapangan besar di pusat kota yang menjadi tempat nongkrong yang ramai terutama pada sore hari.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 8,
        name: "Welcome To Batam",
        image: "public/welcome-to-batam.jpg",
        description:
          "Sebuah tulisan besar yang mirip dengan Hollywood di Amerika, menjadi tempat hits untuk pengambilan foto.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 9,
        name: "Hutan Wisata Mata Kucing",
        image: "public/hutan-wisata-mata-kucing-batam.bmp",
        description:
          "Tempat wisata di Batam dimana Anda dapat menikmati wisata alam sambil melihat beberapa fauna seperti elang, monyet, kera hitam, kera cokelat dan masih banyak lagi. Tempat ini juga dikenal sebagai kebun binatang mini.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 10,
        name: "Pantai Elyora",
        image: "public/pantai-elyora.jpg",
        description:
          "Salah satu spotnya menjadi sangat ikonik karena menghadirkan pemandangan yang Instagrammable.",
        discount_price: 10000,
        original_price: 15000,
      },
    ];

    const tourReviews = [
      {
        id: 1,
        name: "Hafizh",
        title: "Traveller",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 2,
        name: "Hafizah",
        title: "Traveller",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 3,
        name: "Salahudin",
        title: "Traveller",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 4,
        name: "John",
        title: "Traveller",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
      {
        id: 5,
        name: "Alexander",
        title: "Traveller",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      },
    ];

    setTourPlaces(place);
    setReviews(tourReviews);
  }, []);

  const sendMessageToWhatsapp = e => {
    e.preventDefault();
    const urlToWhatsapp = `https://api.whatsapp.com/send?phone=6288271230587&text=Hello, I'm ${e.target.name.value} interested in your service. I want to ask about ${e.target.subject.value}. ${e.target.message.value}`;
    window.open(urlToWhatsapp, "_blank");
  };

  return (
    <main className="">
      {/* Hero section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(public/pulau-abang.jpg)",
          height: "100vh",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="md:max-w-2xl lg:max-w-3xl">
            <h1 className="mb-10 text-6xl sm:text-7xl font-extrabold md:text-8xl lg:text-9xl">
              Tour Lover in Batam
            </h1>
            <p className="mb-10 text-sm sm:text-base">
              Enjoy Batam's natural charm, a combination of white sandy beaches,
              lush green forests and stunning sunsets
            </p>
            <button className="bg-green-600 px-4 py-2 rounded-full text-white font-semibold hover:scale-110 duration-500 text-sm sm:text-base">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Tour place */}
      <div className="h-screen flex items-center justify-center mx-auto text-center px-3 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:px-0">
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold my-14">
            Tour Place
          </h1>
          <div className="relative">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}>
              {tourPlaces.map(listing => (
                <SwiperSlide key={listing.id}>
                  <div
                    className="relative card rounded-xl min-h-[470px]"
                    style={{
                      background: `url(${listing.image}) center no-repeat`,
                      backgroundSize: "cover",
                    }}>
                    <div className="bg-neutral-100 w-full absolute bottom-0 p-3 text-left space-y-4 rounded-b-xl">
                      <h3 className="font-bold text-lg">{listing.name}</h3>
                      <p className="text-xs font-light line-clamp-2 md:text-sm text-neutral-500">
                        {listing.description}
                      </p>
                      {/* <div className="flex items-center gap-3">
                        <p className="discount-price font-bold">
                          {listing.discount_price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          })}
                        </p>
                        <p className="original-price font-light line-through text-xs text-neutral-500">
                          {listing.original_price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          })}
                        </p>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Tour Vehicle */}
      <div className="h-[90vh] flex items-center mx-auto text-center px-3 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:px-0">
        <div className="">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-14">
            Tour Vehicle
          </h1>
          <div className="sm:pb-7">
            <div className="flex bg-green-600 py-2 rounded-full font-semibold text-white text-sm w-fit mx-auto px-8">
              <p className="pr-8">Daily</p>
              <p className="border-x px-8 border-white">Weekly</p>
              <p className="pl-8">Monthly</p>
            </div>
          </div>
          <div className="flex justify-between my-10">
            <img
              src="../../public/avanza.png"
              alt=""
              className="h-28 sm:h-32 hidden sm:block md:h-32 lg:h-44 xl:h-52"
            />
            <img
              src="../../public/innova.png"
              alt=""
              className="h-[115px] sm:h-32 md:h-32 lg:h-44 xl:h-52"
            />
            <img
              src="../../public/hiace.png"
              alt=""
              className="h-[115px] sm:h-32 md:h-32 lg:h-44 xl:h-52"
            />
          </div>
          <p className="text-sm text-neutral-700 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            delectus voluptates unde ipsam, blanditiis cumque laboriosam vitae
            eveniet officiis ipsa officia perspiciatis numquam voluptatibus
            earum veniam nostrum sunt. Ipsam, consequatur! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ut quibusdam cumque dolorum
            fugiat temporibus totam facere assumenda anim.
          </p>
          <button className="text-sm font-semibold bg-green-600 text-white rounded-full px-3 py-2 mt-7 hover:scale-110 duration-500">
            Book Now
          </button>
        </div>
      </div>

      {/* Why choose us */}
      <div className="bg-neutral-100 pb-14">
        <div className="mx-auto text-center px-3 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:px-0">
          <h1 className="text-4xl md:text-5xl font-extrabold py-14">
            Why Choose Us?
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <div className="group">
              <div className="w-24 h-24 rounded-full border-2 border-green-600 inline-flex items-center justify-center text-green-600 text-4xl group-hover:bg-green-600 group-hover:text-white duration-500 mb-6">
                $
              </div>
              <h3 className="font-semibold text-lg mb-3">Value for money</h3>
              <p className="font-light text-neutral-500 leading-6 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, nulla perspiciatis odio quibusdam laudantium est nihil
                ad! Maxime nihil voluptatum.
              </p>
            </div>
            <div className="group">
              <div className="w-24 h-24 rounded-full border-2 border-green-600 inline-flex items-center justify-center text-green-600 text-4xl group-hover:bg-green-600 group-hover:text-white duration-500 mb-6">
                <FaLocationArrow />
              </div>
              <h3 className="font-semibold text-lg mb-3">Beatiful Place</h3>
              <p className="font-light text-neutral-500 leading-6 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, nulla perspiciatis odio quibusdam laudantium est nihil
                ad! Maxime nihil voluptatum.
              </p>
            </div>
            <div className="group">
              <div className="w-24 h-24 rounded-full border-2 border-green-600 inline-flex items-center justify-center text-green-600 text-4xl group-hover:bg-green-600 group-hover:text-white duration-500 mb-6">
                <FaBus />
              </div>
              <h3 className="font-semibold text-lg mb-3">Passionate Travel</h3>
              <p className="font-light text-neutral-500 leading-6 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, nulla perspiciatis odio quibusdam laudantium est nihil
                ad! Maxime nihil voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Review */}
      <div className="mx-auto text-center px-3 mb-14 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:px-0">
        <h1 className="text-4xl md:text-5xl font-extrabold py-14">
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
              <div className="relative w-64 xl:w-80 mx-auto">
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
              <h3 className="font-semibold text-lg mb-2">{reviewer.name}</h3>
              <p className="text-sm text-neutral-500 font-light">
                {reviewer.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero section 2 */}
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1619880889144-d6e252999afa?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          height: "60vh",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="md:max-w-2xl lg:max-w-3xl">
            <h1 className="mb-10 text-5xl sm:text-7xl font-extrabold">
              Are You Still Intarested To Tour?
            </h1>
            <p className="mb-10 text-sm sm:text-base">
              We Offer A Wide Range Of Procedures To Help You Get The Perfect
              Smile
            </p>
            <button className="bg-green-600 px-4 py-2 rounded-full text-white font-semibold hover:scale-110 duration-500 text-sm sm:text-base">
              Book a Tour!
            </button>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="mx-auto text-center px-3 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-14 md:px-0">
        <h1 className="text-4xl md:text-5xl font-extrabold py-14">Question?</h1>
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between px-3 sm:px-0">
          <div className="flex gap-4 items-center group sm:w-1/3">
            <div className="border border-green-600 rounded-full p-3 group-hover:bg-green-600 duration-500">
              <FaMap className="text-xl text-green-600 group-hover:text-white duration-500" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Our Office</p>
              <p className="font-light text-neutral-500 text-sm">
                Belian, Batam City
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center group sm:w-1/3">
            <div className="border border-green-600 rounded-full p-3 group-hover:bg-green-600 duration-500">
              <IoCall className="text-xl text-green-600 group-hover:text-white duration-500" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Contact</p>
              <div className="font-light flex flex-col xl:gap-2 xl:flex-row text-neutral-500 text-sm">
                <p>+62812 7174 2017</p>
                <span className="hidden xl:block">|</span>
                <p className="hidden sm:block">+62859 4202 5557</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center group sm:w-1/3">
            <div className="border border-green-600 rounded-full p-3 group-hover:bg-green-600 duration-500">
              <IoMail className="text-xl text-green-600 group-hover:text-white duration-500" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Email Us</p>
              <p className="font-light text-neutral-500 text-sm">
                niagaumum1@gmail.com
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={sendMessageToWhatsapp}>
          <div className="flex justify-between mt-14 flex-col sm:flex-row gap-4 sm:gap-6 px-3 sm:px-0">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-3 sm:w-1/3 border border-neutral-400 placeholder:text-neutral-400 text-sm rounded-md"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="p-3 sm:w-1/3 border border-neutral-400 placeholder:text-neutral-400 text-sm rounded-md"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-3 sm:w-1/3 border border-neutral-400 placeholder:text-neutral-400 text-sm rounded-md"
            />
          </div>
          <div className="px-3 sm:px-0">
            <textarea
              placeholder="Message"
              name="message"
              rows={6}
              className="p-3 w-full mt-4 border border-neutral-400 placeholder:text-neutral-400 text-sm rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 mt-5 px-4 py-2 rounded-full text-white font-semibold hover:scale-110 duration-500 text-sm sm:text-base">
            Send Message
          </button>
        </form>
      </div>

      <footer className="bg-neutral-800 text-white h-32 flex items-center justify-center w-full">
        <p>Copyright &copy; 2024 Batam Destination</p>
      </footer>
    </main>
  );
}
