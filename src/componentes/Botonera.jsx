import PropTypes from 'prop-types'
import Button from './Button'

const Botonera = ({ addFruta, deleteFruta, addAnimal }) => {
  return (
    <>
      <Button funcion={addFruta} nombre={"Agregar Fruta"} />
      <Button funcion={addAnimal} nombre={"Agregar Animal"} />
      <Button funcion={deleteFruta} nombre={"Eliminar Elemento"} />
    </>
  )
}

Botonera.propTypes = {
  addFruta: PropTypes.func.isRequired,
  deleteFruta: PropTypes.func.isRequired,
  addAnimal: PropTypes.func.isRequired,
}

export default Botonera