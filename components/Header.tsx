
import Link from "next/link"
import Image from "next/image"
import { ChevronDownIcon, HeartIcon, ShoppingCartIcon, Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"

function Header() {
  return (
    <div className="bg-white w-full py-2 shadow-sm">
        {/* mobile */}
        <div className="flex items-center justify-between md:hidden">
            <div>
                <Bars3Icon  className="text-black h-6 font-bold cursor-pointer"/>
            </div>
            <Link href="/" className="cursor-pointer">
                <Image src={"./logo.svg"} alt={"logo"} width={180} height={37.28} />
            </Link>
            <div className="flex items-center space-x-2" >
                <MagnifyingGlassIcon className="text-black h-6 cursor-pointer" />
                <ShoppingCartIcon className="text-black h-6 cursor-pointer" />
            </div>
        </div>


        {/* medium & large */}
        <div className="hidden md:flex items-center space-x-6 px-4 max-w-6xl mx-auto">
            <Link href="/" className="cursor-pointer">
                <Image src={"./logo.svg"} alt={"logo"} width={180} height={37.28}/>
            </Link>
            <div className="flex items center justify-between w-full">
                <div className="flex items-center">
                    <div className="text-sm lg:border-r-[1px] px-2 cursor-pointer hover:text-blue-600 hover:underline"><span>Help Centre</span></div>
                    <div className="hidden lg:inline-flex text-sm px-2 cursor-pointer hover:text-blue-600 hover:underline"><span>Sell on Takealot</span></div>
                </div>

                <div className="flex items-center justify-end">
                    <div className="text-sm border-r-[1px] px-2 cursor-pointer hover:text-blue-600 hover:underline"><span>Login</span></div>
                    <div className="text-sm border-r-[1px] px-2 cursor-pointer hover:text-blue-600 hover:underline"><span>Register</span></div>
                    <div className="hidden lg:inline-flex text-sm border-r-[1px] px-2 cursor-pointer hover:text-blue-600 hover:underline"><span>Orders</span></div>
                    <div className="text-sm px-2 cursor-pointer flex items-center space-x-2 hover:text-blue-600 group">
                        
                        <span>My Account</span> <ChevronDownIcon className="text-black h-4 group-hover:rotate-180"/>
                        
                        <div className="hidden group-hover:inline absolute bg-white shdow-sm top-12 right-60 w-40 shadow-md p-4">
                            <ul className="text-black flex flex-col space-y-2">
                                <li className="text-sm hover:text-blue-600 hover:underline cursor-pointer">My Account</li>
                                <li className="text-sm hover:text-blue-600 hover:underline cursor-pointer">Track Order</li>
                                <li className="text-sm hover:text-blue-600 hover:underline cursor-pointer">Returns</li>
                                <li className="text-sm hover:text-blue-600 hover:underline cursor-pointer">Credit & Refunds</li>
                                <li className="text-sm hover:text-blue-600 hover:underline cursor-pointer">Product Reviews</li>
                                <li className="text-sm hover:text-blue-600 hover:underline cursor-pointer">Invoices</li>
                                <li className="text-sm hover:text-blue-600 hover:underline cursor-pointer">Personal Details</li>
                                <li className="text-sm hover:text-blue-600 hover:underline cursor-pointer">Help Center</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className=" bg-red-400 p-2 rounded-full hover:cursor-pointer hover:bg-red-500 transition duration-700 ease-in-out">
                            <HeartIcon className=" text-white h-6" />
                        </div>
                        <div className="bg-green-800 rounded-full flex space-x-3 items-center p-2 px-4">
                            <ShoppingCartIcon className="text-white h-6"/>
                            <span className="font-bold text-white text-sm">0</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
export default Header