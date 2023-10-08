import home1 from "../assets/icons-svg/home1.svg"
import home2 from "../assets/icons-svg/home2.svg"
import home3 from "../assets/icons-svg/home3.svg"
import home4 from "../assets/icons-svg/home4.svg"
import home5 from "../assets/icons-svg/home5.svg"
import home6 from "../assets/icons-svg/home6.svg"
import home7 from "../assets/icons-svg/home7.svg"
import home8 from "../assets/icons-svg/home8.svg"

import home9 from "../assets/icons-svg/explore.svg"
import home10 from "../assets/icons-svg/collaborate.svg"
import home11 from "../assets/icons-svg/manage.svg"
import home12 from "../assets/icons-svg/learn.svg"

import event1 from "../assets/icons-svg/event1.svg"
import event2 from "../assets/icons-svg/event2.svg"

import plus from "../assets/icons-svg/plus.svg"
import HomepageNav from "./HomepageNav"

const LoginHome = () => {
  return (
    <div>
      <HomepageNav/>
    <div className="flex bg-backgroundColor">
    <div className="w-2/12 p-6 pt-12 text-center">
        <h1 className="font-bold text-2xl mb-12">Upcoming Events</h1>
        <section className="mx-auto">
            <div className="m-3 p-0 rounded-3xl border-1 shadow-lg mb-12">
                <img className="rounded-t-3xl" src={event1} alt="" />
                <div className="flex p-2">
                    <p className="w-12 border-1 bg-darkBlue rounded-xl p-1 m-2 text-white">Oct<br /> 8</p>
                    <p className="text-left">
                        <p>Open Science Webinar</p>
                        <p>Sat 8:00</p>
                    </p>
                </div>
            </div>
            <div className="m-3 p-0 rounded-3xl border-1 shadow-lg">
                <img className="rounded-t-3xl" src={event2} alt="" />
                <div className="flex p-2">
                    <p className="w-14 border-1 bg-darkBlue rounded-xl p-1 m-2 text-white">Oct<br /> 17</p>
                    <p className="text-left">
                        <p>AI in Healthcare Conference</p>
                        <p>Mon 11:00</p>
                    </p>
                </div>
            </div>
            
        </section>
    </div>
    <div className="w-8/12 m-6 p-6 bg-white h-full rounded-3xl">
        <h1 className="font-bold text-3xl text-center p-6 mb-1">Explore Projects</h1>
        <nav className="pb-6 text-xl">
            <ul className="flex justify-between">
                <li className="px-6 border-2 rounded-xl border-gray-500 bg-gray-500 text-white p-1">All</li>
                <li>Biology</li>
                <li>Astronomy</li>
                <li>Chemistry</li>
                <li>Engineering</li>
                <li>Robotics</li>
                <li>Biotechnology</li>
                <li>Medicine</li>
            </ul>
        </nav>
        <section>
            <div className="flex justify-between text-center">
                <div>
                    <img className="w-[15rem] m-3 aspect-square object-cover rounded-3xl" src={home1} alt="" />
                    <h2>RenewInno</h2>
                </div>
                <div>
                    <img className="w-[15rem] m-3 aspect-square object-cover rounded-3xl" src={home2} alt="" />
                    <h2>MarsSim</h2>
                </div>
                <div>
                    <img className="w-[15rem] m-3 aspect-square object-cover rounded-3xl" src={home3} alt="" />
                    <h2>MicroPlastX</h2>
                </div>
                <div>
                    <img className="w-[15rem] m-3 aspect-square object-cover rounded-3xl" src={home4} alt="" />
                    <h2>GenoQuest</h2>
                </div>
            </div>
            <br />
            <div className="flex justify-between text-center">
                <div>
                    <img className="w-[15rem] m-3 aspect-square object-cover rounded-3xl" src={home5} alt="" />
                    <h2>AirWatch</h2>
                </div>
                <div>
                    <img className="w-[15rem] m-3 aspect-square object-cover rounded-3xl" src={home6} alt="" />
                    <h2>NeuraNet</h2>
                </div>
                <div>
                    <img className="w-[15rem] m-3 aspect-square object-cover rounded-3xl" src={home7} alt="" />
                    <h2>Digital Heritage</h2>
                </div>
                <div>
                    <img className="w-[15rem] m-3 aspect-square object-cover rounded-3xl" src={home8} alt="" />
                    <h2>OceanXplore</h2>
                </div>
            </div>
        </section>
        <h1 className="font-bold text-3xl text-center p-12 pb-6">How it works?</h1>
        <section className="flex justify-between">
            <div className="w-4/12 p-3 text-center border-2 rounded-3xl shadow-lg border-t-0">
                <img className="w-[15rem] m-3 aspect-square rounded-3xl mx-auto" src={home9} alt="" />
                <h2 className="font-bold text-xl p-1 pb-2">Sign UP and Explore</h2>
                <p>Create your Scimatch account and dive into open science projects. Browse projects and find collaborations that match your interests.</p>
            </div>
            <div className="w-4/12 p-3 text-center border-2 rounded-3xl shadow-lg border-t-0 ml-6">
                <img className="w-[15rem] m-3 aspect-square rounded-3xl mx-auto" src={home10} alt="" />
                <h2 className="font-bold text-xl p-1 pb-2">Collaborate and Contribute</h2>
                <p>Join projects, collaborate with global scientists, and contribute your skills. Be part of groundbreaking discoveries and interact with project teams.</p>
            </div>
            <div className="w-4/12 p-3 text-center border-2 rounded-3xl shadow-lg border-t-0 ml-6">
                <img className="w-[15rem] m-3 aspect-square rounded-3xl mx-auto" src={home11} alt="" />
                <h2 className="font-bold text-xl p-1 pb-2">Create and Manage Projects</h2>
                <p>Share your vision. Submit, launch, and manage projects with ease. Use Scimatch tools to organize taska and communicate with collaborators</p>
            </div>
            <div className="w-4/12 p-3 text-center border-2 rounded-3xl shadow-lg border-t-0 ml-6">
                <img className="w-[15rem] m-3 aspect-square rounded-3xl mx-auto" src={home12} alt="" />
                <h2 className="font-bold text-xl p-1 pb-2">Learn, Grow, and Innovate</h2>
                <p>Engage in scientific discussions, connect with peers, and stay updated. Innovate, experiment, and make meaningful contributions to open source projects</p>
            </div>
        </section>
    </div>
    <div className="w-2/12">
        <h1 className="text-3xl font-bold p-6 px-3 mt-6">FAQs</h1>
        <ul className="font-semibold">
            <li className="flex items-center p-1"><img src={plus} className="w-4 mr-1" alt="" /> What is SciMatch?</li>
            <li className="flex items-center p-1"><img src={plus} className="w-4 mr-1" alt="" /> How do I get started on Scimatch?</li>
            <li className="flex items-center p-1"><img src={plus} className="w-4 mr-1" alt="" /> Can I join multiple projects at once?</li>
            <li className="flex items-center p-1"><img src={plus} className="w-4 mr-1" alt="" /> How can I create a project?</li>
            <li className="flex items-center p-1"><img src={plus} className="w-4 mr-1" alt="" /> Is Scimatch free to use?</li>
            <li className="flex items-center p-1"><img src={plus} className="w-4 mr-1" alt="" /> What is the review process for projects?</li>
            <li className="flex items-center p-1"><img src={plus} className="w-4 mr-1" alt="" /> How can I edit my profile information?</li>
        </ul>
    </div>
</div>
</div>
  )
}
export default LoginHome