import react from 'react';
import Index from "./Pages/Index";
import FourOfour from "./Pages/404"
import Dashboard from './Pages/Dashboard';
import { Routes, Route } from 'react-router-dom';

import Landing from "./views/examples/Landing"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />

        
        
      
        
        <Route path="*" element={<FourOfour/>} />
        
      </Routes>
      
    </div>
  );
}

export default App;
