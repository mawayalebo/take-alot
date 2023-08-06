import {Bars3Icon, MagnifyingGlassIcon, ChevronDownIcon, ChevronRightIcon, ClockIcon} from "@heroicons/react/24/solid"
import { Departments } from "@/typings.d"
import Link  from "next/link"

async function getDepartments(){
    const res = await fetch('http://localhost:3000/api/departments');
    return res.json();
}

async function getThirdparty(){
    const res = await fetch('http://localhost:3000/api/thirdparty',{ cache: 'no-cache'});
    return res.json();
}

async function BodyTop() {
    const { data: departments } = await getDepartments();
    const { data: thirdpartyData } = await getThirdparty();
  return (
    <div className="bg-blue-600 w-full">
        <div className="max-w-6xl  mx-auto grid grid-cols-10 pt-2 px-4 space-x-4">
            <div className="hidden lg:inline-grid lg:col-span-2">
            <div className="relative"> 
                    <div className="bg-gray-700 p-2 rounded-t-md flex items-center justify-between">
                        <span className="text-white text-sm font-semibold flex-1 text-left whitespace-nowrap">Shop by Department</span>
                        <ChevronDownIcon className="h-4 text-white absolute right-2" />
                    </div>
                    <div className="absolute flex flex-col bg-white shadow-md w-full">

                        <div className="flex flex-col py-2">
                            {
                                departments.map((data: Departments, index: any)=> (
                                    <div key={index} className="group flex items-center px-2 py-[2px] cursor-pointer  hover:bg-[#0b79bf] hover:text-white">
                                        <span className="text-gray-600 text-xs flex-1 group-hover:text-white">{data}</span>
                                        <ChevronRightIcon className="h-4 text-gray-600 ml-2 group-hover:text-white" />
                                    </div>
                                ))
                            }
                            
                        </div>

                        <div className="flex justify-center items-cente bg-[#0fcc5e] p-2 space-x-2 items-center">
                            <ClockIcon className="h-4 text-white" />
                            <h1 className="uppercase text-white font-bold">Daily Deals</h1>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="hidden md:col-span-10 md:inline-grid lg:col-span-8 lg:inline-grid">
                <div className="flex items-center">
                    <Bars3Icon className="hidden md:inline-flex lg:hidden text-white h-6 cursor-pointer pr-4" />
                    <div className="flex flex-grow items-center">
                        <input role="search" className="flex-grow px-2 py-1 text-sm rounded-l-md !border-0 !ring-0 !outline-none ring-inset-0" type="search" placeholder="Search for products, brands..." />
                        <div className="bg-slate-700 rounded-r-md py-1 px-4 cursor-pointer">
                            <MagnifyingGlassIcon className="h-6 text-white"/>
                        </div>
                    </div>
                </div>


                <div className="py-2">
                    <ul className="flex items-center overflow-x-hidden rounded-md ">
                        {
                            thirdpartyData.map((thirdparty: any, index: any)=>{
                                return(
                                    <li 
                                        key={index} 
                                        className={`px-2 py-1 ${thirdparty.bgColour} ${thirdparty.textColour}  ${thirdparty.hoverColour} text-sm cursor-pointer flex-1 whitespace-nowrap text-center border-x border-x-[1]  ${thirdparty.borderXColour}` }
                                    >
                                        <Link  href=""  >
                                            {thirdparty.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>

                </div>

            </div>

        </div>
    </div>
  )
}
export default BodyTop