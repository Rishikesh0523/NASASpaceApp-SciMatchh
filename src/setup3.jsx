
import { useState, useEffect } from "react";

const setup3 = () => {
    const[formdata, setformdata] = 
    useState(
    {
        role :'',
        bio : ''
    })
    const{role,bio} = formdata
    const onChange = (e) => {
        setformdata((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="flex w-full mx-auto justify-center align-center items-center p-12">
            <div className="w-[32rem] rounded-3xl p-6 pb-3 shadow-md border-2 bg-white">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[2rem] w-full text-center">Set up your profile</h1>
                    <h2 className="text-[1.5rem] w-full text-center">Step III </h2>
                    <h2 className="text-[2rem] w-full text-center text-gray-700">Update your details</h2>
                </div>
                <br />
                <span className="text-[2rem] pl-3">Role</span>
                <div className="flex justify-between p-3 py-1" >
                    <input type="text" value={role} onChange={onChange} name="role" className="border-2 w-full  rounded-2xl p-2 px-4 text-[1.5rem] border-darkBlue" />
                </div>
                <span className="text-[2rem] pl-3">Bio</span>
                <div className="flex justify-between p-3 py-1" >
                    <textarea value={bio} name="bio" onChange={onChange} className="border-2 w-full h-[14rem] resize-none rounded-2xl p-2 pt-4 px-4 text-[1.5rem] border-darkBlue" />
                </div>
                <br />
            </div>
        </div>
    )
}
export default setup3