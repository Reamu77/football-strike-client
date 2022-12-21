import { useState } from "react";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SportsGymnasticsRoundedIcon from "@mui/icons-material/SportsGymnasticsRounded";
import SportsHandballRoundedIcon from "@mui/icons-material/SportsHandballRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";

import Search from "./Search";

const Header = () => {
  // Navbar toogle
  const [navbar, setNavbar] = useState("none"); // state
  const navbarToggle = () => {
    setNavbar(navbar === "none" ? "block" : "none"); // toggle function (setter)
  };

  return (
    <header>
      <div className="header_left">
        <button onClick={() => navbarToggle()}>
          <MenuIcon className="header_menu-icon" />
        </button>
        <Link href="/">
          <h3 className="header_title">FOOTBALL STRIKE</h3>
        </Link>
      </div>
      <Search />

      <nav className="navbar" style={{ display: navbar }}>
        <ul className="navbar_list">
          <li className="navbar_link">
            <Link href={"/"}>
              <span>
                <HomeRoundedIcon />
                RETOURNER A L'ACCUEIL
              </span>
            </Link>
          </li>
          <li className="navbar_link">
            <Link href={"/category/jersey"}>
              <span>
                <SportsHandballRoundedIcon />
                NOS MAILLOTS
              </span>
            </Link>
          </li>
          <li className="navbar_link">
            <Link href={"/category/tracksuits"}>
              <span>
                <SportsGymnasticsRoundedIcon />
                NOS SURVETEMENTS
              </span>
            </Link>
          </li>
          <li className="navbar_link">
            <Link href={"/mystery"}>
              <span>
                <QuestionMarkRoundedIcon />
                COLIS MYSTERE
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
