import React from "react";

function About() {
  return (
    <div className=" p-4 md:p-8 lg:p-12 xl:p-16" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1
            className="text-2xl text-center font-semibold lg:text-5xl xl:text-6xl"
            style={{ wordSpacing: "0.5em" }}
          >
            A B O U T U S
          </h1>

          <p className="text-lg leading-7">
            Cillum ullamco labore qui consequat cupidatat nisi. Esse Lorem
            mollit id id nostrud nostrud nostrud veniam sit minim ullamco sint
            culpa aute. Ullamco laboris aliquip cillum excepteur reprehenderit
            incididunt magna eiusmod nostrud sit aute ut excepteur non.Cillum
            ullamco labore qui consequat cupidatat nisi. Esse Lorem mollit id id
            nostrud nostrud nostrud veniam sit minim ullamco sint culpa aute.
            Ullamco laboris aliquip cillum excepteur reprehenderit incididunt
            magna eiusmod nostrud sit aute ut excepteur non.Cillum ullamco
            labore qui consequat cupidatat nisi. Esse Lorem mollit id id nostrud
            nostrud nostrud veniam sit minim ullamco sint culpa aute. Ullamco
            laboris aliquip cillum excepteur reprehenderit incididunt magna
            eiusmod nostrud sit aute ut excepteur non.Cillum ullamco labore qui
            consequat cupidatat nisi. Esse Lorem mollit id id nostrud nostrud
            nostrud.
          </p>
        </div>
        <div>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/130.webp"
            alt="About Us"
            className="w-full h-96"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/131.webp"
            alt="About Us"
            className="w-full h-96"
          />
        </div>
        <div>
        <h1 className="text-2xl text-center font-semibold lg:text-5xl xl:text-6xl" style={{ wordSpacing: "0.2em" }}>
    W H A T W E D O
  </h1>
          <p className="text-lg leading-7">
            Cillum ullamco labore qui consequat cupidatat nisi. Esse Lorem
            mollit id id nostrud nostrud nostrud veniam sit minim ullamco sint
            culpa aute. Ullamco laboris aliquip cillum excepteur reprehenderit
            incididunt magna eiusmod nostrud sit aute ut excepteur non. Cillum
            ullamco labore qui consequat cupidatat nisi. Esse Lorem mollit id id
            nostrud nostrud nostrud veniam sit minim ullamco sint culpa aute.
            Ullamco laboris aliquip cillum excepteur reprehenderit incididunt
            magna eiusmod nostrud sit aute ut excepteur non. Cillum ullamco
            labore qui consequat cupidatat nisi. Esse Lorem mollit id id nostrud
            nostrud nostrud veniam sit minim ullamco sint culpa aute. Ullamco
            laboris aliquip cillum excepteur reprehenderit incididunt magna
            eiusmod nostrud sit aute ut excepteur non.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
