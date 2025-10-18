import React, { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input.trim()) return;

        // Add user message to chat
        setMessages((prev) => [...prev, { sender: 'user', text: input }]);

        try {
            // Send query to Gemini API
            const response = await fetch(process.env.REACT_APP_CHATBOT_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: input }),
            });

            const data = await response.json();

            // Add chatbot response to chat
            setMessages((prev) => [...prev, { sender: 'bot', text: data.response }]);
        } catch (error) {
            // Handle errors
            setMessages((prev) => [
                ...prev,
                { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' },
            ]);
        }

        // Clear input field
        setInput('');
    };

    return (
        <div style={styles.chatbot}>
            <div style={styles.chatWindow}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.message,
                            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                            backgroundColor: msg.sender === 'user' ? '#DCF8C6' : '#FFF',
                        }}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={styles.input}
                    placeholder="Ask me about our products..."
                />
                <button onClick={handleSend} style={styles.sendButton}>
                    Send
                </button>
            </div>
        </div>
    );
};

const styles = {
    chatbot: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f9f9f9',
    },
    chatWindow: {
        height: '400px',
        overflowY: 'auto',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    message: {
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '80%',
    },
    inputContainer: {
        display: 'flex',
        borderTop: '1px solid #ccc',
    },
    input: {
        flex: 1,
        padding: '10px',
        border: 'none',
        outline: 'none',
    },
    sendButton: {
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default Chatbot;