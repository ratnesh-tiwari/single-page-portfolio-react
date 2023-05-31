import React from "react";
import "./style.scss";

const Aside = () => {
  return (
    <aside>
      <h2 className="visually-hidden">My skills</h2>
      <ul className="icon-list">
        <li>
          <p className="visually-hidden">html</p>
          <ion-icon name="logo-html5"></ion-icon>
        </li>
        <li>
          <p className="visually-hidden">css</p>
          <ion-icon name="logo-css3"></ion-icon>
        </li>
        <li>
          <p className="visually-hidden">sass</p>
          <ion-icon name="logo-sass"></ion-icon>
        </li>
        <li>
          <p className="visually-hidden">javascript</p>
          <ion-icon name="logo-nodejs"></ion-icon>
        </li>
        <li>
          <p className="visually-hidden">react</p>
          <ion-icon name="logo-react"></ion-icon>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
