import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [total, setTotal] = useState();

  const calculaIMC = (event) => {
    event.preventDefault();
    const data = +peso / (+altura * +altura)
    setTotal(data);
  }

  return (
    <>
      <form>
        <input value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="Peso" type="text" />
        <input value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Altura" type="text" />
        <button onClick={(event) => calculaIMC(event)}>Calcular</button>
        <h1>{total}</h1>
      </form>
    </>
  );
}

export default App;
