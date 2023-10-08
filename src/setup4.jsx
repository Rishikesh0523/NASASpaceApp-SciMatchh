
import { useState, useEffect } from "react";
import allCountries from "./assets/data/countries";
const setup4 = () => {
    const [formdata, setformdata] =
        useState(
            {
                role: '',
                bio: '',
                country: ''
            })
    const { role, bio, country } = formdata
    const onChange = (e) => {
        setformdata((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
        const countrySelectEl = allCountries.map(value => {
        return (<option value={value.name}>{value.name}</option>)
    })
    return (
        <div className="flex w-full mx-auto justify-center align-center items-center p-12">
            <div className="w-[32rem] rounded-3xl p-6 pb-3 shadow-md border-2 bg-white">
                <div className="flex flex-col">
                    <h1 className="font-bold text-[2rem] w-full text-center">Set up your profile</h1>
                    <h2 className="text-[1.5rem] w-full text-center">Step IV </h2>
                    <h2 className="text-[2rem] w-full text-center text-gray-700">Enter your details</h2>
                </div>
                <br />
                <span className="text-[2rem] pl-3">Address line</span>
                <div className="flex justify-between p-3 py-1" >
                    <input type="text" value={role} onChange={onChange} name="role" className="border-2 w-full  rounded-2xl p-2 px-4 text-[1.5rem] border-darkBlue" />
                </div>
                <span className="text-[2rem] pl-3">City</span>
                <div className="flex justify-between p-3 py-1" >
                    <input type="text" value={bio} name="bio" onChange={onChange} className="border-2 w-full  rounded-2xl p-2 pt-4 px-4 text-[1.5rem] border-darkBlue" />
                </div>
                <br />
                <span className="text-[2rem] pl-3">Country</span>
                <div className="flex justify-between p-3 py-1" >
                    <select  className="border-2 w-full  rounded-2xl p-2 pt-4 px-4 text-[1.5rem] border-darkBlue"
                        name="country"  
                        value={country}                     
                        placeholder="Select a Country"
                        onChange={onChange}
                    >
                        {countrySelectEl}
                    </select>
                </div>
                <div className="flex justify-between">
                    <span className="text-[1.5rem]">Skip</span>
                    <span className="text-[1.5rem] rounded-3xl bg-darkBlue w-20 text-center text-white ">Next</span>
                </div>
                <br />
            </div>
        </div>
    )
}
export default setup4