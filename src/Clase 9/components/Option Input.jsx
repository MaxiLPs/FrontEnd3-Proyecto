import React from 'react'

function OptionInput({
  text = 'Seleccione una opción',
  options = [],
  setState = () => {}
}) {
  return (
    <select onChange={ (e)=>{ setState(e.target.value) } }>
      <option hidden>
        {text}
      </option>
      {
      options.map((option) => (
        <option
          key={option.id}
          value={option.value}
        >
          {option.value}
        </option>)
        )}
    </select>
  )
}

export default OptionInput