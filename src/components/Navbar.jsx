import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { useState } from "react"


const Navbar = () => {
  
  const [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <div className="text-white flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4 " >
      <h1 className="w-full text-3xl  font-bold text-[#00df9a]" >React</h1>
      <ul className="hidden md:flex " >
        <li className="p-4" >Home</li>
        <li className="p-4" >Company</li>
        <li className="p-4" >Resources</li>
        <li className="p-4" >About</li>
        <li className="p-4" >Contact</li>
      </ul>
      <div className="sm:block md:hidden" onClick={handleNav} >
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} /> }
        
      </div>
      <div className="md:hidden ease-out duration-1000 ">
        <ul className= { nav ? 'fixed left-0 top-0 w-[70%] h-auto border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[100%]' }>
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4" >REACT</h1>
            <li className="p-4 border-b border-gray-600" >Home</li>
            <li className="p-4 border-b border-gray-600" >Company</li>
            <li className="p-4 border-b border-gray-600" >Resources</li>
            <li className="p-4 border-b border-gray-600" >About</li>
            <li className="p-4 border-b border-gray-600" >Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
