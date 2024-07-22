import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className=" me-color-sp">RK</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
                <NavLink  to='/about'className={({isActive})=> isActive?'text-indigo-700':'text-grey-950'}>
                    About
                </NavLink>
                <NavLink to='/projects'className={({isActive})=> isActive?'text-indigo-700':'text-grey-950'}>
                    Projects
                </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
