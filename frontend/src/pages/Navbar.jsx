import { Link } from "react-router-dom";
import logo from "../assets/icons-svg/logow.png";
import Login from './Login.jsx'
import Register from './Register.jsx'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-head_background w-full  p-6 h-28">
        {/* <!-- Flex container --> */}
        <div className="flex content-end items-center mx-auto justify-between w-[1400px]">
          {/* <!-- Logo --> */}
          <div>
            <img src={logo} className="w-60" alt="" />
          </div>
          {/* <!-- Menu Items --> */}
          <div className="hidden space-x-12 md:flex">
            <a href="/" className="text-white text-[1.5rem] hover:text-darkGrayishBlue">
              Home
            </a>
            <Link to="/about" className="text-white text-[1.5rem] hover:text-darkGrayishBlue">
              About us
            </Link>
            <a href="#" className="text-white text-[1.5rem] hover:text-darkGrayishBlue">
              How It Works
            </a>
            <a href="#" className="text-white text-[1.5rem] hover:text-darkGrayishBlue">
              Contact Us
            </a>
          </div>
          {/* <!-- Button --> */}
          <div className="flex justify-between">
          <Link to='/register'
              className="text-[1.5rem] p-3 px-12 mr-6 pt-2 text-white bg-button_color rounded-full baseline hover:bg-button_color_hover block"
            >
              Sign Up
              </Link>
            <Link to='/login'
              className="text-[1.5rem] p-3 px-12 pt-2 text-white bg-button_color rounded-full baseline hover:bg-button_color_hover block"
            >
              Log In
              </Link>
          </div>
        </div>


      </nav>
      
    </div>
  )
}
export default Navbar