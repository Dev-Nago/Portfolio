import React from "react";

function Infos() {
  return (
    <div className="h-screen text-black" id="Infos">
      <div className="h-full flex flex-col justify-center">
        <h1 className="text-2xl font-semibold m-5">
          Bienvenue sur mon Portfolio,
        </h1>
        <h2 className="font-mono text-lg">
          Je me présente Plaia Jean-Claude,{" "}
          <span className="text-orange-400 text-2xl font-bold italic">
            Développeur Web Junior
          </span>{" "}
          en apprentissage du Framework React
          <i className="fa-brands fa-react text-lg"></i>
        </h2>
        <p>
          actuellement en recherche de Stage pour améliorer mes compétences et
          démarrer dans ce domaine.
        </p>
      </div>
    </div>
  );
}

export default Infos;
