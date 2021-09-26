import React from "react";
// Images
import logo from "../assets/images/logo-platzi-video.png";
import userIcon from "../assets/images/user-icon.png";

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="Logo Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="Logo Platzi Video" />
        <p>Perfil</p>
      </div>
      <ul className="header__menu--list">
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
