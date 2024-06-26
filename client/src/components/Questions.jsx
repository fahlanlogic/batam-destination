import { FaMap } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import Button from "./elements/Button";

export default function Questions() {
  const sendMessageToWhatsapp = e => {
    e.preventDefault();
    const text = `Hello, I'm ${e.target.name.value} interested in your service. I want to ask about ${e.target.subject.value}. ${e.target.message.value}`;
    const urlToWhatsapp = `https://wa.me/6281271742017?text=${encodeURIComponent(
      text
    )}`;
    window.open(urlToWhatsapp, "_blank");
  };

  return (
    <div className="mx-auto text-center px-3 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-14 md:px-0">
      <h1
        data-aos="fade-down"
        className="text-4xl md:text-5xl font-extrabold py-14">
        Question?
      </h1>
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between px-3 sm:px-0">
        <div
          data-aos="fade-right"
          className="flex gap-4 items-center group sm:w-1/3">
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
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=6281271742017"
          data-aos="fade-right"
          className="flex gap-4 items-center group sm:w-1/3">
          <div className="border border-green-600 rounded-full p-3 group-hover:bg-green-600 duration-500">
            <IoLogoWhatsapp className="text-xl text-green-600 group-hover:text-white duration-500" />
          </div>
          <div className="text-left">
            <p className="font-semibold">Contact</p>
            <div className="font-light flex flex-col xl:gap-2 xl:flex-row text-neutral-500 text-sm">
              <p>+62812 7174 2017</p>
              <span className="hidden xl:block">|</span>
              <p className="hidden sm:block">+62859 4202 5557</p>
            </div>
          </div>
        </a>
        <div
          data-aos="fade-right"
          className="flex gap-4 items-center group sm:w-1/3">
          <div className="border border-green-600 rounded-full p-3 group-hover:bg-green-600 duration-500">
            <IoMail className="text-xl text-green-600 group-hover:text-white duration-500" />
          </div>
          <div className="text-left">
            <p className="font-semibold">Email Us</p>
            <p className="font-light text-neutral-500 text-sm">
              destinationbatam@gmail.com
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
            required
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
            required
            placeholder="Subject"
            className="p-3 sm:w-1/3 border border-neutral-400 placeholder:text-neutral-400 text-sm rounded-md"
          />
        </div>
        <div className="px-3 sm:px-0">
          <textarea
            placeholder="Message"
            name="message"
            rows={6}
            required
            className="p-3 w-full mt-4 border border-neutral-400 placeholder:text-neutral-400 text-sm rounded-md"
          />
        </div>
        <Button aos="zoom-in-up">Send Message</Button>
      </form>
    </div>
  );
}
