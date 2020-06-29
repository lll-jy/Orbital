import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import axios from "axios";
import AppContext from "./Contexts/AppContext";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Pages/Register/Register";

import "./Components/Page/Page.css";
import "./Components/Form/Form.css";

function App() {
  useEffect(() => {
    init();
  }, []);

  const [isInitiated, setIsInitiated] = useState(false);
  const [user, setUser] = useState(null);

  const init = async () => {
    const token = localStorage.getItem("token");
    const {data} = await axios.get('/api/user/init?token='+token);
    setUser(data.user);
    setIsInitiated(true);
  };

  return (
    <div>
      {isInitiated && (
	<AppContext.Provider value={{user, setUser}}>
	  <Router>
	    <Navbar />
	    <Switch>
	      <Route path="/" exact>
		<Home />
	      </Route>
	      <Route path="/auth/register">
		{!user ? <Register /> : <Redirect to="/" />}
	      </Route>
	    </Switch>
	  </Router>
	</AppContext.Provider>
      )}
    </div>
  );
}

export default App;
