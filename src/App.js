import React from "react";
import sumOfAngleTraingle from "./components/sumOfAngles";
import triangleArea from "./components/triangleArea";
import Navbar from "./components/navbar";
import Testquiz from "./components/quiz_test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="App font-sans antialiased">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={sumOfAngleTraingle} />
            <Route path="/quiz" component={Testquiz} />
            <Route path="/calcarea" component={triangleArea} />
            {/* <Route path="*" component={Error} /> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
