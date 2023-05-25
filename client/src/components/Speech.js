import React, { useEffect, useState, useRef } from 'react';

function Speech() {
  const [recognizedText, setRecognizedText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const isBlindRef = useRef(false);

  useEffect(() => {
    const speakQuestion = () => {
      const utterance = new SpeechSynthesisUtterance('');
      window.speechSynthesis.speak(utterance);
      utterance.onend = () => {
        startSpeechRecognition();
      };    
    };

    speakQuestion();
  },[]);

  const startSpeechRecognition = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRecognizedText(transcript);
      };

      recognitionRef.current = recognition;
      recognition.start();
      setIsListening(true);
    } else {
      // Speech recognition not supported, handle accordingly
      alert('Speech recognition is not supported in your browser.');
    }
  };

  const handleSpeechRecognition = () => {
    if (isBlindRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  useEffect(() => {
    if (recognizedText.toLowerCase().includes('yes')) {
      isBlindRef.current = true;
      alert('User is blind. Implement blind user functionality here.');
    } else if (recognizedText.toLowerCase().includes('no')) {
      isBlindRef.current = false;
      alert('User is not blind. Implement non-blind user functionality here.');
    }
  }, [recognizedText]);

  return (
    <div>
      <button onClick={handleSpeechRecognition}>
        {isBlindRef.current ? 'Stop Listening' : 'Start Listening'}
      </button>
      <p>Recognized Text: {recognizedText}</p>
    </div>
  );
}

export default Speech;