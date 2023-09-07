import {Bars3Icon, MagnifyingGlassIcon, ChevronDownIcon, ChevronRightIcon, ClockIcon} from "@heroicons/react/24/solid"
import { Departments } from "@/typings.d"
import Link  from "next/link"

async function getDepartments(){
    const res = await fetch('http://localhost:3000/api/departments');
    return res.json();
}

async function getNavModules() {
    try {
      const res = await fetch('http://localhost:3000/api/navmodules', { cache: 'no-cache' });
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }
      
      const data = await res.json(); // Parse the response body as JSON
      console.log("nav modules", data);
      
      return data;
    } catch (error) {
      console.error('Error fetching nav modules:', error);
      return [];
    }
}
  

async function HeaderBottom() {
    const { data: departments } = await getDepartments();
    const { navModules } = await getNavModules();
    console.log(navModules);
  return (
    <div className="bg-blue-600 w-full">
        <div className="max-w-7xl  mx-auto grid grid-cols-10 pt-2 px-4 space-x-4">
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


                <div className="my-2 rounded-md">
                    <ul className="flex items-center justify-center w-full overflow-x-hidden rounded-md scrollbar-hide">
                        {
                            navModules.map((navModule: any, index: any)=>{
                                return(
                                    <li 
                                        key={index}  
                                        id={navModule.id} 
                                        className="w-full flex-1 text-center px-4"
                                    >
                                        <div dangerouslySetInnerHTML={{ __html: navModule.styleElement }} />
                                        <Link href={navModule.href}  
                                            className={`text-xs cursor-pointer whitespace-nowrap flex-1 text-center` }
                                        >
                                            {navModule.title}
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
export default HeaderBottom