import React from "react";

function Infos() {
  return (
    <div className="h-screen text-black" id="Infos">
      <div className="h-screen flex flex-col justify-center">
        <h1 className="text-2xl font-semibold m-5">
          Bienvenue sur mon Portfolio,
        </h1>
        <h2 className="font-mono text-lg">Je me présente Plaia Jean-Claude</h2>
        <span className="text-orange-400 text-2xl font-semibold italic m-5">
          Développeur Web Junior
        </span>
        <p className="m-5">
          Actuellement à la recherche d'un Stage pour parfaire mes compétences
          en React et trouver un travail dans ce domaine.
        </p>
      </div>
    </div>
  );
}

export default Infos;
