import { useState, useEffect } from "react";
const NewProject = () => {
    const [skillsData, setSkillsData] = useState([]);
    const [addskillsData, addsetSkillsData] = useState([]);
    const [formdata, setformdata] =
        useState(
            {
                title: '',
                des1: '',
                des2: '',
                skill: '',
                category: '',
                number: '',
                projectType: '',
                addskills: ''
            })
    const { title, des1, des2, skill, addskills, category, number, projectType } = formdata
    const onChange = (e) => {
        setformdata((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    const skillsEl = skillsData.map(value => {
        return (<li className="border-2 rounded-2xl border-gray-500 w-auto h-[2.5rem] m-2 mt-6 text-[1rem] px-3 py-1 text-center">{value}</li>)
    });
    const addskillsEl = addskillsData.map(value => {
        return (<li className="border-2 rounded-2xl border-gray-500 w-auto h-[2.5rem] m-2 mt-6 text-[1rem] px-3 py-1 text-center">{value}</li>)
    });
    function handleButtonClick1() {
        setSkillsData(prevState => [...prevState, skill]);
        setformdata(prevState => ({
            ...prevState,skill:''
        }))
      }
    const handleEnterPress1 = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleButtonClick1()
            }
      };
    function handleButtonClick2() {
        addsetSkillsData(prevState => [...prevState, addskills]);
        setformdata(prevState => ({
            ...prevState,addskills:''
        }))
      }
    const handleEnterPress2 = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleButtonClick2()
            }
      };
    return (

        <form action="#" className="p-[80px] bg-backgroundColor">
            <h1 className="text-[2.5rem] font-bold text-blue-500">Create New Project</h1>
            <div className="w-full flex">
                <div className="w-full pr-[5rem]">
                    <label for="title" className="text-[2rem]">Title</label><br />
                    <input type="text" name="title" value={title} onChange={onChange} className="w-full pl-2 h-[4rem] border-gray-300 items-center mt-2 border-[1px] rounded-[0.75rem] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="short_description" className="text-[1.8rem]">Short description <span className="text-[1rem]">(max 100 characters)</span></label><br />
                    <textarea name="des1" value={des1} onChange={onChange} rows='4' className="w-full px-3 pt-3 h-[12rem] resize-none text-start border-gray-300 mt-2 border-[1px] rounded-[0.75rem] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="skills_required" className="text-[2rem]">Skills Required</label><br />
                    <div name="skills" className="pl-2 min-h-[8rem] w-[37rem] border-gray-300 bg-white active:border-none items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md">
                        <ul className="flex flex-wrap w-[600px]">
                            {skillsEl}
                            <input type="text" onKeyDown={handleEnterPress1} name="skill" value={skill} onChange={onChange} className="p-3 m-2 focus:outline-none text-[1.5rem]" placeholder="Enter Skill here..." />
                        </ul>
                    </div>
                    <br />
                    <br />
                    <label for="additional_skills" className="text-[2rem]">Additional skills</label><br />
                    <div name="addskills" className="pl-2 min-h-[8rem] w-[37rem] border-gray-300 bg-white active:border-none items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md">
                        <ul className="flex flex-wrap w-[600px]">
                            {addskillsEl}
                            <input type="text" onKeyDown={handleEnterPress2} name="addskills" value={addskills} onChange={onChange} className="p-3 m-2 focus:outline-none text-[1.5rem]" placeholder="Enter Skill here..." />
                        </ul>
                    </div>
                    <br />
                </div>
                <div className="w-full pr-[80px]">
                    <label for="category" className="text-[2rem]">Category</label><br />
                    <input type="text" name="category" value={category} onChange={onChange} className="w-full pl-2 h-[4rem] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="detailed_description" className="text-[2rem]">Detailed Description</label><br />
                    <textarea type="text" value={des2} onChange={onChange} name="des2" rows='4' className="w-full pl-2 h-[25rem] resize-none border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="project_type" className="text-[2rem]">Project Type</label>
                    <select id="project_type" value={projectType} name="projectType" onChange={onChange} className="w-full pl-4 h-[5rem] appearance-none border-gray-300 items-center mt-2 border-[1px] rounded-[12px] text-[1.5rem] hover:shadow-md">
                        <option value="on_site">On-site</option>
                        <option value="remote">Remote</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                    <br />
                    <br />
                </div>
                <br />
                <br />
                <div className="w-full">
                    <label for="no_of_contributors" className="text-[2rem]">No of Contributers Required</label><br />
                    <input type="text" value={number} name="number" onChange={onChange} className="w-full pl-2 h-[4rem] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="image" className="text-[2rem]">Upload Representative Image</label><br />
                    <input type="file" onChange={onChange} className="w-full pl-2 h-[70px] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="links" className="text-[2rem]">Related links</label><br />
                    <textarea type="url" className="w-full pl-2 py-3 text-[1.2rem] h-[100px] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                </div>
            </div>
            <div className="flex justify-end text-white">
                <input type="submit" value="Confirm" className="w-[400px] h-[75px] text-center text-[35px] bg-gradient-to-r from-box_gradient_one via-box_gradient_two to-box_gradient_three items-left mt-2 border-[1px] rounded-[18px] shadow-md hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-400" />
            </div>
        </form>
    )
}

export default NewProject