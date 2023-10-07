const NewProject = () => {
    return (
        <form action="#" className="p-[80px] bg-backgroundColor">
            <h1 className="text-[40px] font-bold text-blue-500">Create New Project</h1>
            <div className="w-full flex">
                <div className="w-full pr-[80px]">
                    <label for="title" className="text-[35px]">Title</label><br />
                    <input type="text" className="w-full pl-2 h-[70px] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="short_description" className="text-[35px]">Short description <span className="text-[26px]">(max 100 characters)</span></label><br />
                    <input type="text" className="w-full pl-2 h-[210px] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="skills_required" className="text-[35px]">Skills Required</label><br />
                    <input type="text" className="w-full pl-2 h-[130px] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="additional_skills" className="text-[35px]">Additional skills</label><br />
                    <input type="text" className="w-full pl-2 h-[130px] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                </div>
                <div className="w-full pr-[80px]">
                    <label for="category" className="text-[35px]">Category</label><br />
                    <input type="text" className="w-full pl-2 h-[70px] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="detailed_description" className="text-[35px]">Detailed Description</label><br />
                    <input type="text" className="w-full pl-2 h-[425px] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="project_type" className="text-[35px]">Project Type</label>
                    <select id="project_type" name="project_type" className="w-full pl-4 h-[80px] appearance-none border-gray-300 items-center mt-2 border-[1px] rounded-[12px] text-[27px] hover:shadow-md">
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
                    <label for="no_of_contributors" className="text-[35px]">No of Contributers Required</label><br />
                    <input type="text" className="w-full pl-2 h-[70px] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="image" className="text-[35px]">Upload Representative Image</label><br />
                    <input type="image" className="w-full pl-2 h-[70px] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
                    <br />
                    <br />
                    <label for="links" className="text-[35px]">Related links</label><br />
                    <input type="url" className="w-full pl-2 h-[100px] border-gray-300 items-center mt-2 border-[1px] rounded-[12px] hover:shadow-md" />
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