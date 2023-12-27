import React, { useState } from 'react';
import { perguntas_e_respostas } from './utils/data';
import "./App.css";


function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [resposta, setResposta] = useState(false);

  const getQuestion = () => {

    if(resposta) {
      setResposta(false);
    }

    const answerIndex = Math.floor(Math.random() * perguntas_e_respostas.length);
    const pergunta = perguntas_e_respostas[answerIndex];

    setQuestion(pergunta.pergunta);
    setAnswer(pergunta.resposta);
  }

  
  const mostrarResposta = () => {
    setResposta(!resposta)
  }



  return (
    <div className='container__home'>

      <div className='container__logo'>
        <img src="https://i.ibb.co/hc5JmGM/RDM-QA.png" alt="RDM-QA" width="150px" />
        <h1>RDM 2024</h1>
      </div>

      <div className='container__question'>
        <img onClick={ getQuestion } src="https://i.ibb.co/b2btypp/RDM-PERGUNTAcopiar.png" alt="RDM-PERGUNTAcopiar" width="350px" />
        <p>{ question }</p>
      </div>


      <div className='container__answer'>
        <img onClick={ mostrarResposta } src="https://i.ibb.co/GxWj4N7/RDM-RESPOSTAcopiar.png" alt="RDM-RESPOSTAcopiar" width="350px" />
        {
          resposta ? <p>{answer}</p> : <p> </p>
        }
      </div>

    </div>
  )
}

export default App;