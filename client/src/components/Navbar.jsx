// import { RiWhatsappFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

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
        <h1 className="font-bold">BatamDestination</h1>
        <div className="flex w-full mx-auto text-xs sm:text-sm justify-around md:justify-end gap-6">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-green-600 text-white text-[10px] sm:text-xs">
              <BsTelephoneFill />
            </div>
            <p>081188876677</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-green-600 text-white text-[10px] sm:text-xs">
              <IoMail />
            </div>
            <p>batamdestination@gmail.com</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
