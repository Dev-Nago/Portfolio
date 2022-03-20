import React from "react";

function Socials() {
  return (
    <div
      className="bg-black sm:h-screen place-content-center flex flex-col"
      id="Socials"
    >
      <h2 className="text-2xl text-orange-400 mt-32 font-bold">Réseaux</h2>
      <div className="text-5xl flex flex-col justify-center w-full md:flex-row">
        <a
          href="https://github.com/Dev-Nago"
          target="blank_"
          rel="noreferrer"
          className="m-5 p-10 border-2 border-orange-400 rounded-2xl"
        >
          <i className="fa-brands fa-github text-white rounded-full hover:text-orange-400"></i>
        </a>
        <a
          href="https://linkedin.com/in/jean-claude-plaia-b2a454179"
          target="blank_"
          rel="noreferrer"
          className="m-5 p-10 border-2 border-orange-400 rounded-2xl"
        >
          <i className="fa-brands fa-linkedin text-white hover:text-orange-400"></i>
        </a>
        <a
          href="mailto:pro.plaiajc@gmail.com"
          target="blank_"
          rel="noreferrer"
          className="m-5 p-10 border-2 border-orange-400 rounded-2xl"
        >
          <i className="fa-solid fa-envelope text-white hover:text-orange-400"></i>
        </a>
      </div>
    </div>
  );
}

export default Socials;
