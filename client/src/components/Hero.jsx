import Button from "./elements/Button";

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./images/welcome-to-batam.jpg)",
        height: "100vh",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="md:max-w-2xl lg:max-w-3xl">
          <h1
            data-aos="zoom-in-down"
            className="mb-10 text-6xl sm:text-7xl font-extrabold md:text-8xl lg:text-9xl">
            Tour Lover in Batam
          </h1>
          <p
            data-aos="zoom-in-down"
            className="mb-10 text-sm sm:text-base">
            Enjoy Batam's natural charm, a combination of white sandy beaches,
            lush green forests and stunning sunsets
          </p>
          <Button
            to={"#tour-places"}
            aos="zoom-in-up">
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
}
