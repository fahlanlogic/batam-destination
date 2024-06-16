/* eslint-disable react/no-unescaped-entities */
// className="py-3 px-3 mx-auto text-center space-y-3  text-white shadow-sm md:flex justify-between items-center md:space-y-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:py-5 sm:px-0"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { useEffect, useState } from "react";

export default function Home() {
  SwiperCore.use([Pagination, Autoplay, Navigation]);
  const [tourPlaces, setTourPlaces] = useState([]);

  useEffect(() => {
    const place = [
      {
        id: 1,
        name: "Pantai Marina",
        image:
          "https://ak-d.tripcdn.com/images/1i63n2224rj24o60x536B_W_400_0_R5_Q90.jpg?proc=source/trip",
      },
      {
        id: 2,
        name: "Pantai Marina",
        image:
          "https://images.unsplash.com/photo-1619880889144-d6e252999afa?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        name: "Pantai Marina",
        image:
          "https://images.unsplash.com/photo-1619880889144-d6e252999afa?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        name: "Pantai Marina 4",
        image:
          "https://images.unsplash.com/photo-1619880889144-d6e252999afa?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 5,
        name: "Pantai Marina 5",
        image:
          "https://images.unsplash.com/photo-1619880889144-d6e252999afa?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 6,
        name: "Pantai Marina 6",
        image:
          "https://images.unsplash.com/photo-1619880889144-d6e252999afa?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];
    setTourPlaces(place);
  }, []);

  // const chunkArray = (array, size) => {
  //   const chunkedArray = [];
  //   for (let i = 0; i < array.length; i += size) {
  //     chunkedArray.push(array.slice(i, i + size));
  //   }
  //   return chunkedArray;
  // };

  // const getColomns = () => {
  //   if (window.innerWidth >= 1024) {
  //     return 4;
  //   } else if (window.innerWidth >= 640) {
  //     return 2;
  //   } else {
  //     return 1;
  //   }
  // };

  // const colomns = getColomns();
  // const chunks = chunkArray(tourPlaces, colomns);

  return (
    <main className="h-[9999px]">
      {/* Hero section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1619880889144-d6e252999afa?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
            <button className="bg-green-600 px-4 py-2 rounded-full text-neutral-900 font-semibold hover:scale-110 duration-500 text-sm sm:text-base">
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
              autoplay={true}
              pagination={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed aliquam pariatur a assumenda ad soluta, alias
                        adipisci accusamus eum excepturi facilis officiis eaque?
                        Eveniet corporis doloremque accusantium, at libero
                        praesentium.
                      </p>
                      <div className="flex items-center gap-3">
                        <p className="font-bold">Rp 10.000</p>
                        <p className="font-light line-through text-xs text-neutral-500">
                          Rp 50.000
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Tour Vehicle */}
      <div className="min-h-screen mx-auto text-center px-3 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:px-0">
        <h1 className="text-4xl md:text-5xl font-extrabold my-14">
          Tour Vehicle
        </h1>
        <div className="sm:py-7">
          <div className="flex bg-green-600 py-2 rounded-full font-semibold text-neutral-800 text-sm w-fit mx-auto px-8">
            <p className="pr-8">Daily</p>
            <p className="border-x px-8 border-neutral-800">Weekly</p>
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
            className="h-[122px] sm:h-32 md:h-32 lg:h-44 xl:h-52"
          />
          <img
            src="../../public/hiace.png"
            alt=""
            className="h-[122px] sm:h-32 md:h-32 lg:h-44 xl:h-52"
          />
        </div>
        <p className="text-sm text-neutral-700 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          delectus voluptates unde ipsam, blanditiis cumque laboriosam vitae
          eveniet officiis ipsa officia perspiciatis numquam voluptatibus earum
          veniam nostrum sunt. Ipsam, consequatur! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ut quibusdam cumque dolorum fugiat
          temporibus totam facere assumenda anim.
        </p>
        <button className="text-sm font-semibold bg-green-600 rounded-full px-3 py-2 mt-7 hover:scale-110 duration-500">
          Book Now
        </button>
      </div>
    </main>
  );
}
