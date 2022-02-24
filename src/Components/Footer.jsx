import React from "react";

function Footer() {
  return (
    <div className="bg-black">
      <div className="text-2xl flex flex-row justify-center">
        <a href="/">
          <i className="fa-solid fa-arrow-up flex m-5 my-16 text-white hover:text-orange-400"></i>
        </a>
        <a href="https://github.com/Dev-Nago" target="blank_" rel="noreferrer">
          <i className="fa-brands fa-github flex m-5 my-16 text-white hover:text-orange-400"></i>
        </a>
        <a
          href="https://linkedin.com/in/jean-claude-plaia-b2a454179"
          target="blank_"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin flex m-5 my-16 text-white hover:text-orange-400"></i>
        </a>
        <a href="mailto:pro.plaiajc@gmail.com" target="blank_" rel="noreferrer">
          <i className="fa-solid fa-envelope flex m-5 my-16 text-white hover:text-orange-400"></i>
        </a>
      </div>
      <p className="text-xl text-white">
        ©2022 Plaia Jean-Claude, tous droits réservés.
      </p>
    </div>
  );
}

export default Footer;
