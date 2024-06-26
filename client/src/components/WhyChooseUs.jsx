import { FaBus } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

/* eslint-disable react/no-unescaped-entities */
export default function WhyChooseUs() {
  return (
    <article className="bg-neutral-100 pb-14">
      <div className="mx-auto text-center px-3 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:px-0">
        <h1
          data-aos="fade-down"
          className="text-4xl md:text-5xl font-extrabold py-14">
          Why Choose Us?
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <div className="group md:w-1/3">
            <div
              data-aos="flip-left"
              className="w-24 h-24 rounded-full border-2 border-green-600 inline-flex items-center justify-center text-green-600 text-4xl group-hover:bg-green-600 group-hover:text-white duration-500 mb-6">
              $
            </div>
            <h2
              data-aos="fade-right"
              className="font-semibold text-lg mb-3">
              Value for money
            </h2>
            <p
              data-aos="fade-right"
              className="font-light text-neutral-500 leading-6 text-sm">
              Cheap doesn't mean ordinary, we will provide it maximum excellent
              service for you even if you don't want this tour to end.
            </p>
          </div>
          <div className="group md:w-1/3">
            <div
              data-aos="flip-left"
              className="w-24 h-24 rounded-full border-2 border-green-600 inline-flex items-center justify-center text-green-600 text-4xl group-hover:bg-green-600 group-hover:text-white duration-500 mb-6">
              <FaLocationArrow />
            </div>
            <h2
              data-aos="fade-right"
              className="font-semibold text-lg mb-3">
              Beatiful Place
            </h2>
            <p
              data-aos="fade-right"
              className="font-light text-neutral-500 leading-6 text-sm">
              You know Batam is a beautiful place and spectacular to travel,
              with us, you stay Enjoy the natural beauty of Batam and the rides
              available.
            </p>
          </div>
          <div className="group md:w-1/3">
            <div
              data-aos="flip-left"
              className="w-24 h-24 rounded-full border-2 border-green-600 inline-flex items-center justify-center text-green-600 text-4xl group-hover:bg-green-600 group-hover:text-white duration-500 mb-6">
              <FaBus />
            </div>
            <h2
              data-aos="fade-right"
              className="font-semibold text-lg mb-3">
              Passionate Travel
            </h2>
            <p
              data-aos="fade-right"
              className="font-light text-neutral-500 leading-6 text-sm">
              We really know our customers' desires to enjoy and experience
              extraordinary tourism. That's all because we also have a passion
              for this tour.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
