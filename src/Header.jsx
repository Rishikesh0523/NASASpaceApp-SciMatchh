import logo from "./assets/SCIMATCH/icons-svg/logow.png";
import Login from './Login.jsx'
import Register from './Register.jsx'
import { useState } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <div>

            <nav class="bg-head_background w-full  p-6 h-28">
                {/* <!-- Flex container --> */}
                <div class="flex content-end items-center mx-auto justify-between w-[1400px]">
                    {/* <!-- Logo --> */}
                    <div>
                        <img src={logo} className="w-60" alt="" />
                    </div>
                    {/* <!-- Menu Items --> */}
                    <div class="hidden space-x-12 md:flex">
                        <a href="#" class="text-white text-[1.5rem] hover:text-darkGrayishBlue">
                            Home
                        </a>
                        <a href="#" class="text-white text-[1.5rem] hover:text-darkGrayishBlue">
                            About us
                        </a>
                        <a href="#" class="text-white text-[1.5rem] hover:text-darkGrayishBlue">
                            How It Works
                        </a>
                        <a href="#" class="text-white text-[1.5rem] hover:text-darkGrayishBlue">
                            Contact Us
                        </a>
                    </div>
                    {/* <!-- Button --> */}
                    <div class="flex justify-between">
                        <a
                            href="#"
                            class="text-[1.5rem] p-3 px-12 mr-6 pt-2 text-white bg-button_color rounded-full baseline hover:bg-button_color_hover block" onClick={()=>updateToggle(3)}
                        >
                            Sign Up
                        </a>
                        <a
                            href="#"
                            class="text-[1.5rem] p-3 px-12 pt-2 text-white bg-button_color rounded-full baseline hover:bg-button_color_hover block" onClick={()=>updateToggle(2)}
                        >
                            Log In
                        </a>
                    </div>
                </div>


            </nav>
            <div className={toggle === 2 ? "fixed" : "hidden"}>
                <Login />
            </div>
            <div className={toggle === 3 ? "w-full backdrop-blur-md h-screen fixed" : "hidden"}>
                <Register />
            </div>
        </div>
    );
}
