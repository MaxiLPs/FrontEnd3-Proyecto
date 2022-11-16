import { useState, useEffect } from "react";
import Pedido from "./Pedido";

function Pedidos() {
  const [pedidos, setPedidos] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPedidos(true);
    }, 2000);
  }, []);

  const cancelHandler = () => {
    setPedidos(false);
  };

  return (
    <>
      <h1>Pedido</h1>
      {pedidos ? <Pedido state={pedidos} /> : null}
      <button onClick={cancelHandler}>Cancelar Pedido</button>
    </>
  );
}

export default Pedidos;
