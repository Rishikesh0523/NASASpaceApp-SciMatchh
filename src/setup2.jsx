import { useState, useEffect } from "react";
const setup2 = () => {
    const [interestData, setInterestData] = useState([]);
    const [formdata, setformdata] =
        useState(
            {
                skill: '',
                interest: ''
            })
    const { skill, interest } = formdata
    const onChange = (e) => {
        setformdata((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    const interestEl = interestData.map(value => {
        return (<li className="border-2 rounded-2xl border-gray-500 w-auto h-[2.5rem] m-2 mt-6 text-[1rem] px-3 py-1 text-center">{value}</li>)
    });
    function handleButtonClick1() {
        setInterestData(prevState => [...prevState, interest]);
        setformdata(prevState => ({
            ...prevState,interest:''
        }))
      }
    const handleEnterPress1 = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleButtonClick1()
            }
      };
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
                <ul className="flex flex-wrap w-[500px]">
                            {interestEl}
                            <input type="text" onKeyDown={handleEnterPress1} name="interest" value={interest} onChange={onChange} className="p-3 m-2 focus:outline-none text-[1.5rem]" placeholder="Enter Interest here..." />
                        </ul>
                <div className="flex justify-between">
                    <span className="text-[1.5rem]">Skip</span>
                    <span className="text-[1.5rem] rounded-3xl bg-darkBlue w-20 text-center text-white ">Next</span>
                </div>
                <br />
            </div>
        </div>
    )
}
export default setup2