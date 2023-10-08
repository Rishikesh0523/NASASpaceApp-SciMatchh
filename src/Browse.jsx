import filter from "./assets/SCIMATCH/icons-svg/filter.svg"
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
import browse1 from "./assets/SCIMATCH/icons-svg/browse1.svg"
import browse2 from "./assets/SCIMATCH/icons-svg/browse2.svg"
import browse3 from "./assets/SCIMATCH/icons-svg/browse3.svg"
import browse4 from "./assets/SCIMATCH/icons-svg/browse4.svg"
import bookmark from "./assets/SCIMATCH/icons-svg/bookmark.svg"
import collab from "./assets/SCIMATCH/icons-svg/collaborate.svg"

export default function BrowseSection() {
    return (
        <div className="bg-backgroundColor">
            <div className="flex justify-center p-6">
                <h1 className="font-bold text-3xl mr-[15rem]">Browse</h1><h2 className="font-bold text-xl mr-[20rem]">All categories</h2><h2 className="font-semibold text-xl mr-[1rem]">Filters</h2><img src={filter} className="w-6" alt="" />
            </div>
            <div className="w-full flex justify-between space-x-16">
                <div className="w-4/12 p-6 pt-12">
                    <h1 className="text-left pb-6 px-12 text-[30px] font-semibold">Dashboard</h1>
                    <ul className="text-[22px]">
                        <li className="w-8/12 flex bg-boxColor text-white p-3 rounded-3xl"><img className="ml-2 w-4 mr-4" src={profilew} alt="" />Profile</li>
                        <li className="w-8/12 flex p-3"><img className="ml-1 w-4 mr-4" src={accountsb} alt="" />My Projects</li>
                        <li className="w-8/12 flex p-3"><img className="ml-1 w-4 mr-4" src={supportsb} alt="" />Joined Projects</li>
                        <li className="w-8/12 flex p-3"><img className="ml-1 w-4 mr-4" src={settingsb} alt="" />Bookmarks</li>
                    </ul>
                </div>
                <div className="w-6/11">
                    <div className="border-2 rounded-t-3xl p-6 bg-white flex align-center items-center">
                        <div className="p-4">
                            <img className="w-[140px] aspect-square object-cover rounded-3xl" src={browse1} alt="" />
                        </div>
                        <div className="w-10/12 p-4">
                            <h1 className="font-bold text-3xl">
                                Clean Water Access in Rural Communities
                            </h1>
                            <p className="font-bold text-sm">Yujal Shrestha</p>
                            <p>Join efforts to develop cost-effective water purification solutions for remote villages ensuring clean and safe dringking water for all.</p>
                            <p className="text-sm">5 people have joined.</p>
                        </div>
                        <div className="w-1/12 p-4">
                            <img className="w-[3rem]" src={bookmark} alt="" />
                        </div>
                    </div>
                    <div className="border-2 p-6 bg-white flex align-center items-center">
                        <div className="p-4">
                            <img className="w-[140px] aspect-square object-cover rounded-3xl" src={browse2} alt="" />
                        </div>
                        <div className="w-10/12 p-4">
                            <h1 className="font-bold text-3xl">
                                AI-driven Drug Discovery
                            </h1>
                            <p className="font-bold text-sm">Rishikesh Paudel</p>
                            <p>Contribute to groundbreaking research in pharmaceuticals by developing AI algorithms that expedite drug discovery.</p>
                            <p className="text-sm">7 people have joined.</p>
                        </div>
                        <div className="w-1/12 p-4">
                            <img className="w-[3rem]" src={bookmark} alt="" />
                        </div>

                    </div>
                    <div className="border-2 p-6 bg-white flex align-center items-center">
                        <div className="p-4">
                            <img className="w-[140px] aspect-square object-cover rounded-3xl" src={browse3} alt="" />
                        </div>
                        <div className="w-10/12 p-4">
                            <h1 className="font-bold text-3xl">
                                Urban Biodiversity Census
                            </h1>
                            <p className="font-bold text-sm">Praharsha Adhikari</p>
                            <p>Participate in a citywide biodiversity census to document urban wildlife and promote conservation efforts.</p>
                            <p className="text-sm">4 people have joined.</p>
                        </div>
                        <div className="w-1/12 p-4">
                            <img className="w-[3rem]" src={bookmark} alt="" />
                        </div>
                    </div>
                    <div className="border-2 p-6 bg-white flex align-center items-center">
                        <div className="p-4">
                            <img className="w-[140px] aspect-square object-cover rounded-3xl" src={browse4} alt="" />
                        </div>
                        <div className="w-10/12 p-4">
                            <h1 className="font-bold text-3xl">
                                Exploring Mars' Geological Mysterious
                            </h1>
                            <p className="font-bold text-sm">Pragya Khatiwada</p>
                            <p>Embark on a virtual mission to Mars to study its geology, analyze Martian rocks, and uncover the planet's ancient history.</p>
                            <p className="text-sm">9 people have joined.</p>
                        </div>
                        <div className="w-1/12 p-4">
                            <img className="w-[3rem]" src={bookmark} alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-4/12 p-12">
                    <img src={collab} className="p-12" alt="" />
                    <h1 className="font-bold text-2xl">Collaborate and Continue</h1>
                    <br />
                    <ul className="list-disc text-md">
                        <li>Join projects that inspire you. Collaborate with scientist, researchers, and ethusiasts from around the globe.</li>
                        <li>Contribute your skills, insights, and creativity to ongoind scientific endeavors.</li>
                        <li>Be a part of groundbreaking discoveries Interact with project teams, share ideas, and collectively advance scientific knowledge.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}