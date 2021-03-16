import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './portfolio.css'
import Footer from '../Footer/footer'
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';


export default function Portfolio(){
  const [port, setPort] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
      axios.get('https://arielsalcedoportfolio.herokuapp.com/portfolio')
      .then(
          res => setPort(res.data)
      )}, [setPort])

      const MoviePalyerModal = (props) => {
  
    
          return (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header style={{ backgroundColor: "#388d7c" }} closeButton>
                <Modal.Title
                  id="contained-modal-title-vcenter"
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  <h1>TreeBaank</h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body style={{backgroundColor:"#a28aae"   }}>
                <ReactPlayer
                  className="container-fluid"
                  url={"https://www.youtube.com/watch?v=ufhfOgrQmwQ"}
                  playing
                  width="100%"
                ></ReactPlayer>
              </Modal.Body>
            </Modal>
          );
        }



  return (
    <div>
    <div  className="headerport" >
    <ion-icon style={{fontSize:"100px"}} name="code-working-outline"></ion-icon>
    <h1>Proyectos</h1>
    </div>
    <div className="mega-card-portfolio">
              { port.length > 0 && port.map((p) =>
                  <div className="individual-card">
                      <h1>{p.name}</h1>
                      <img className="imagen-proyecto" alt="imagen-proyecto" src={p.image}></img>
                      <p>{p.descripcion}</p>
                      <a href={p.link} target="_blank" ><ion-icon style={{fontSize:"60px"}} name="eye-outline"></ion-icon></a>
                  </div>
              )}
          </div>
          <div className="row mt-2">
              <MoviePalyerModal
                show={isOpen}
                onHide={() => {
                  setIsOpen(false);
                }}
              ></MoviePalyerModal>
              <div
                className="boton-play"
              >
                    <h1   style={{ fontSize: 35, color: "white",}} >Ver Video</h1>
                <div className="carousel-center">
                  <PlayCircleOutlineIcon
                    style={{ fontSize: 45, color: "white", cursor: "pointer" }}
                    onClick={() => setIsOpen(true)}
                    name="play-outline"
                  ></PlayCircleOutlineIcon>
                 
                </div>
              </div>
            </div>
          <Footer/>
    </div>
  )
}
