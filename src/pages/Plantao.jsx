import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { analytics } from '../firebaseConfig';
import { logEvent } from 'firebase/analytics';
import '../styles/plantao.scss';

function Plantao() {
  const [formData, setFormData] = useState({
    nome: '',
    disciplina: '',
    dia: '',
    hora: '',
    descricao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const plantaoData = {
      nome: formData.nome,
      disciplina: formData.disciplina,
      dia: formData.dia,
      hora: formData.hora,
      descricao: formData.descricao,
      dataHoraCriacao: new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date()),
    };

    try {
      await addDoc(collection(db, 'plantoes'), plantaoData);
      console.log('Plantão salvo com sucesso!');

      // Log no Analytics
      logEvent(analytics, 'plantao_criado', {
        nome: formData.nome,
        disciplina: formData.disciplina,
        dataHoraCriacao: plantaoData.dataHoraCriacao,
      });

      alert('Plantão marcado com sucesso!');
      setFormData({
        nome: '',
        disciplina: '',
        dia: '',
        hora: '',
        descricao: '',
      });
    } catch (error) {
      console.error('Erro ao salvar plantão: ', error);
    }
  };

  return (
    <div className="plantao-container">
      <form className="plantao-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Marcar Plantão</h2>
          <p>Preencha os dados abaixo para marcar um plantão.</p>
        </div>

        <div className="form-row">
          <div className="input-field-plantao">
            <label htmlFor="nome">Nome do Professor:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome"
              required
            />
          </div>

          <div className="input-field-plantao">
            <label htmlFor="disciplina">Disciplina:</label>
            <select
              name="disciplina"
              value={formData.disciplina}
              onChange={handleChange}
              required
            >
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

        <div className="form-row">
          <div className="input-field-plantao">
            <label htmlFor="dia">Dia:</label>
            <input
              type="date"
              id="dia"
              name="dia"
              value={formData.dia}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field-plantao">
            <label htmlFor="hora">Hora:</label>
            <input
              type="time"
              id="hora"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-field-plantao">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Descreva o plantão..."
            rows="4"
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Marcar Plantão
        </button>
      </form>
    </div>
  );
}

export default Plantao;