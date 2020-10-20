import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Shows from "./components/Shows";

function App() {
  return (
    
      <Router>
        <div className="App">
        
            <div className="container">
              {/* <Route exact path="/shows/:id/seasons" component={Seasons} /> */}
              {/* <Route exact path="/shows/:id/main" component={Main} /> */}
              <Route exact path="/" component={Shows} />
            </div>
      
        </div>
      </Router>
    
    
  );
}

export default App;