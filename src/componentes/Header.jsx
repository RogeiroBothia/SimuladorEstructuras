import logo from '../../public/Logo_de_UFPS.svg'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className=' bg-red-600 flex place-content-between items-center'>
      <div className='p-3'>
        <img src={logo} alt="logo" />
      </div>
      <NavBar />
    </header>
  )
}

export default Header