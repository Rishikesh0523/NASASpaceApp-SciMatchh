import dp from "./assets/SCIMATCH/icons-svg/profilepicture.svg"
import upload from "./assets/SCIMATCH/icons-svg/upload.svg"
const setup2 = () => {
    return (
        <div className="flex w-full mx-auto justify-center align-center items-center p-12">
            <div className="w-[32rem] rounded-3xl p-6 pb-3 shadow-md border-2 bg-white">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[2rem] w-full text-center">Set up your profile</h1>
                    <h2 className="text-[1.5rem] w-full text-center">Step II</h2>
                    <h2 className="text-[1.8rem] w-full text-center text-gray-700">Choose upto 5 skills and interests</h2>
                </div>
                <br />
                <span className="text-[2rem] pl-3">Skills</span>
                <ul>
                    <li className="flex justify-between p-3 py-1" ><input type="text" className="border-2 rounded-full p-1 px-3 text-[1.2rem] border-darkBlue" placeholder="Add Skill" /> 
                    <select name="Skill Level" id="skilllevel1" className="border-2 rounded-full text-[1.2rem] border-darkBlue p-1 px-3">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>
                    </li>
                    <li className="flex justify-between p-3  py-1" ><input type="text" className="border-2 rounded-full p-1 px-3 text-[1.2rem] border-darkBlue" placeholder="Add Skill" /> 
                    <select name="Skill Level" id="skilllevel1" className="border-2 rounded-full text-[1.2rem] border-darkBlue p-1 px-3">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>
                    </li>
                    <li className="flex justify-between p-3 py-1 " ><input type="text" className="border-2 rounded-full p-1 px-3 text-[1.2rem] border-darkBlue" placeholder="Add Skill" /> 
                    <select name="Skill Level" id="skilllevel1" className="border-2 rounded-full text-[1.2rem] border-darkBlue p-1 px-3">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>
                    </li>
                    <li className="flex justify-between p-3 py-1" ><input type="text" className="border-2 rounded-full p-1 px-3 text-[1.2rem] border-darkBlue" placeholder="Add Skill" /> 
                    <select name="Skill Level" id="skilllevel1" className="border-2 rounded-full text-[1.2rem] border-darkBlue p-1 px-3">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>
                    </li>
                    <li className="flex justify-between p-3 py-1" ><input type="text" className="border-2 rounded-full p-1 px-3 text-[1.2rem] border-darkBlue" placeholder="Add Skill" /> 
                    <select name="Skill Level" id="skilllevel1" className="border-2 rounded-full text-[1.2rem] border-darkBlue p-1 px-3">
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>
                    </li>
                </ul>
                <p className="text-[2rem] pl-3 mt-3">Interest</p>
                <ul>
                    <div className="p-3 text-[1rem]">Add Interest here</div>
                </ul>
                <br />
            </div>
        </div>
    )
}
export default setup2