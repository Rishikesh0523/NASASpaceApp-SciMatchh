import dp from "./assets/SCIMATCH/icons-svg/profilepicture.svg"
import upload from "./assets/SCIMATCH/icons-svg/upload.svg"
const setup1 = () => {
    return (
        <div className="flex w-full mx-auto justify-center align-center items-center p-12">
            <div className="w-[32rem] rounded-3xl p-6 pb-3 shadow-md border-2 bg-white">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[2rem] w-full text-center">Set up your profile</h1>
                    <h2 className="text-[1.5rem] w-full text-center">Step I</h2>
                    <h2 className="text-[2rem] w-full text-center text-gray-700" >Upload your profile picture</h2>
                </div>
                <br />
                <div className="flex justify-center w-full"><img src={dp} alt="Default Profile " className="w-[15rem]" /></div>
                <br />
                <div className=" border-2 w-[20rem] mx-auto px-3 border-darkBlue rounded-full hover:bg-darkGrayishBlue flex items-center">
                    <div className="w-2/12">
                        <img src={upload} alt="upload" className="w-[2.3rem]" />
                    </div>
                    <a
                        href="#"
                        class="w-8/12 text-center text-[2rem] "
                    >
                        Upload
                    </a>
                    <div className="w-2/12"></div>
                </div>
                <br />
                <div className="flex justify-between">
                    <span className="text-[1.5rem]">Skip</span>
                    <span className="text-[1.5rem] rounded-3xl bg-darkBlue w-20 text-center text-white ">Next</span>
                </div>
                <br />
            </div>
        </div>
    )
}
export default setup1