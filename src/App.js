import './App.css';
import About from './components/About/about'
import Portfolio from './components/Portfolio/portfolio'
import Loading from './components/Loading/loading'
import React,{useState,useEffect} from 'react'
import axios from 'axios'


function App() {
  useEffect(() => {
      axios.get('https://arielsalcedoportfolio.herokuapp.com/about')
      .then(
        res =>
        setTimeout(() => setLoading(true))
      )},100000)




  const [loading,setLoading] = useState(false)

  if(!loading) {
    return(
      <div >
      <Loading/>
      </div>
    )
  }
 else {
  return (
    <div className="App">
    <About/>
    <Portfolio/>
    </div>
  );
 }
}

export default App;
