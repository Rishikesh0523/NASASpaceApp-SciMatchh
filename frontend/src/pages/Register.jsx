import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

const Register = () => {
  const [formdata, setformdata] =
    useState(
      {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
  const { name, email, password, confirmPassword } = formdata;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth);

  useEffect(() => {
    if(isError) toast.error(message);
    if(isSuccess || user) navigate('/dashboard');
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

    if (password !== confirmPassword) toast.error('Passwords to not match.')
    else {
      const userData = {
        name,
        email,
        password
      };
      dispatch(register(userData));
    }
  }
  return (
    <div className="flex w-screen h-screen mx-auto justify-center align-center items-center p-12 bg-slate-800">
      <form onSubmit={onSubmit} className="w-[32rem] rounded-3xl p-12 shadow-md border-2 bg-white">
        <div className="flex">
          <Link to='/' className="justify-start cursor-pointer text-5xl font-bold"> ← </Link>
          <h1 className="font-bold text-[30px] w-full text-center mt-1">Create a new account</h1>
        </div>
        <br />
        <br />
        <p>
          Name
        </p>
        <input type="text" value={name} name="name" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" onChange={onChange} />

        <p className="mt-7">
          Email
        </p>
        <input type="email" value={email} name="email" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" onChange={onChange} />
        <p className="mt-7">
          Password
        </p>
        <input type="password" value={password} name="password" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" onChange={onChange} />
        <p className="mt-7">
          Confirm Password
        </p>
        <input type="password" value={confirmPassword} name="confirmPassword" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" onChange={onChange} />
        <br />
        <br />
        <br />
        <div className="w-full flex flex-col items-center"> 
          <button
            type="submit"
            className="text-center w-full p-3 px-6 mx-6 pt-2 text-white bg-gradient-to-r from-box_gradient_one via-box_gradient_two to-box_gradient_three rounded-xl hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-400 block"
          >
            Sign Up
          </button>
          <br />
          <p>Already a member?<Link to='/login' className="cursor-pointer font-bold text-blue-600"> Log In </Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register;