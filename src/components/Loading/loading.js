import React from 'react'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './loading.css'

export default function Loading(){
    return (
      <div className="divPadre">
      <div className="divHijo" >
      <Spinner color='danger' className='spinnerReactstrap'  />
      </div>
      </div>
    )
}



// <img src="https://media3.giphy.com/media/9MImS9neQuoRa3D19h/200w.webp?cid=ecf05e47vsrxzwwr2om4y8gpn257jewdigebspnlvcxbcwur&rid=200w.webp" ></img>
