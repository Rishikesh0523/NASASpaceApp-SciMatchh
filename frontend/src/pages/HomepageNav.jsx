import logo from "../assets/icons-svg/logob.svg";
import home from "../assets/icons-svg/home.svg";
import project from "../assets/icons-svg/Projects.svg";
import resources from "../assets/icons-svg/Resources.svg";
import news from "../assets/icons-svg/News.svg";
import discussion from "../assets/icons-svg/discussion.svg";
import dp from "../assets/icons-svg/profilepicture.svg";
import { Link } from "react-router-dom";

const HomepageNav = () => {
  return (
    <div> <div>
    <nav class="w-full p-3 h-24">
        {/* <!-- Flex container --> */}
        <div class="flex content-end items-center mx-auto justify-between w-[1400px]">
            {/* <!-- Logo --> */}
            <div> 
                <img src={logo} className="w-60" alt="" />
            </div>
            {/* <!-- Menu Items --> */}
            <div class="hidden space-x-12 md:flex">
                <div class=" text-[2rem] hover:text-darkGrayishBlue">
                    <Link to='/homepage' className=" cursor-pointer">
                        <img src={home} className="w-[2rem] mx-auto pb-0 mb-0" alt="home" />
                        <p className=" text-[1.25rem] mt-0 pt-0">Home</p>
                    </Link>
                </div>
                <Link to="" class=" text-[2rem] hover:text-darkGrayishBlue">
                    <div className=" cursor-pointer">
                        <img src={project} className="w-[2.2rem] mx-auto pb-0 mb-0" alt="home" />
                        <p className=" text-[1.25rem] mt-0 pt-0">Project</p>
                    </div>
                </Link>
                <Link to="/resources" class=" text-[2rem] hover:text-darkGrayishBlue">
                    <div className=" cursor-pointer">
                        <img src={resources} className="w-[2rem] mx-auto pb-0 mb-0" alt="home" />
                        <p className=" text-[1.25rem] mt-0 pt-0">Resources</p>
                    </div>
                </Link>
                <Link to="/news" class=" text-[2rem] hover:text-darkGrayishBlue">
                    <div className=" cursor-pointer">
                        <img src={news} className="w-[2.5rem] mx-auto pb-0 mb-0" alt="home" />
                        <p className=" text-[1.25rem] mt-0 pt-0">News</p>
                    </div>
                </Link>
                
                <Link to="" class=" text-[2rem] hover:text-darkGrayishBlue">
                    <div className=" cursor-pointer">
                        <img src={discussion} className="w-[2.5rem] mx-auto pb-0 mb-0" alt="home" />
                        <p className=" text-[1.25rem] mt-0 pt-0">Discussion</p>
                    </div>
                </Link>
                
            </div>
            {/* <!-- Button --> */}
            <Link to='/dashboard' class="flex justify-between items-center cursor-pointer">
               <img src={dp} alt="profile pic" className="w-[3rem]" />
               <p className="text-[2rem] ml-4" >Yujal Shrestha</p>
            </Link>
        </div>


    </nav>
</div></div>
  )
}
export default HomepageNav