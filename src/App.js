import React from "react";
import sumOfAngleTraingle from "./components/sumOfAngles";
import triangleQuiz from "./components/triangleQuiz";
import triangleArea from "./components/triangleArea";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="App font-sans antialiased">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={sumOfAngleTraingle} />
            <Route path="/quiz" component={triangleQuiz} />
            <Route path="/calcarea" component={triangleArea} />
            {/* <Route path="*" component={Error} /> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

// TODO: Remove firebase from package.json if you are not using it.

export default App;
