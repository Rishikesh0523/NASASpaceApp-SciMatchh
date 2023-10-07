import { useState, useEffect } from "react";
export default function Login(props) {
    const[formdata, setformdata] = 
    useState(
    {
        email :'',
        password : ''
    })
    return (
        
        <div className="fixed w-full h-screen backdrop-blur-md">
            <div className="max-w-lg mx-auto my-10 bg-white p-12 rounded-xl shadow shadow-slate-300">
                <div className="flex justify-between">
                <h1 className="text-4xl font-medium">Login</h1>
                <p className="justify-end cursor-pointer" onClick={()=>{props.naam(1)}}>X</p>
                </div>

                <p className="pt-6 text-slate-500">Hi, Welcome back 👋</p>

                <div className="my-5">
                    <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
                    </button>
                </div>

                <form action="" className="my-10">
                    <div className="flex flex-col space-y-5">

                        <label for="email">
                            <p className="font-medium text-slate-700 pb-2">Email address</p>
                            <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                        </label>

                        <label for="password">
                            <p className="font-medium text-slate-700 pb-2">Password</p>
                            <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                        </label>

                        <div className="flex flex-row justify-between">
                            <div>
                                <label for="remember" className="flex">
                                    <input type="checkbox" id="remember" className="mr-2 mt-1 w-4 h-4 border-slate-200 focus:bg-indigo-600" />
                                    <span>Remember me</span>

                                </label>
                            </div>
                            <div>
                                <a href="#" className="font-medium text-indigo-600">Forgot Password?</a>
                            </div>
                        </div>

                        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>Login</span>
                        </button>

                        <p className="text-center"> Not registered yet? 
                            <a href="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                                <span onClick={()=>{props.naam(3)}}>Register now </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </a>
                        </p>
                    </div>
                </form>

            </div>
        </div>
        
    )
}