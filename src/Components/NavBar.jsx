import React, { useState } from "react";
import ScrollIntoView from "react-scroll-into-view";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const NavbarItemStyle =
    "hover:text-orange-400 border-2 border-orange-400 w-full h-12 rounded-lg";

  return (
    <div className="h-24 w-full bg-black text-white flex flex-row touch-none fixed">
      <h1 className="font-bold text-2xl m-auto z-40">Plaia Jean-Claude</h1>
      <i
        className={
          isOpen
            ? "fa-solid fa-x text-2xl m-auto hover:cursor-pointer"
            : "fa-solid fa-bars m-auto text-2xl hover:cursor-pointer"
        }
        onClick={toggle}
      ></i>
      <div
        className={
          isOpen
            ? "z-40 h-full w-full bg-black fixed left-0 flex flex-col ease-in-out duration-500 sm:w-96"
            : "h-screen w-screen bg-black fixed flex flex-col -left-full ease-in-out duration-500 sm:w-96"
        }
        onClick={toggle}
      >
        <div className="m-5 flex flex-col space-y-8">
          <i
            className="fa-solid fa-x text-2xl hover:cursor-pointer"
            onClick={toggle}
          ></i>
          <ScrollIntoView selector="#Infos">
            <button className={NavbarItemStyle} onClick={toggle}>
              Infos
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#Projects">
            <button className={NavbarItemStyle} onClick={toggle}>
              Projets
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#Technos">
            <button className={NavbarItemStyle} onClick={toggle}>
              Technologies
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#Socials">
            <button className={NavbarItemStyle} onClick={toggle}>
              Réseaux
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#Contact">
            <button className={NavbarItemStyle} onClick={toggle}>
              Contact
            </button>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
