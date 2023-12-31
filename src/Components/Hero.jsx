import React, { useState, useEffect } from "react";

const Dots = ({ activeIndex, count }) => {
  return (
    <div className="grid justify-center gap-1">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full mx-1 ${
            index === activeIndex ? "bg-white" : "bg-gray-500"
          }`}
        ></div>
      ))}
    </div>
  );
};

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const images = [
    "https://mdbcdn.b-cdn.net/img/new/slides/146.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/149.webp",
    "https://mdbcdn.b-cdn.net/img/new/slides/148.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section>
        <div
          className="h-screen overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url('${images[backgroundImage]}')`,
          }}
        >
          <div className="top-0 right-0 bottom-0 left-0 h-full w-full bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            {/* Navbar section */}
            <div className="flex justify-between p-3">
              <div>
                <h2 className="text-3xl text-white">LOGO</h2>
              </div>
              <div className="flex gap-3 text-white">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  The best offer on the market <br />
                  <span>for your business</span>
                </h1>
                <button
                  type="button"
                  className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Get started
                </button>
              </div>
              <Dots activeIndex={backgroundImage} count={images.length} />
            </div>

            {/* Display current image index */}
            <div className="flex justify-center mt-3 text-white">
              Current Image: {backgroundImage + 1}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
