import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './about.css'

export default function About(){
  const [info, setInfo] = useState({});
  useEffect(() => {
      axios.get('https://arielsalcedoportfolio.herokuapp.com/about')
      .then(
          res => setInfo(res.data[0])
      )}, [setInfo])
  return (
    <div>
    <div className="header">
    <ion-icon style={{fontSize:"100px"}} name="person-outline"></ion-icon>
      <h1 className="name" >{info.name}</h1>
      <h1 className="profesion" >{info.profession}  </h1>
      <ion-icon style={{fontSize:"100px"}} name="code-slash-outline"></ion-icon>
    </div>
    <div className="div-foto">
        <img className="foto-perfil"  src={info.photo}></img>
    </div>
    <div className="About">
        <div className="descripcion">
            <h2 className="herr" >Herramientas de Trabajo</h2>
            <ion-icon style={{fontSize:"35px"}} name="logo-css3"></ion-icon>
            <ion-icon style={{fontSize:"35px"}} name="logo-javascript"></ion-icon>
            <ion-icon style={{fontSize:"35px"}}  name="logo-npm"></ion-icon>
            <ion-icon style={{fontSize:"35px"}}  name="logo-react"></ion-icon>
            <ion-icon style={{fontSize:"35px"}} name="logo-html5"></ion-icon>
            <ion-icon style={{fontSize:"35px"}} name="logo-nodejs"></ion-icon>
            <ion-icon style={{fontSize:"35px"}} name="logo-github"></ion-icon>
            <p>{info.about_me}</p>
            <img className="gif"  src={"https://static.wixstatic.com/media/669128_ec1c7a78e9694aec8a07c2e48b292ae1~mv2.gif"}></img>
            <ul className="skills">
                { info.skills  && info.skills.map((s) =>
                    <p className="skill">{s} </p>
                )}
            </ul>
        </div>
     </div>
     <div className="enlaces" >
       <a href="javascript:window.open('https://github.com/arielboyu','',);void 0"><button type="button" class="btn btn-success">Github <ion-icon name="logo-github"></ion-icon></button></a><br/>
       <div class="col-sm-1 col-xs-1 col-md-1 col-lg-1"></div>
       <a href="javascript:window.open('https://www.linkedin.com/in/ariel-salcedo-b423b61ba/','',);void 0"><button type="button"  class="btn btn-primary">Linkedin <ion-icon name="logo-github"></ion-icon></button></a><br/>
     </div>
     <div className="cardInfo" >
     <p> <ion-icon name="accessibility-outline"></ion-icon> Bienvenidos a mi portafolio de presentación,mi nombre es Ariel , soy aficionado a la tecnología ,
         con muchas ganas de aceptar desafios y aprender
              siempre nuevas herramientas de trabajo   <ion-icon name="rocket-outline"></ion-icon>  </p>
     </div>
     <footer className="footer">
    <div className="contacto" >
    Contacto :
    <a href="mailto:correo@electronico\_enlazado.com"> edgararielsalcedo@gmail.com </a>
    <img className="mail" style={{width:"60px"}} src={"https://media3.giphy.com/media/KxlbRn0HuTW7gZID83/giphy.webp?cid=ecf05e47pq6ujznfmtxyx9q27ak2uygmnnj2ksc7ib52g8el&rid=giphy.webp"}></img>

    </div>
    </footer>
    </div>
  )
}
