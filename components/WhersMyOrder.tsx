function WhersMyOrder() {
  return (
   
    <div className="p-2 bg-white shadow-md cursor-pointer h-fit">
    <div className="relative flex items-center overflow-hidden bg-blue-50 gap-6">
        <div className="absolute bg-[#50bcff] rounded-full w-40 h-40 -left-20 "></div>
        <img src="/images/truck_image.svg" className="objectfit-contain z-10" width={60} height={30}/>
        <div className="flex flex-col p-2 pl-4">
            <h1 className="font-bold whitespace-nowrap">Where's my order?</h1>
            <span className="text-xs">Check your delivery or collection status.</span>
        </div>   
    </div>
</div>
  )
}
export default WhersMyOrder