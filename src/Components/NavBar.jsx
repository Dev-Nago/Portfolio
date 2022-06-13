import React, { useState } from "react";
import ScrollIntoView from "react-scroll-into-view";

function NavBar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const NavbarItemStyle =
    "hover:text-orange-400 border-2 border-orange-400 w-full h-12 rounded-lg";

  return (
    <div
      className={`h-24 w-full ${
        isDarkMode ? "dark" : "light"
      } flex flex-row touch-none fixed`}
    >
      <h1 className="font-bold text-2xl m-auto z-40">Plaia Jean-Claude</h1>
      <div className="flex m-auto">
        <i
          className={
            isOpen
              ? "fa-solid fa-x text-2xl m-auto px-4 hover:cursor-pointer"
              : "fa-solid fa-bars text-2xl m-auto px-4 hover:cursor-pointer"
          }
          onClick={toggleIsOpen}
        ></i>
        <i
          className={
            isDarkMode
              ? "fa-solid fa-sun text-2xl m-auto px-4 hover:cursor-pointer"
              : "fa-solid fa-moon text-2xl m-auto px-4 hover:cursor-pointer"
          }
          onClick={toggleIsDarkMode}
        ></i>
      </div>

      <div
        className={
          isOpen
            ? `z-40 h-full w-full fixed ${
                isDarkMode ? "dark" : "light"
              } left-0 flex flex-col ease-in-out duration-500 sm:w-96`
            : "h-screen w-screen fixed {isDarkMode ? 'dark' : 'light'} flex flex-col -left-full ease-in-out duration-500 sm:w-96"
        }
        onClick={toggleIsOpen}
      >
        <div className="m-5 flex flex-col space-y-8">
          <i
            className="fa-solid fa-x text-2xl hover:cursor-pointer"
            onClick={toggleIsOpen}
          ></i>
          <ScrollIntoView selector="#Infos">
            <button className={NavbarItemStyle} onClick={toggleIsOpen}>
              Infos
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#Projects">
            <button className={NavbarItemStyle} onClick={toggleIsOpen}>
              Projets
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#Technos">
            <button className={NavbarItemStyle} onClick={toggleIsOpen}>
              Technologies
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#Socials">
            <button className={NavbarItemStyle} onClick={toggleIsOpen}>
              Réseaux
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#Contact">
            <button className={NavbarItemStyle} onClick={toggleIsOpen}>
              Contact
            </button>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
