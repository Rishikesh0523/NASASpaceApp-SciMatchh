import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

export default function Login() {
    const [formdata, setformdata] =
        useState(
            {
                email: '',
                password: ''
            })
    const { email, password } = formdata

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth);

    useEffect(() => {
        if(isError) toast.error(message);
        if(isSuccess && user) navigate('/homepage');
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setformdata((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email,
            password
        }
        dispatch(login(userData))
    }
    return (
        <div className="bg-slate-800 w-screen h-screen flex items-center justify-center">
            <div className=" bg-white w-1/4 p-12 rounded-3xl shadow shadow-slate-300">
                <div className="flex">
                    <Link to='/' className="justify-start cursor-pointer text-5xl font-bold"> ← </Link>
                    <h1 className="font-bold text-[30px] w-full text-center">Login</h1>
                </div>
                <form onSubmit={onSubmit} className="my-2">
                    <div className="flex flex-col space-y-5">
                        <p className="mt-7">
                            Email
                        </p>
                        <input type="email" value={email} name="email" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" onChange={onChange} />
                        <p className="mt-7">
                            Password
                        </p>
                        <input type="password" value={password} name="password" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" onChange={onChange} />
                        <br />
                        <button type="submit" className="w-full py-3 font-medium text-white bg-gradient-to-r from-box_gradient_one via-box_gradient_two to-box_gradient_three hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-400 rounded-xl hover:shadow inline-flex space-x-2 items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>Login</span>
                        </button>
                        <div>
                            <p className="text-center"> Not registered yet? </p>
                            <div className="text-indigo-600 font-medium flex space-x-1 items-center justify-center cursor-pointer mt-1">
                                <Link to='/register' className="text-center"> Register now </Link>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}