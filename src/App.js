import "./App.css";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Loading from "./components/Loading/loading";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  useEffect(() => {
    axios
      .get("https://arielsalcedoportfolio.herokuapp.com/about")
      .then((res) => setTimeout(() => setLoading(true)));
  }, 200000);

  const [loading, setLoading] = useState(false);

  if (!loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <div>
              <Route exact path="/proyectos" render={() => <Portfolio />} />
              <Route exact path="/skills" render={() => <About />} />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
