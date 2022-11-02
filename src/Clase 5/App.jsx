import './App.css'
import { productos } from './components/productos.js'

// console.log(productos);

function App() {
  return (
    <div>
      <h1>Produtos</h1>
        {productos.map((producto, index) => {   
          return(
            <div className='card' key={index}>
              <h2>{producto.nombre}</h2>
              <img src={producto.imagen} alt={producto.nombre} />
              <p>{producto.precio}</p>
            </div>
          )
        })}
    </div>
  );  
}

export default App
