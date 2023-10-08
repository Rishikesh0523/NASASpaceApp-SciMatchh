import Navbar from "./Navbar.jsx"
import Mission from "../assets/icons-png/mission.png"

const About = () => {
  return (
    <div className=" bg-cyan-50">
      <Navbar/>
      <div className="w-full mx-auto bg-slate-800">
        <img src="https://cdn.discordapp.com/attachments/1154803092508909632/1160419115526258791/IMG_8716.jpg?ex=65349784&is=65222284&hm=dc4af08913182288243f6ae2f30e6df756a4d8839142f37fbf976de274ca1e95&" alt="" className="object-cover w-[80vw] h-[87vh] mx-auto contrast-125 brightness-90"/>
      </div>  
      <div className="w-[80vw] mx-auto py-16 text-slate-900">
        <h2 className="pb-8 text-6xl font-bold">About us</h2>
        <p className="py-4 text-2xl">Welcome to SciMatch, where science meets collaboration and innovation. We are a passionate team of scientists, engineers, and enthusiasts who share a common vision to create a thriving ecosystem for open science, research, and discovery.
        At Scimatch, we are dedicated to advancing the frontiers of open science through collaboration and innovation. We are on our journey to revolutionize how open-source projects come to life by connecting passionate contributors with projects that need their expertise.
        <br/>
        <br/>
        Our team is driven by a shared passion for open science, transparency, and knowledge sharing. We believe in the power of community-driven efforts to accelerate scientific progress and make a positive impact on the world. With Scimatch, we provide a seamless avenue for individuals to find exciting open science projects to contribute to and for project creators to tap into a pool of diverse talents.</p>
      </div>
      <div className="bg-slate-600 text-white">
        <div className="w-[80vw] mx-auto py-16 flex justify-between items-center gap-4">
          <div>
            <h2 className="pb-8 text-6xl font-bold">Our mission</h2>
            <p className="py-4 w-[40vw] text-2xl">At SciMatch, we believe in the power of collective knowledge and collaboration to advance scientific understanding. Our mission is to provide a platform that connects scientists, researchers, educators, and learners from around the world, enabling them to collaborate, share resources, and contribute to the growth of open science.
            <br/>
            <br/>
             We are on our journey to revolutionize how open-source projects come to life by connecting passionate contributors with projects that need their expertise. </p>
          </div>
        <img src={Mission} alt="mission" width={500}/>
        </div>
      </div>
      <div className="w-[80vw] mx-auto py-16 text-slate-900">
        <h2 className="pb-8 text-6xl font-bold">What we offer</h2>
        <div>
          <h4>Collaboration</h4>
          <p>SciMatch is your gateway to finding like-minded individuals and teams who share your scientific interests. Connect, brainstorm, and collaborate on groundbreaking projects that push the boundaries of knowledge.</p>
        </div>

        <div>
          <h4>Operation</h4>
          <p>SciMatch is your gateway to finding like-minded individuals and teams who share your scientific interests. Connect, brainstorm, and collaborate on groundbreaking projects that push the boundaries of knowledge.</p>
        </div>

        <div>
          <h4>Collaboration</h4>
          <p>SciMatch is your gateway to finding like-minded individuals and teams who share your scientific interests. Connect, brainstorm, and collaborate on groundbreaking projects that push the boundaries of knowledge.</p>
        </div>

        <div>
          <h4>News and updates</h4>
          <p>SciMatch is an inclusive community that welcomes individuals from diverse backgrounds, disciplines, and skill levels. We believe that diversity drives innovation and creativity.</p>
        </div>

        <div>
          <h4>News and updates</h4>
          <p>Stay up-to-date with the latest scientific discoveries, breakthroughs, and news from various fields. Our news hub keeps you informed and inspired.</p>
        </div>
      </div>
    </div>
  )
}
export default About