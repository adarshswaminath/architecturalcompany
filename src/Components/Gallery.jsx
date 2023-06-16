import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Image = ({ image, num,caption }) => {
  return (
    <div>
      <div>
        <h3>{num}</h3>
      </div>
      <img src={image} alt="" className="h-96" />
      <div>
        <h3>{caption}.</h3>
      </div>
    </div>
  );
};

function Gallery() {
  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16">
      <div className="title">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1
            className="text-2xl font-semibold lg:text-5xl xl:text-6xl"
            style={{ wordSpacing: "0.5em" }}
          >
            C O M P A N Y N A M E
          </h1>
          <div className="text-lg font-semibold mt-4 sm:mt-0">
            <button className="text-black px-4 py-2 rounded flex items-center">
              READ MORE <AiOutlineArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* iamages */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mt-4">
        <Image
          num="01"
          image="https://mdbcdn.b-cdn.net/img/new/slides/150.webp"
        />
        <Image
          num="02"
          caption="Aute laborum velit sit nulla sunt"
          image="https://mdbcdn.b-cdn.net/img/new/slides/154.webp"
        />
        <Image
          num="03"
          caption="Aute laborum velit sit nulla sunt"
          image="https://mdbcdn.b-cdn.net/img/new/slides/152.webp"
        />
        <Image
          num="04"
          caption="Aute laborum velit sit nulla sunt"
          image="https://mdbcdn.b-cdn.net/img/new/slides/153.webp"
        />
      </div>
      <div className="text-lg font-semibold mt-4 ">
            <button className="text-black px-4 border border-black py-2 rounded flex items-center">
              CONNECT <AiOutlineArrowRight className="ml-2" />
            </button>
          </div>
    </div>
  );
}

export default Gallery;
