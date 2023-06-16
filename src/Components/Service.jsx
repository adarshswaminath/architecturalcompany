import React from "react";

function Service() {
  return (
    <div>
        <div className="p-4 md:p-8 lg:p-12 xl:p-16">
      {/* big title */}
      <div className="">
        <h1
          className="text-2xl font-semibold lg:text-5xl xl:text-6xl"
          style={{ wordSpacing: "0.5em" }}
        >
          S E R V I C E
        </h1>

        {/* content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="text-center bg-gray-100 shadow-lg p-3 hover:scale-105 hover:bg-gray-300 transform transition-transform duration-300">
            <h1 className="text-2xl font-semibold">Title 1</h1>
            <p className="mt-4">
              Excepteur fugiat deserunt duis nostrud aute culpa nulla do do ut.
              Ut enim excepteur do duis eiusmod in occaecat amet anim sunt. Ea
              ad labore laboris ut ut eiusmod laboris. Ullamco laboris minim
              veniam deserunt Lorem Lorem eiusmod eiusmod. Ex adipisicing
              ullamco aliqua ipsum sint. Voluptate officia culpa sit fugiat
              laboris elit officia tempor aute tempor sit quis aute fugiat.
              Ipsum laborum reprehenderit laboris officia sint quis commodo
              occaecat ex cillum id elit minim anim.
            </p>
          </div>

          <div className="text-center bg-gray-100 shadow-lg p-3 hover:scale-105 hover:bg-gray-300 transform transition-transform duration-300">
            <h1 className="text-2xl font-semibold">Title 2</h1>
            <p className="mt-4">
              Excepteur fugiat deserunt duis nostrud aute culpa nulla do do ut.
              Ut enim excepteur do duis eiusmod in occaecat amet anim sunt. Ea
              ad labore laboris ut ut eiusmod laboris. Ullamco laboris minim
              veniam deserunt Lorem Lorem eiusmod eiusmod. Ex adipisicing
              ullamco aliqua ipsum sint. Voluptate officia culpa sit fugiat
              laboris elit officia tempor aute tempor sit quis aute fugiat.
              Ipsum laborum reprehenderit laboris officia sint quis commodo
              occaecat ex cillum id elit minim anim.
            </p>
          </div>

          <div className="text-center bg-gray-100 shadow-lg p-3 hover:scale-105 hover:bg-gray-300 transform transition-transform duration-300">
            <h1 className="text-2xl font-semibold">Title 3</h1>
            <p className="mt-4">
              Excepteur fugiat deserunt duis nostrud aute culpa nulla do do ut.
              Ut enim excepteur do duis eiusmod in occaecat amet anim sunt. Ea
              ad labore laboris ut ut eiusmod laboris. Ullamco laboris minim
              veniam deserunt Lorem Lorem eiusmod eiusmod. Ex adipisicing
              ullamco aliqua ipsum sint. Voluptate officia culpa sit fugiat
              laboris elit officia tempor aute tempor sit quis aute fugiat.
              Ipsum laborum reprehenderit laboris officia sint quis commodo
              occaecat ex cillum id elit minim anim.
            </p>
          </div>

          <div className="text-center bg-gray-100 shadow-lg p-3 hover:scale-105 hover:bg-gray-300 transform transition-transform duration-300">
            <h1 className="text-2xl font-semibold">Title 4</h1>
            <p className="mt-4">
              Excepteur fugiat deserunt duis nostrud aute culpa nulla do do ut.
              Ut enim excepteur do duis eiusmod in occaecat amet anim sunt. Ea
              ad labore laboris ut ut eiusmod laboris. Ullamco laboris minim
              veniam deserunt Lorem Lorem eiusmod eiusmod. Ex adipisicing
              ullamco aliqua ipsum sint. Voluptate officia culpa sit fugiat
              laboris elit officia tempor aute tempor sit quis aute fugiat.
              Ipsum laborum reprehenderit laboris officia sint quis commodo
              occaecat ex cillum id elit minim anim.
            </p>
          </div>
        </div>
      </div>
      {/* big close */}
    </div>
    <div>
    <img src="https://mdbcdn.b-cdn.net/img/new/slides/132.webp" alt="" className="w-full"/>
    </div>
    </div>
  );
}

export default Service;
