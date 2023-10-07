import logo from "./assets/SCIMATCH/icons-svg/logow.png";
export default function Header() {
    return (
            <div>
                
            <nav class="bg-head_background w-full mx-auto p-6 h-28">
                {/* <!-- Flex container --> */}
                <div class="flex content-end items-center justify-between">
                    {/* <!-- Logo --> */}
                    <div className="pl-[165px]">
                        <img src={logo} width="200px" alt="" />
                    </div>
                    {/* <!-- Menu Items --> */}
                    <div class="hidden space-x-12 md:flex">
                        <a href="#" class="text-white text-[35px] hover:text-darkGrayishBlue">
                            Home
                        </a>
                        <a href="#" class="text-white text-[35px] hover:text-darkGrayishBlue">
                            Projects
                        </a>
                        <a href="#" class="text-white text-[35px] hover:text-darkGrayishBlue">
                            Resources
                        </a>
                        <a href="#" class="text-white text-[35px] hover:text-darkGrayishBlue">
                            News
                        </a>
                        <a href="#" class="text-white text-[35px] hover:text-darkGrayishBlue">
                            Discussions
                        </a>
                    </div>
                    {/* <!-- Button --> */}
                    <div class="flex justify-between">
                    <a
                        href="#"
                        class="text-[28px] p-3 px-12 mx-6 pt-2 text-white bg-button_color rounded-full baseline hover:bg-button_color_hover block"
                    >
                        Sign Up
                    </a>
                    <a
                        href="#"
                        class="text-[28px] p-3 px-12 pt-2 text-white bg-button_color rounded-full baseline hover:bg-button_color_hover block"
                    >
                        Log In
                    </a>
                    </div>
                </div>

                
            </nav>
            </div>
    );
}
