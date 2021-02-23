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
