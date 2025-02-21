import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Horarios from './pages/Horarios';
import Formulario from './pages/Formulario';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Plantao from './pages/Plantao';
import Alunos from "./pages/Alunos";

import './styles/global.scss';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  return (
    <Router>
      <div className="App">
        <Sidebar onCollapse={setIsSidebarCollapsed} />

        <div
          className="main-content"
          style={{
            marginLeft: isSidebarCollapsed ? '60px' : '260px', // Ajuste conforme a largura do Sidebar
            transition: 'margin-left 0.3s ease-in-out', // Adiciona transição suave
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/plantao" element={<Plantao />} />
            <Route path="/alunos" element={<Alunos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;