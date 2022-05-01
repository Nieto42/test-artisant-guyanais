import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { Itemnav } from "./item/Itemnav";

export default function Navbar() {
  // create an state for the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // create an event handler for the menu
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className="container-nav">
        <div className="logo">
          <Image
            src={"/Logo artisan guyanais.svg"}
            alt="Logo RPS agriculture"
            loading="lazy"
            width={62}
            height={62}
          />
          <p>Artisans Guyanais</p>
        </div>
        <Image
          src={"/bars.svg"}
          onClick={handleMenu}
          className="menu_bars"
          alt="Menu Bars"
          width={42}
          height={42}
        />

        <ul className="menu">
          {Itemnav.map((item, links) => {
            return (
              <li key={links} className="menuItem">
                <Link href={item.ref}>{item.menu}</Link>
              </li>
            );
          })}
        </ul>

        <ul
          className="mobile-menu"
          style={menuOpen ? { display: "flex" } : { display: "none" }}
        >
          <div className="header-menu">
            <div className="logo">
              <Image
                src={"/Logo artisan guyanais.svg"}
                alt="Logo Artisant Guyanais"
                loading="lazy"
                width={48}
                height={48}
              />
              <p>Artisant Guyanais</p>
            </div>
            <Image
              src={"/close.svg"}
              className="menu_close"
              onClick={handleMenu}
              alt="Menu Bars"
              width={42}
              height={42}
            />
          </div>
          {Itemnav.map((item, links) => {
            return (
              <li key={links} className="menuItem">
                <Link href={item.ref}>{item.menu}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
