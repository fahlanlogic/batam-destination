import Button from "./elements/Button";

/* eslint-disable react/no-unescaped-entities */
export default function TourVehicle() {
  return (
    <article className="h-[90vh] flex items-center mx-auto text-center px-3 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:px-0">
      <div className="">
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-extrabold mb-14">
          Tour Vehicle
        </h1>
        <div className="sm:pb-7">
          <div
            data-aos="fade-up"
            className="flex bg-green-600 py-2 rounded-full font-semibold text-white text-sm w-fit mx-auto px-8">
            <p className="pr-8">Daily</p>
            <p className="border-x px-8 border-white">Weekly</p>
            <p className="pl-8">Monthly</p>
          </div>
        </div>
        <div className="flex justify-between my-10">
          <img
            data-aos="fade-up"
            src="./images/avanza.png"
            alt=""
            className="h-[115px] sm:h-32 md:h-32 lg:h-44 xl:h-52"
          />
          <img
            data-aos="fade-up"
            src="./images/innova.png"
            alt=""
            className="h-28 sm:h-32 hidden sm:block md:h-32 lg:h-44 xl:h-52"
          />
          <img
            data-aos="fade-up"
            src="./images/hiace.png"
            alt=""
            className="h-[115px] sm:h-32 md:h-32 lg:h-44 xl:h-52"
          />
        </div>
        <p
          data-aos="flip-up"
          className="text-sm text-neutral-700 leading-6 mb-4">
          We provide comfort based on what you choose. Invite your whole family,
          friends or colleagues for that trip most amazing with us. Starting
          from daily, weekly even for a whole month we serve you with all our
          heart and satisfaction. We also provide vehicles with super
          comfortable facilities for you, it's all here.
        </p>
        <Button aos="zoom-in">Book Now</Button>
      </div>
    </article>
  );
}
