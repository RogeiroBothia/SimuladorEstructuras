import { NavLink } from 'react-router-dom'
import burgerMenu from '../../public/icon-menu.svg'
const NavBar = () => {
  return (
    <>
      <ul className=" font-indie font-black text-[18px] hidden sm:flex sm:w-[438px] sm:place-content-around sm:items-center">
        <li className='text-white cursor-pointer hover:border-b-4 hover:border-slate-400 rounded-xl'> <NavLink to='/Home'>Inicio</NavLink></li>
        <li className='text-white cursor-pointer hover:border-b-4 hover:border-slate-400 rounded-xl' ><NavLink to='/array'>Array</NavLink></li>
        <li className='text-white cursor-pointer hover:border-b-4 hover:border-slate-400 rounded-xl'><NavLink to='/lista'>Lista</NavLink></li>
        <li className='text-white cursor-pointer hover:border-b-4 hover:border-slate-400 rounded-xl'><NavLink to='/pila'>Pila</NavLink></li>
        <li className='text-white cursor-pointer hover:border-b-4 hover:border-slate-400 rounded-xl'><NavLink to='/cola'>Cola</NavLink></li>
      </ul>
      <img src={burgerMenu} alt="Menu" className='sm:hidden cursor-pointer h-8 w-12 pr-3' />
    </>
  )
}

export default NavBar


