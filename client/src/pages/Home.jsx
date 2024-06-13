export default function Home() {
  return (
    <main className="h-[9999px]">
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
              Menikmati pesona alam Batam: perpaduan pantai berpasir putih,
              hutan hijau yang rimbun, dan matahari terbenam yang memukau.
            </p>
            <button className="bg-green-600 px-4 py-2 rounded-full text-neutral-900 font-semibold hover:scale-110 duration-500 text-sm sm:text-base">
              Eksplorasi
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
