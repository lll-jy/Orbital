import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Form from "./Components/Form";

function App() {
  const [isInitiated, setIsInitiated] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    setIsInitiated(true);
  }

  return (
    <div className="App">
      {isInitiated && (
	<Router>
	  <Navbar />
	  <Switch>
	    <Route path="/" exact>
	      <Form />
	    </Route>
	  </Switch>
	</Router>
      )}
    </div>
  );
}

export default App;
