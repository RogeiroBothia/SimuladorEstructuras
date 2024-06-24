import PropTypes from 'prop-types'

const Button = ({ nombre, funcion }) => {
  return (
    <button
      className="bg-red-600 text-white font-bold px-4 mx-4 rounded-xl my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8 disabled:bg-gray-600"
      onClick={funcion}>
      {nombre}
    </button>
  )
}

Button.propTypes = {
  funcion: PropTypes.func.isRequired,
  nombre: PropTypes.string,
}

export default Button