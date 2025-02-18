import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Horarios from './pages/Horarios';
import Formulario from './pages/Formulario';
import Calendar from './pages/Calendar';
import './styles/global.scss';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">

        <Sidebar />      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
