import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Shows from "./components/Shows";
import { DetailProvider } from './contexts/DetailProvider';
import { IdProvider} from './contexts/IdProviderContext';
import Detail from "./pages/Detail";
import Episodes from "./pages/Episodes";
import Staff from "./pages/Staff";


function App() {
  return (
    <IdProvider>
      <DetailProvider>
      <Router>
        <div className="App">
        
            <div className="container">
            <Route exact path="/shows/:id/staff" component={Staff} />
              <Route exact path="/shows/:id/episodes" component={Episodes} />
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