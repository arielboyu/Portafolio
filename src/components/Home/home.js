import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './home.css'
import Footer from '../Footer/footer'
import { Link } from "react-router-dom";
import Loading from '../Loading/loading'
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';

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
      <div className="iconheader"  >
    <PersonOutlineSharpIcon  style={{fontSize:"80px"}}  name="person-outline"></PersonOutlineSharpIcon>
    </div>
      <h1 className="nameH" >{info.name}</h1>
      <h1 className="job" >{info.profession} </h1>
      <DeveloperModeIcon className="nameH" style={{fontSize:"80px"}} name="person-outline"></DeveloperModeIcon>
    </div>
    <div className="bts" >
    <div className="bt-proyectos" >
    <Link to="/proyectos" >
      <a className="href1" ><LocalMallRoundedIcon  style={{fontSize:"120px",color:'black'}}  name="bag-handle-outline"></LocalMallRoundedIcon></a>
      </Link>
    </div>
    <div className="bt-about" >
    <Link to="/skills" >
      <a className="href2" ><BuildOutlinedIcon style={{fontSize:"120px",color:'white'}}  name="construct-outline"></BuildOutlinedIcon></a>
      </Link>
    </div>
    </div>
    <div className="foto-cont" >
    <div className="div-foto">
        <img className="foto-perfil"  src={info.photo}></img>
    </div>
    </div>
    <div className="enlaces" >
    <a  href="javascript:window.open('https://github.com/arielboyu','',);void 0"><button type="button" class="btn btn-success">Github <GitHubIcon name="logo-github"></GitHubIcon></button></a><br/>
    <div className="enlaces2" >
    <a   href="javascript:window.open('https://www.linkedin.com/in/ariel-salcedo-b423b61ba/','',);void 0"><button type="button"  class="btn btn-primary">Linkedin <LinkedInIcon name="logo-linkedin"></LinkedInIcon></button></a><br/>
    </div>
    </div>
    <div className="cardInfo" >
    <div className="linea1"></div>
     <p className="parrafo" > <EmojiPeopleIcon name="accessibility-outline"></EmojiPeopleIcon> Bienvenidos a mi portafolio de presentación,mi nombre es Ariel Salcedo, soy aficionado a la tecnología ,
         con muchas ganas de aceptar desafios y aprender
              siempre nuevas herramientas de trabajo   <LaptopChromebookIcon name="rocket-outline"></LaptopChromebookIcon>  </p>

     </div>
      <Footer/>
    </div>
  )
 }
}
