// import { RiWhatsappFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="sticky top-0">
      <nav className="py-3 mx-auto text-center space-y-3 bg-black text-white shadow-sm">
        <h1 className="font-bold">BatamDestination</h1>
        <div className="flex w-full mx-auto text-sm justify-around">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-green-600 text-white text-xs">
              <BsTelephoneFill className="" />
            </div>
            <p>081188876677</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-green-600 text-white text-xs">
              <IoMail className="" />
            </div>
            <p>batamdestination@gmail.com</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
