import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TourPlaces() {
  const [tourPlaces, setTourPlaces] = useState([]);
  useEffect(() => {
    const place = [
      {
        id: 1,
        name: "Kepri Coral",
        image: "./images/kepri-coral.jpg",
        description:
          "Selain menikmati pesona laut yang eksotis, para tamu juga bisa menikmati wisata alam yang masih asri inilah hutan mangrove. Di mana para tamu disuguhkan hamparan pepohonan hijau serta spot foto yang menarik untuk diabadikan.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 2,
        name: "Pulau Ranoh",
        image: "./images/pulau-ranoh.jpg",
        description:
          "Pulau ini menawarkan keindahan pantai bersih dan pasir putih yang menakjubkan.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 3,
        name: "Pantai Tunjuk",
        image: "./images/pulau-tunjuk.jpg",
        description:
          "Menawarkan pantai dengan pasir putih bersih dan panorama matahari terbit dan tenggelam yang memukau.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 4,
        name: "Sea Forest Adventure",
        image: "./images/sea-forest-adventure.webp",
        description:
          "Wisata air dengan berbagai wahana permainan yang seru, cocok untuk keluarga yang ingin bersenang-senang bersama.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 5,
        name: "Pantai Mirota",
        image: "./images/pantai-mirota.jpg",
        description:
          "Dikenal sebagai surga pasir putih di ujung Batam, pantai ini menawarkan keindahan alam yang masih asli dan terjaga.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 6,
        name: "Ocarina Park",
        image: "./images/ocarina.jpg",
        description:
          "Dengan luas sekitar 40 hektar, taman ini menawarkan berbagai wahana seperti Waterpark dan Giant Wheels dengan harga tiket yang terjangkau.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 7,
        name: "Alun-alun Engku Putri",
        image: "./images/engku-putri.jpg",
        description:
          "Lapangan besar di pusat kota yang menjadi tempat nongkrong yang ramai terutama pada sore hari.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 8,
        name: "Welcome To Batam",
        image: "./images/welcome-to-batam.jpg",
        description:
          "Sebuah tulisan besar yang mirip dengan Hollywood di Amerika, menjadi tempat hits untuk pengambilan foto.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 9,
        name: "Hutan Wisata Mata Kucing",
        image: "./images/hutan-wisata-mata-kucing-batam.jpg",
        description:
          "Tempat wisata di Batam dimana Anda dapat menikmati wisata alam sambil melihat beberapa fauna seperti elang, monyet, kera hitam, kera cokelat dan masih banyak lagi. Tempat ini juga dikenal sebagai kebun binatang mini.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 10,
        name: "Pantai Glory Melur",
        image: "./images/glory-melur.jpg",
        description:
          "Sesuai namanya, Glory Melur dikonsep bergaya resort. Saat datang ke sini, pengunjung akan melihat banyak gazebo dan beberapa aula beratap jerami yang biasanya ada di resort-resort",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 11,
        name: "Batam Beach Club",
        image: "./images/batam-beach-club.jpeg",
        description:
          "Begitu sampai di dalam, pengunjung akan merasakan, aroma tepi pantai dan laut. Ada kolam renang menghadap laut serta pasir dan lounge.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 12,
        name: "Pantai Vio-vio",
        image: "./images/vio-vio-beach.jpg",
        description:
          "Viovio Beach & Resort menawarkan akomodasi di Galang, Batam dan berjarak 100 meter from Pantai Viovio. Properti ini memiliki fasilitas akses WiFi gratis. Setiap kamar dilengkapi dengan AC. Shower tersedia di kamar mandi.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 13,
        name: "Batam Food Court",
        image: "./images/batam-foodcourt.jpeg",
        description:
          "Nagoya Food Court menjual berbagai macam makanan mulai dari menu tradisional, nusantara, western food, chinese food hingga makanan japanese food. Keberadaan Nagoya Food Court bisa dijadikan sebagai referensi untuk memenuhi semua kebutuhan keluarga.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 14,
        name: "Batam Seafood",
        image: "./images/batam-seafood.jpeg",
        description:
          "Love Seafood Tanjung Piayu Laut menjadi surganya hidangan laut yang patut dicoba. Dengan konsep unik restoran apung di atas laut, restoran ini tak cuma lezat tapi juga punya pemandangan memesona dan harga terjangkau. Punya daya tarik yang membuat Love Seafood selalu ramai dikunjungi wisatawan.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 15,
        name: "Batam Zoo",
        image: "./images/batam-zoo.jpg",
        description:
          "Anda bisa melihat berbagai binatang yang dipelihara di sana, di antaranya capybara, domba merino, domba garut, kuda poni, burung unta, burung emu, burung rhea, burung macaw, rusa tutul, alpaka, dan hewan lainnya.",
        discount_price: 10000,
        original_price: 15000,
      },
      {
        id: 16,
        name: "Batam Light Festival",
        image: "./images/batam-light-festival.png",
        description:
          "Tempat wisata ini memiliki konsep taman lampu dan menghadirkan berbagai hiburan menarik seperti dekorasi lighting, air mancur menari atau dancing fountain dan video mapping.",
        discount_price: 10000,
        original_price: 15000,
      },
    ];

    setTourPlaces(place);
  }, []);

  return (
    <div id="tour-places" className="h-screen flex items-center justify-center mx-auto text-center px-3 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:px-0">
      <div className="w-full">
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-extrabold my-14">
          Tour Place
        </h1>
        <div
          data-aos="fade-up"
          className="relative">
          <Swiper
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: true,
            //   pauseOnMouseEnter: true,
            // }}
            navigation={true}
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
  );
}
