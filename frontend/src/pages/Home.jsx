import marketplace from "../assets/icons-svg/landingpageillustration.svg"
import collab from "../assets/icons-svg/Collab.svg"
import innovation from "../assets/icons-svg/Innovation.svg"
import connect from "../assets/icons-svg/connecting.svg"
import research from "../assets/icons-svg/research.svg"
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="hero" className="pb-24 bg-gradient-to-r from-gradient_one to-gradient_two">
        {/* <!-- Flex Container --> */}
        <div
          className="flex p-48 items-center mx-auto pt-5 pb-24 w-[1750px]"
        >
          <div className="flex flex-col space-y-12 w-1/2">
            <h1
              className="text-white w-11/12 pt-[125px] py-12 text-[53px] font-bold text-5xl text-left"
            >
              Unleash the Boundless Potential of Scientific Collaboration with SciMatch: Where Your Ideas Fuel Discovery and Innovation
            </h1>
            <div className="flex justify-center md:justify-start">
              <Link
                to ='/register'
                className="bg-gradient-to-r from-box_gradient_one via-box_gradient_two to-box_gradient_three w-[414px] h-[98px] align-center p-3 px-6 pt-2 text-white text-[47px] text-center rounded-full baseline hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-400"
              >JOIN NOW</Link>
            </div>
          </div>
          <div>
            <img src={marketplace} width="550px" alt="" />
          </div>
        </div>

        <div>
          <ul className="flex justify-center">
            <li className="px-12"><img className="w-[60px] h-[60px]" src={collab} /><span className="text-white text-[25px]">Inspiring <br /> Collaboration</span></li>
            <li className="px-12"><img className="w-[60px] h-[60px]" src={innovation} /><span className="text-white text-[25px]">Foostering <br /> Innovation</span></li>
            <li className="px-12"><img className="w-[60px] h-[60px]" src={connect} /><span className="text-white text-[25px]">Connecting <br /> Scientists</span></li>
            <li className="px-12"><img className="w-[55px] h-[55px]" src={research} /><span className="text-white text-[25px]">Empowering <br /> Research</span></li>
          </ul>
        </div>
      </section>
    <Footer/>
    </div>
  )
}
export default Home