import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const [count, setCount] = useState(0)
  const name = 'Putri';
  const N = 81;
  const jam = 9;
  const style_judul ={
   fontSize:'20px',
    color:'black'
  }

  return (
    <><div>
      <h1 className='judul' style={style_judul}>Kantin {name} </h1>
      <p>{jam < 12 ? 'selamat pagi': 'selamat siang'}</p>
      <p>Saldo awal kartu kantin: Rp {N* 1000}</p>
      <button disabled>bayar</button>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);
export default App
