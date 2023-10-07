import profileb from "./assets/SCIMATCH/icons-svg/profileb.svg"
import profilew from "./assets/SCIMATCH/icons-svg/profilew.svg"
import accountsb from "./assets/SCIMATCH/icons-svg/Accountsb.svg"
import supportsb from "./assets/SCIMATCH/icons-svg/supportb.svg"
import settingsb from "./assets/SCIMATCH/icons-svg/settingsb.svg"
import edit from "./assets/SCIMATCH/icons-svg/edit.svg"
import pp from "./assets/SCIMATCH/temp/rishikesh-professional-picture.jpg"
import fb from "./assets/SCIMATCH/icons-svg/facebook.svg"
import insta from "./assets/SCIMATCH/icons-svg/insta.svg"
import linkedin from "./assets/SCIMATCH/icons-svg/linkedin.svg"

const Profile = () => {
    return (
        <div className="flex">
            <div className="w-2/12 p-6 pt-12">
                <h1 className="text-center pb-6 text-[30px] font-semibold">Dashboard</h1>
                <ul className="text-[22px]">
                    <li className="w-8/12 flex bg-boxColor text-white p-3 rounded-3xl"><img className="ml-2 w-4 mr-4" src={profilew} alt="" />Profile</li>
                    <li className="w-8/12 flex p-3"><img className="ml-2 w-4 mr-4" src={accountsb} alt="" />Accounts</li>
                    <li className="w-8/12 flex p-3"><img className="ml-2 w-4 mr-4" src={supportsb} alt="" />Supports</li>
                    <li className="w-8/12 flex p-3"><img className="ml-2 w-4 mr-4" src={settingsb} alt="" />Settings</li>
                </ul>
            </div>
            <div className="w-10/12 p-12 pr-28 bg-backgroundColor flex h-auto rounded-3xl">
                <div className="w-4/12 mr-6 bg-white p-12 rounded-3xl">
                    <img className="w-full aspect-square object-cover rounded-xl" src={pp} alt="Profile Picture" />
                    <div className="w-full mt-6 flex justify-between">
                        <h2 className="font-bold text-[34px]">Yujal Shrestha</h2>
                        <img className="w-6 mr-2" src={edit} alt="" />
                    </div>
                    <h3 className="text-[23px]">Graphic Designer</h3>
                    <h4>Thankot, Kathmandu, Nepal</h4>
                    <br />
                    <p className="text-[18px]">Hello there! I'm Yujal Shrestha, and I live
                        and breathe technology. From the moment
                        I built my first computer as a teenager to
                        my fascination with the latest breakthroughs in artificial intelligence and
                        beyond, I've been on an incredible journey through the ever-evolving world of
                        tech.</p>
                </div>
                <div className="w-4/12 mr-6">
                    <div className="bg-white p-6 mb-6 rounded-3xl">
                        <div className="flex justify-between p-1">
                            <h1 className="text-[18px]">Contact Information</h1>
                            <img className="w-6 mr-2" src={edit} alt="" />
                        </div>
                        <h2 className="text-[24px] flex items-center p-1"><span className="w-4/12">Phone:</span><span className="text-[18px]">+9779802309422</span></h2>
                        <h2 className="text-[24px] flex items-center p-1"><span className="w-4/12">E-mail:</span><span className="text-[18px]">shresthayujal46@gmail.com</span></h2>
                        <h2 className="text-[24px] flex items-center p-1"><span className="w-4/12">Site:</span><span className="text-[18px]">www.knowyujal.com.np</span></h2>
                    </div>
                    <div className="bg-white p-6 mb-6 rounded-3xl">
                        <div className="flex justify-between p-1">
                            <h1 className="text-[18px]">Skills</h1>
                            <img className="w-6 mr-2" src={edit} alt="" />
                        </div>
                        <h2 className="text-[24px] p-1">Engineering</h2>
                        <h2 className="text-[24px] p-1">Artificial Intelligence</h2>
                        <h2 className="text-[24px] p-1">Innovation</h2>
                        <h2 className="text-[24px] p-1">Space</h2>
                        <h2 className="text-[24px] p-1">Mathematics</h2>
                    </div>
                    <div className="bg-white p-6 mb-6 rounded-3xl">
                        <h1 className="text-[18px] p-1">Completed Projects</h1>
                        <h2 className="text-[24px] p-1">Project A</h2>
                        <h2 className="text-[24px] p-1">Project B</h2>
                    </div>
                </div>
                <div className="w-4/12">
                <div className="bg-white p-6 mb-6 rounded-3xl">
                        <h1 className="text-[18px] p-1">Ongoing Projects</h1>
                        <h2 className="text-[24px] p-1">Project J</h2>
                        <h2 className="text-[24px] p-1">Project K</h2>
                    </div>
                    <div className="bg-white p-6 mb-6 rounded-3xl">
                        <div className="flex justify-between p-1">
                            <h1 className="text-[18px]">Fields of Interest</h1>
                            <img className="w-6 mr-2" src={edit} alt="" />
                        </div>
                        <h2 className="text-[24px] p-1">Engineering</h2>
                        <h2 className="text-[24px] p-1">Artificial Intelligence</h2>
                        <h2 className="text-[24px] p-1">Innovation</h2>
                        <h2 className="text-[24px] p-1">Space</h2>
                        <h2 className="text-[24px] p-1">Mathematics</h2>
                    </div>
                    <div className="bg-white p-6 mb-6 rounded-3xl">
                        <div className="flex justify-between p-1">
                            <h1 className="text-[18px]">Social Media Links</h1>
                            <img className="w-6 mr-2" src={edit} alt="" />
                        </div>
                        <h2 className="flex p-3 pl-0 items-center"><img className="w-[32px] ml-1 mr-5" src={fb} alt="" /><a className="w-[14px] italic text-blue-500" href="#">Facebook</a></h2>
                        <h2 className="flex p-3 pl-0 items-center"><img className="w-[41px] mr-4" src={insta} alt="" /><a className="w-[14px] italic text-blue-500" href="#">Instagram</a></h2>
                        <h2 className="flex p-3 pl-0 items-center"><img className="w-[32px] ml-1 mr-5" src={linkedin} alt="" /><a className="w-[14px] italic text-blue-500" href="#">LinkedIn</a></h2>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Profile