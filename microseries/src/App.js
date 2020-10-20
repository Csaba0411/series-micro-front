import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Shows from "./components/Shows";
import { DetailProvider } from './contexts/DetailProvider';
import { IdProvider} from './contexts/IdProviderContext';
import Detail from "./pages/Detail";


function App() {
  return (
    <IdProvider>
      <DetailProvider>
      <Router>
        <div className="App">
        
            <div className="container">
              <Route exact path="/shows/:id" component={Detail} />
              <Route exact path="/" component={Shows} />
            </div>
      
        </div>
      </Router>
      </DetailProvider>
      </IdProvider>
    
    
  );
}

export default App;