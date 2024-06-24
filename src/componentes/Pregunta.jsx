import { useState } from "react";
import Button from "./Button";
const Pregunta = ({ pregunta, rv, rf, n }) => {

  const [calificacion1, setCalificacion1] = useState('')
  const [calificacion2, setCalificacion2] = useState('')
  const calificar = () => {
    if (rv) {
      setCalificacion1('✅');
      setCalificacion2('⭕');
    } else if (rf) {
      setCalificacion1('⭕');
      setCalificacion2('✅');
    }
  }

  return (
    <div>
      <h3>{pregunta}</h3>
      <div>
        <label className="inline-flex items-center mr-6">
          <input type="radio" className="form-radio" name={`quiz${n}`} />
          <span className="ml-2">Verdadero {calificacion1}</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio" name={`quiz${n}`} />
          <span className="ml-2">Falso {calificacion2}</span>
        </label>
        <Button nombre='Calificar' funcion={calificar} />
      </div>
    </div>
  )
}


export default Pregunta