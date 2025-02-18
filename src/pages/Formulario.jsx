import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DayField from "../components/DayField/DayField";
import { analytics } from "../firebaseConfig";
import { logEvent } from "firebase/analytics";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

import "../styles/agenda.scss";
import "../styles/global.scss";
function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    disciplina: "",
    disponibilidade: {
      "Segunda": {},
      "Terça": {},
      "Quarta": {},
      "Quinta": {},
      "Sexta": {},
      "Sábado": {}
    }
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const horarios = [
    "08:00 - 09:30", "09:30 - 10:45", "10:45 - 12:00",
    "14:00 - 15:15", "15:30 - 16:45", "16:45 - 18:00",
    "19:00 - 20:05", "20:20 - 21:25", "21:25 - 22:30"
  ];

  const horariosSabado = [
    "08:00 - 09:50", "08:50 - 09:40", "09:40 - 10:30",
    "10:50 - 11:40", "11:40 - 12:30"
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheck = (day, horario, checked) => {
    setFormData((prev) => ({
      ...prev,
      disponibilidade: {
        ...prev.disponibilidade,
        [day]: {
          ...prev.disponibilidade[day],
          [horario]: checked
        }
      }
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const disponibilidadeCompleta = {};
  
    Object.keys(formData.disponibilidade).forEach((dia) => {
      disponibilidadeCompleta[dia] = {};
  
      const listaHorarios = dia === "Sábado" ? horariosSabado : horarios;
  
      listaHorarios.forEach((horario) => {
        disponibilidadeCompleta[dia][horario] =
          formData.disponibilidade[dia][horario] || false;
      });
    });
  
    const jsonOutput = {
      nome: formData.nome,
      disciplina: formData.disciplina,
      disponibilidade: disponibilidadeCompleta,
      data_hora: new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Para usar o formato de 24 horas
      }).format(new Date()),
    };
  
    try {
      await addDoc(collection(db, "agendamentos"), jsonOutput);
      console.log("Horário salvo com sucesso!");
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 2000);
  
      // Adicionando evento no Analytics
      logEvent(analytics, "envio_formulario_agendamento", {
        nome: formData.nome,
        disciplina: formData.disciplina,
        data_hora: jsonOutput.data_hora, // Inclui a data/hora no evento do Analytics
      });
  
      alert("Horário Enviado com sucesso!");
      window.location.reload(); // Recarrega a página
  
    } catch (error) {
      console.error("Erro ao salvar horário: ", error);
    }
  };
      
  return (
    <div className="container">
      <form className="agenda-field" onSubmit={handleSubmit}>

        <div className="agenda-header">
          <span className="header-title">Adicionar Horário</span>
          <span className="header-sub">Insira suas informações e disponibilidade abaixo.</span>
        </div>

        <div className="row">
          <div className="input-field">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required placeholder="Nome" onChange={handleChange} autoComplete='off'/>
          </div>

          <div className="input-field">
            <label htmlFor="disciplina">Disciplina:</label>
            <select name="disciplina" onChange={handleChange}>
              <option value="">Selecione a Disciplina</option>
              <option value="matematica">Matemática</option>
              <option value="fisica">Física</option>
              <option value="quimica">Química</option>
              <option value="biologia">Biologia</option>
              <option value="geografia">Geografia</option>
              <option value="historia">História</option>
              <option value="sociologia">Sociologia</option>
              <option value="filosofia">Filosofia</option>
              <option value="gramatica">Gramática</option>
              <option value="redacao">Redação</option>
              <option value="literatura">Literatura</option>
            </select>
          </div>
        </div>

        <div className="disponibilidade-field">
          <span className="disponibilidade-name">Disponibilidade</span>

          <DayField day="Segunda" onCheck={handleCheck} />
          <DayField day="Terça" onCheck={handleCheck} />
          <DayField day="Quarta" onCheck={handleCheck} />
          <DayField day="Quinta" onCheck={handleCheck} />
          <DayField day="Sexta" onCheck={handleCheck} />
          <DayField day="Sábado" onCheck={handleCheck} />

          <button type="submit" className="btn-submit">Adicionar</button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
