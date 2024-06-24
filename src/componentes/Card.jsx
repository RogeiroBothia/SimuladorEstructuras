import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Card = ({ titulo, img, descripcion, ruta }) => {
  return (
    <div className='grid grid-cols-1 bg-white rounded-xl hover:scale-105 duration-300'>
      <img src={img} alt={titulo} className='rounded-xl hover:opacity-40' />
      <div className='p-4 font-indie font-semibold'>
        <h2><b>{titulo}</b></h2>
        <p>{descripcion}</p>

      </div>
      <NavLink to={ruta}>
        <button className="bg-red-600 text-white font-bold px-4 mx-4 rounded-xl my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8">Simular</button></NavLink>
    </div>
  )
}

Card.propTypes = {
  titulo: PropTypes.string,
  img: PropTypes.string,
  descripcion: PropTypes.string,
  ruta: PropTypes.string
}

export default Card