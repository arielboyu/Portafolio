import React, { useState, useEffect } from "react";
import axios from "axios";
import "./about.css";
import Footer from "../Footer/footer";

export default function About() {
  const [info, setInfo] = useState({});
  useEffect(() => {
    axios
      .get("https://arielsalcedoportfolio.herokuapp.com/about")
      .then((res) => setInfo(res.data[0]));
  }, [setInfo]);
  return (
    <div>
      <div className="About">
        <div className="descripcion">
          <h2 className="herr">Herramientas de Trabajo</h2>
          <ion-icon style={{ fontSize: "35px" }} name="logo-css3"></ion-icon>
          <ion-icon
            style={{ fontSize: "35px" }}
            name="logo-javascript"
          ></ion-icon>
          <ion-icon style={{ fontSize: "35px" }} name="logo-npm"></ion-icon>
          <ion-icon style={{ fontSize: "35px" }} name="logo-react"></ion-icon>
          <ion-icon style={{ fontSize: "35px" }} name="logo-html5"></ion-icon>
          <ion-icon style={{ fontSize: "35px" }} name="logo-nodejs"></ion-icon>
          <ion-icon style={{ fontSize: "35px" }} name="logo-github"></ion-icon>
          <p>{info.about_me}</p>
          <img
            className="gif"
            src={
              "https://static.wixstatic.com/media/669128_ec1c7a78e9694aec8a07c2e48b292ae1~mv2.gif"
            }
          ></img>
          <ul className="skills">
            {info.skills &&
              info.skills.map((s) => <p className="skill">{s} </p>)}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
