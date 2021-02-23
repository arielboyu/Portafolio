import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './footer.css'
import { Link } from "react-router-dom";

export default function Footer(){
  const [info, setInfo] = useState({});
  useEffect(() => {
      axios.get('https://arielsalcedoportfolio.herokuapp.com/about')
      .then(
          res => setInfo(res.data[0])
      )}, [setInfo])
  return (
    <footer className="footer">
    <img className="foto-perfil-peq"  src={info.photo}></img>
    <Link to="/" >
        <h1 className="name-footer"   style={{fontSize:"20px",color:'white',marginLeft:'3%'}} >Inicio</h1>
      </Link>
   <div className="contacto" >
   <a href="mailto:correo@electronico\_enlazado.com"> edgararielsalcedo@gmail.com </a>
   <img className="mail" style={{width:"60px"}} src={"https://media3.giphy.com/media/KxlbRn0HuTW7gZID83/giphy.webp?cid=ecf05e47pq6ujznfmtxyx9q27ak2uygmnnj2ksc7ib52g8el&rid=giphy.webp"}></img>
   </div>
   <div className="name-profesion">
   <div >
   <img   className="div-foto-peq2"  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNaM3fklKykNdvYDZS7boV413K1DkojtQkw&usqp=CAU"}></img>
   <h1  style={{fontSize:"20px"}} className="profesion" >{info.profession}  </h1>
   </div>
   </div>
   </footer>
  )
}
