import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './home.css'
import Footer from '../Footer/footer'
import { Link } from "react-router-dom";
import Loading from '../Loading/loading'

export default function Home(){
  const [loading,setLoading] = useState(false)
  const [info, setInfo] = useState({});
  useEffect(() => {
      axios.get('https://arielsalcedoportfolio.herokuapp.com/about')
      .then(
          res =>
            setTimeout(() =>   setInfo(res.data[0]),setLoading(true))
      )},200000[setInfo])


      if(!loading) {
        return(
          <div >
          <Loading/>
          </div>
        )
      }
     else {
  return (
    <div>
    <div className="header">
    <ion-icon className="nameH" style={{fontSize:"100px"}} name="person-outline"></ion-icon>
      <h1 className="nameH" >{info.name}</h1>
      <h1 className="job" >{info.profession} </h1>
      <ion-icon className="job" style={{fontSize:"100px"}} name="code-slash-outline"></ion-icon>
    </div>
    <div className="foto-cont" >
    <div className="div-foto">
        <img className="foto-perfil"  src={info.photo}></img>
    </div>
    </div>
    <div className="bts" >
    <div className="bt-proyectos" >
    <Link to="/proyectos" >
      <a className="href1" ><ion-icon  style={{fontSize:"120px",color:'black'}}  name="bag-handle-outline"></ion-icon>Proyectos</a>
      </Link>
    </div>
    <div className="bt-about" >
    <Link to="/skills" >
      <a className="href2" ><ion-icon style={{fontSize:"120px",color:'white'}}  name="construct-outline"></ion-icon>Skills</a>
      </Link>
    </div>
    </div>
    <div className="enlaces" >
    <a  href="javascript:window.open('https://github.com/arielboyu','',);void 0"><button type="button" class="btn btn-success">Github <ion-icon name="logo-github"></ion-icon></button></a><br/>
    <div className="enlaces2" >
    <a   href="javascript:window.open('https://www.linkedin.com/in/ariel-salcedo-b423b61ba/','',);void 0"><button type="button"  class="btn btn-primary">Linkedin <ion-icon name="logo-linkedin"></ion-icon></button></a><br/>
    </div>
    </div>
    <div className="cardInfo" >
    <div className="linea1"></div>
     <p className="parrafo" > <ion-icon name="accessibility-outline"></ion-icon> Bienvenidos a mi portafolio de presentación,mi nombre es Ariel Salcedo, soy aficionado a la tecnología ,
         con muchas ganas de aceptar desafios y aprender
              siempre nuevas herramientas de trabajo   <ion-icon name="rocket-outline"></ion-icon>  </p>

     </div>
      <Footer/>
    </div>
  )
 }
}
