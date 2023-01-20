import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [texts, setTexts] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    const newItem = {
      text: text
    }

     setTexts([...texts, newItem])

     
  }

  console.log(texts)
   return (
    <div className="App">
     <form>
        <label>Tarefa Finalizada</label>
        <input onChange={(event) => handleChange(event.target.value)} />
        <button onClick={handleSubmit}>Adicionar</button>
     </form>
    </div>
  );
}

export default App;
