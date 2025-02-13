import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DayField from "./components/DayField/DayField";
import { analytics } from "./firebaseConfig";
import { logEvent } from "firebase/analytics";

import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

import "./styles/agenda.scss";
import "./styles/global.scss";
import Horarios from './pages/Horarios';
import Formulario from './pages/Formulario';
function App() {
  return (
    <div className="App">
      <Formulario />
    </div>
  );
}

export default App;
