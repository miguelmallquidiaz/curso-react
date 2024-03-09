import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import html2canvas from 'html2canvas';

function App() {
  //Devulve un array que tiene 2 valores 
  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')
  const [imagen, setImagen] = useState('')

  const onChangeTexto1 = function (evento) {
    setLinea1(evento.target.value)
  }
  const onChangeTexto2 = function (evento) {
    setLinea2(evento.target.value)
  }
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value)
  }
  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className='App'>
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">Histoy Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select><br />
      
      <input onChange={onChangeTexto1} type="text" placeholder='Texto arriba'/><br />
      <input onChange={onChangeTexto2} type="text" placeholder='Texto abajo'/><br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id='meme'>
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={"/img/"+imagen+".jpg"} />
      </div>
    </div>
  );
}

export default App
