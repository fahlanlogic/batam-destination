import Button from "./elements/Button";

export default function HeroSecond() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url(./images/kepri-coral.jpg)",
        height: "60vh",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="md:max-w-2xl lg:max-w-3xl">
          <h1
            data-aos="zoom-in-down"
            className="mb-10 text-5xl sm:text-7xl font-extrabold">
            Are You Still Interested To Tour?
          </h1>
          <p
            data-aos="zoom-in-down"
            className="mb-10 text-sm sm:text-base">
            We Offer A Wide Range Of Procedures To Help You Get The Perfect
            Smile
          </p>
          <Button aos="zoom-in">Book a Tour!</Button>
        </div>
      </div>
    </div>
  );
}
