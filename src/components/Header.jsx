import { IoMdCart } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-green-600  hidden md:flex  text-white flex md:flex-row justify-evenly flex-col p-4">
        <h2 className="flex gap-2 items-center">
          <FaPhone/>
        + 1235 2355 98
        </h2>
        <h2 className="flex gap-2 items-center">
        <FaLocationArrow />
        youremail@email.com
        </h2>
        <h2>
        3-5 Business days delivery & Free Returns
        </h2>
      </div>

      <nav className="flex items-center  md:mb-0 justify-between p-4 bg-green-600">
      <Link to="/" className="text-white text-2xl font-bold">
        Vegafood
      </Link>
      <div
        className="flex flex-col justify-between w-6 h-6 cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-full h-1 bg-blue-300"></span>
        <span className="block w-full h-1 bg-white"></span>
        <span className="block w-full h-1 bg-white"></span>
      </div>
      
      <ul
        className={`md:flex  z-20 md:items-center md:space-x-8 absolute md:static bg-green-600 left-0 w-full md:w-auto transition-transform duration-300 ease-in-out ${
          menuOpen ? "top-2" : "-top-full"
        }`}
      >
        <div className="flex justify-between items-center">
        <li className="p-4 text-white text-2xl md:hidden ">
          <NavLink to='/'>Vegafood</NavLink>
        </li>
        <h1 className="pr-4  md:hidden block text-2xl text-teal-50 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          
        >x</h1>
        </div>
        <div className="absolute right-0 md:flex md:right-10 bg-green-800 md:bg-green-600 z-20 md:pl-0 ">

        <li className="px-12 p-4 md:border-b-0 border-b-2 text-white hover:bg-green-500">
          <NavLink to='/' onClick={()=> setMenuOpen(!menuOpen)} >Home</NavLink>
        </li>
        
        <li className="px-12 p-4  md:border-b-0 border-b-2 text-white hover:bg-green-500">
          <NavLink to="/Shop" onClick={()=> setMenuOpen(!menuOpen)} >Shop</NavLink>
        </li>
        <li className="px-12 p-4 md:border-b-0 border-b-2 text-white hover:bg-green-500">
          <NavLink to='/Aboutus' onClick={()=> setMenuOpen(!menuOpen)} >Aboutus</NavLink>
        </li>
        <li className="px-12 p-4  md:border-b-0 border-b-2 text-white hover:bg-green-500">
          <NavLink to='/Blog' onClick={()=> setMenuOpen(!menuOpen)} >Blog</NavLink>
        </li>
        <div className="flex md:ml-4 md:pb-0 pb-4 px-12 text-white items-center ">
          <IoMdCart/>
          [0]
        </div>
        </div>
      </ul>
    </nav>
    </div>
  )
}

export default Header