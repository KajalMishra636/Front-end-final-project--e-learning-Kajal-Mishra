import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiX, FiMessageCircle, FiMinimize2 } from 'react-icons/fi';
import '../styles/AIChatbox.css';

const AIChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hi! I'm your AI learning assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { text: 'Ask doubts', icon: '❓' },
    { text: 'Suggest learning path', icon: '🗺️' },
    { text: 'Explain code', icon: '💻' }
  ];

  const mockResponses = {
    'ask doubts': "I'm here to help! What concept or topic would you like me to clarify? Feel free to ask about any programming language, framework, or technical concept.",
    'suggest learning path': "Based on your goals, I'd recommend starting with fundamentals, then moving to intermediate concepts, and finally specializing. What area interests you most - Web Development, AI/ML, or Data Science?",
    'explain code': "I'd be happy to explain code! Please share the code snippet you'd like me to break down, or tell me what programming concept you're struggling with.",
    'default': "That's a great question! Let me help you with that. Could you provide a bit more context so I can give you the most accurate answer?"
  };

  const handleSend = (text = null) => {
    const userMessage = text || inputValue.trim();
    if (!userMessage) return;

    const newUserMessage = {
      role: 'user',
      text: userMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const lowerMessage = userMessage.toLowerCase();
      let response = mockResponses.default;

      if (lowerMessage.includes('doubt') || lowerMessage.includes('question')) {
        response = mockResponses['ask doubts'];
      } else if (lowerMessage.includes('path') || lowerMessage.includes('learn')) {
        response = mockResponses['suggest learning path'];
      } else if (lowerMessage.includes('code') || lowerMessage.includes('explain')) {
        response = mockResponses['explain code'];
      }

      const botMessage = {
        role: 'bot',
        text: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickAction = (action) => {
    handleSend(action.text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          className="chat-toggle"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
        >
          <FiMessageCircle />
          <span className="chat-badge">AI</span>
        </button>
      )}

      {isOpen && (
        <div className={`ai-chatbox ${isMinimized ? 'minimized' : ''}`}>
          <div className="chatbox-header">
            <div className="chatbox-title">
              <div className="ai-avatar-small">🤖</div>
              <div>
                <div className="chatbox-name">AI Learning Assistant</div>
                <div className="chatbox-status">Online</div>
              </div>
            </div>
            <div className="chatbox-actions">
              <button
                className="chatbox-btn"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                <FiMinimize2 />
              </button>
              <button
                className="chatbox-btn"
                onClick={() => setIsOpen(false)}
              >
                <FiX />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="chatbox-messages">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.role}`}
                  >
                    <div className="message-content">
                      {message.text}
                    </div>
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {messages.length === 1 && (
                <div className="quick-actions">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="quick-action-btn"
                      onClick={() => handleQuickAction(action)}
                    >
                      <span>{action.icon}</span>
                      {action.text}
                    </button>
                  ))}
                </div>
              )}

              <div className="chatbox-input-container">
                <input
                  type="text"
                  className="chatbox-input"
                  placeholder="Ask me anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className="chatbox-send"
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                >
                  <FiSend />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AIChatbox;