import { useState } from 'react';
import './App.css';
import UsuarioItem from './components/UsuarioItem';

function App() {
  const usuario = useState(["Usuario 1", "Usuario 2", "Usuario 3"]);
  return (
    <div>
      <header >
        {usuario.map((element)=>{
          return <UsuarioItem name={element} select="disabled" key>{element}</UsuarioItem>
        })}
      </header>
    </div>
  );
}

export default App;
