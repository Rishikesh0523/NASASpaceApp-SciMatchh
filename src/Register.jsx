const Register = () => {
    return (
        <div className="flex w-full mx-auto justify-center align-center items-center p-12">
            <div className="w-[32rem] rounded-3xl p-12 shadow-md border-2 bg-white">
                <h1 className="font-bold text-[30px] w-full text-center">Create a new account</h1>
                <br />
                <br />
                <p>
                    Full Name
                </p>
                <input type="text" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" />
                
                <p className="mt-7">
                    Email
                </p>
                <input type="email" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" />
                <p className="mt-7">
                    Password
                </p>
                <input type="password" className="w-full pl-2 h-9 border-lightBlue items-center mt-2 border-b-2 hover:border-2 hover:rounded-md hover:shadow-md" />
                <br />
                <br />
                <br />
                <a
                    href="#"
                    class="text-center p-3 px-6 mx-6 pt-2 text-white bg-darkBlue rounded-xl hover:bg-darkGrayishBlue block"
                >
                    Sign Up
                </a>
                <p className="m-2 text-center font-bold text-xl">OR</p>
                <a
                    href="#"
                    class=" text-center border-2 p-3 px-6 mx-6 pt-2 border-darkBlue rounded-xl hover:bg-darkGrayishBlue block"
                >
                    <div className="flex justify-center align-center items-center">
                        <img src="./assets/google_logo.svg" alt="Google Logo" className="mr-3 w-[14px] h-[14px]"/>
                        <p>Sign Up With Google</p>
                    </div>
                </a>
                <br />
                <p>Already a member?<a href="#"> Log In </a></p>
            </div>
        </div>
    )
}

export default Register;