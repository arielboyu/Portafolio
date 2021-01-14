import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './portfolio.css'

export default function Portfolio(){
  const [port, setPort] = useState({});
  useEffect(() => {
      axios.get('https://arielsalcedoportfolio.herokuapp.com/portfolio')
      .then(
          res => setPort(res.data)
      )}, [setPort])
  return (
    <div >
    <div className="mega-card-portfolio">
              { port.length > 0 && port.map((p) =>
                  <div className="individual-card">
                      <h1>{p.name}</h1>
                      <img className="imagen-proyecto" alt="imagen-proyecto" src={p.image}></img>
                      <p>{p.descripcion}</p>
                      <a href={p.link} target="_blank">Ver Proyecto</a>
                  </div>
              )}
          </div>
    </div>
  )
}
