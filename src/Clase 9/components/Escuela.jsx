import React from 'react'
import { useState } from 'react'
import OptionInput from './Option Input';


export default function Escuela() {
    const [alumnos, setAlumnos] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
  }

  const disciplinas = [
    { id: 1, value: 'Base de Datos' },
    { id: 2, value: 'Backend' },
    { id: 3, value: 'Frontend' },
    { id: 4, value: 'Devops' }
  ];

  return (
    <div className="container" >
      <h1>Promedio de Alumnos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input" style={{ display: 'inline-flex', paddingTop: '25px'}}>
            <OptionInput text='Seleccione una disciplina' options={disciplinas} setState={setAlumnos} />
          <input />
        </div>
        <input type="submit" value="Guardar" />
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Cantidad de Alumnos</th>
              <th>Promedio de notas de alumnos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Base de Dados</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Frontend</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Backend</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}