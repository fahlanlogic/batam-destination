import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Navbar() {
  const scrollY = window.scrollY;
  window.onscroll = () => {
    let currentScrollY = window.scrollY;
    if (currentScrollY > scrollY) {
      document.querySelector("header").classList.add("bg-neutral-900");
    } else {
      document.querySelector("header").classList.remove("bg-neutral-900");
    }
  };

  return (
    <header className="fixed w-full duration-500 top-0 z-50">
      <nav
        className="py-3 px-3 mx-auto text-center space-y-3  text-white shadow-sm md:flex justify-between items-center md:space-y-0 md:max-w-2xl lg:max-w-4xl
      xl:max-w-6xl md:py-5 sm:px-0">
        <div className="font-bold items-center gap-2 flex justify-center">
          <img
            src="./images/logo.svg"
            alt="logo"
            className="h-5 w-5"
          />
          <h1>BatamDestination</h1>
        </div>
        <div className="flex w-full mx-auto text-xs sm:text-sm justify-around md:justify-end gap-6">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=6281271742017"
            className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-green-600 text-white text-[10px] sm:text-xs">
              <IoLogoWhatsapp />
            </div>
            <p>081271742017</p>
            <p className="hidden sm:block">{" | "}085942025557</p>
          </a>
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-green-600 text-white text-[10px] sm:text-xs">
              <IoMail />
            </div>
            <p>destinationbatam@gmail.com</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
