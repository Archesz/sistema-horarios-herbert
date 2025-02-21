import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'; // Importando o ReactMarkdown
import { GoogleGenerativeAI } from '@google/generative-ai';
import instructions from "../../data/context.json"
import "./Dataview.scss";

function Dataview() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);

    // Inicializa o cliente do Gemini
    const genAI = new GoogleGenerativeAI("AIzaSyBcwHMkXZjUh2epdDFnYEEcujl9bATDJ1w"); // Substitua pela sua chave de API

    const handleSend = async () => {
        if (userInput.trim()) {
            setLoading(true);
            try {
                const model = genAI.getGenerativeModel({ 
                    model: "gemini-1.5-flash-001",
                    systemInstruction: {
                        parts: instructions["instructions"],
                    } 
                });
                const result = await model.generateContent(userInput);
                const response = await result.response;
                const text = response.text();

                // Adiciona a resposta ao estado de mensagens
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'user', text: userInput },
                    { sender: 'gemini', text: text },
                ]);

                setUserInput(""); // Limpa o campo de entrada
            } catch (error) {
                console.error("Erro ao se comunicar com o Gemini:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="dataview-container">
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            {/* Usando ReactMarkdown para renderizar o texto */}
                            <ReactMarkdown>
                                {msg.text}
                            </ReactMarkdown>
                        </div>
                    ))}
                    {loading && (
                        <div className="loading-indicator">
                            <div className="spinner"></div>
                            <span>Gerando resposta...</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()} // Envia ao pressionar Enter
                />
                <button onClick={handleSend} disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>
            </div>
        </div>
    );
}

export default Dataview;