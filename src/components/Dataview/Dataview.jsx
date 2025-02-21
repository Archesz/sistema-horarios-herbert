import React, { useState } from 'react';
import axios from 'axios';
import "./Dataview.scss";

function Dataview() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");

    const sendMessage = async (message) => {
        try {
            const response = await axios.post('URL_DA_API_DO_GEMINI', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer AIzaSyBcwHMkXZjUh2epdDFnYEEcujl9bATDJ1w`,
                },
                data: {
                    prompt: message,
                }
            });
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'user', text: message },
                { sender: 'gemini', text: response.data.answer },
            ]);
        } catch (error) {
            console.error("Erro ao se comunicar com o Gemini:", error);
        }
    };

    const handleSend = () => {
        if (userInput.trim()) {
            sendMessage(userInput);
            setUserInput("");
        }
    };

    return (
        <div className="dataview-container">
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.sender}>
                            <p>{msg.text}</p>
                        </div>
                    ))}
                    <span className='chat-aviso'>Em breve o Betinho AI estará disponível para uso.</span>
                </div>
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Digite sua mensagem..."
                />
                <button onClick={handleSend}>Enviar</button>
            </div>
        </div>
    );
}

export default Dataview;