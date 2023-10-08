import logo from "./assets/SCIMATCH/icons-svg/logob.svg";
import home from "./assets/SCIMATCH/icons-svg/home.svg";
import project from "./assets/SCIMATCH/icons-svg/Projects.svg";
import resources from "./assets/SCIMATCH/icons-svg/Resources.svg";
import news from "./assets/SCIMATCH/icons-svg/News.svg";
import discussion from "./assets/SCIMATCH/icons-svg/discussion.svg";
import dp from "./assets/SCIMATCH/icons-svg/profilepicture.svg";
import { useState } from "react";
export default function Header() {
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }
    return (
        <div>
            <nav class="w-full p-3 h-24">
                {/* <!-- Flex container --> */}
                <div class="flex content-end items-center mx-auto justify-between w-[1400px]">
                    {/* <!-- Logo --> */}
                    <div>
                        <img src={logo} className="w-60" alt="" />
                    </div>
                    {/* <!-- Menu Items --> */}
                    <div class="hidden space-x-12 md:flex">
                        <div href="#" class=" text-[2rem] hover:text-darkGrayishBlue">
                            <div>
                                <img src={home} className="w-[2rem] mx-auto pb-0 mb-0" alt="home" />
                                <p className=" text-[1.25rem] mt-0 pt-0">Home</p>
                            </div>
                        </div>
                        <div href="#" class=" text-[2rem] hover:text-darkGrayishBlue">
                            <div>
                                <img src={project} className="w-[2.2rem] mx-auto pb-0 mb-0" alt="home" />
                                <p className=" text-[1.25rem] mt-0 pt-0">Project</p>
                            </div>
                        </div>
                        <div href="#" class=" text-[2rem] hover:text-darkGrayishBlue">
                            <div>
                                <img src={resources} className="w-[2rem] mx-auto pb-0 mb-0" alt="home" />
                                <p className=" text-[1.25rem] mt-0 pt-0">Resources</p>
                            </div>
                        </div>
                        <div href="#" class=" text-[2rem] hover:text-darkGrayishBlue">
                            <div>
                                <img src={news} className="w-[2.5rem] mx-auto pb-0 mb-0" alt="home" />
                                <p className=" text-[1.25rem] mt-0 pt-0">News</p>
                            </div>
                        </div>
                        
                        <div href="#" class=" text-[2rem] hover:text-darkGrayishBlue">
                            <div>
                                <img src={discussion} className="w-[2.5rem] mx-auto pb-0 mb-0" alt="home" />
                                <p className=" text-[1.25rem] mt-0 pt-0">Discussion</p>
                            </div>
                        </div>
                        
                    </div>
                    {/* <!-- Button --> */}
                    <div class="flex justify-between items-center">
                       <img src={dp} alt="profile pic" className="w-[3rem]" />
                       <p className="text-[2rem] ml-4" >Yujal Shrestha</p>
                    </div>
                </div>


            </nav>
        </div>
    );
}