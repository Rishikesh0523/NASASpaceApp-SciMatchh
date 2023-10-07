import { useState, useEffect } from "react";
const Register = (props) => {
    const[formdata, setformdata] = 
    useState(
    {
        fullname:'',
        email :'',
        password : ''
    })
    const {fullname,email,password} = formdata

    const onChange = (e) =>
    {
        setformdata((prevstate)=>({
            ...prevstate,
            [e.target.name] : e.target.value,
        }))
    }
    const onSubmit = (e) =>
    {
        e.preventDefault();
    }
    return (
        <div className="flex w-full mx-auto justify-center align-center items-center p-12">
            <div className="w-[32rem] rounded-3xl p-12 shadow-md border-2 bg-white">
                <div className="flex">
                <h1 className="font-bold text-[30px] w-full text-center">Create a new account</h1>
                <p className="justify-end cursor-pointer " onClick={()=>{props.naam(1)}}>X</p>
                </div>
                <br />
                <br />
                <p>
                    Full Name
                </p>
                <input type="text" value={fullname} name="fullname" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" onChange={onChange}/>
                
                <p className="mt-7">
                    Email
                </p>
                <input type="email" value={email} name="email" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" onChange={onChange}/>
                <p className="mt-7">
                    Password
                </p>
                <input type="password" value={password} name="password" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" onChange={onChange}/>
                <br />
                <br />
                <br />
                <a
                    href="#"
                    class="text-center p-3 px-6 mx-6 pt-2 text-white bg-gradient-to-r from-box_gradient_one via-box_gradient_two to-box_gradient_three rounded-xl hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-400 block"
                >
                    Sign Up
                </a>
                <br />
                <p>Already a member?<a className="cursor-pointer font-bold text-blue-600" onClick={()=>{props.naam(2)}}> Log In </a></p>
            </div>
        </div>
    )
}

export default Register;