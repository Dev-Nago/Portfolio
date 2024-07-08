import React from "react";

function Socials({ isDarkMode }) {
  return (
    <div
      className={`sm:h-screen place-content-center flex flex-col pb-48 ${
        isDarkMode ? "light" : "dark"
      }`}
      id="Socials"
    >
      <h2 className="text-2xl text-orange-400 font-bold mt-24">Réseaux</h2>
      <div className="text-5xl flex flex-col justify-center w-full md:flex-row">
        <a
          href="https://github.com/Dev-Nago"
          target="blank_"
          rel="noreferrer"
          className="m-5 p-10 border-2 border-orange-400 rounded-2xl  hover:scale-110 transition duration-500 hover:first:text-orange-400"
        >
          <i className="fa-brands fa-github  rounded-full"></i>
        </a>
        <a
          href="https://linkedin.com/in/jean-claude-plaia-b2a454179"
          target="blank_"
          rel="noreferrer"
          className="m-5 p-10 border-2 border-orange-400 rounded-2xl hover:scale-110 transition duration-500 hover:even:text-orange-400"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:pro.plaiajc@gmail.com"
          target="blank_"
          rel="noreferrer"
          className="m-5 p-10 border-2 border-orange-400 rounded-2xl hover:scale-110 transition duration-500 hover:last:text-orange-400"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default Socials;
