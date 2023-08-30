import Ads from "./Ads"
import Banner from "./Banner"
import Featured from "./Featured"
import WhersMyOrder from "./WhersMyOrder"
import { Advert } from '@/typings.d'
import { useEffect, useState } from 'react'


async function getAdverts(): Promise<{ ads: Advert[] }> {
  const res = await fetch('http://localhost:3000/api/ads',{cache: "no-cache"});
  console.log("resssssssss", res)
  return res.json();
}

async function BodyTop() {

  const { ads } = await getAdverts();
  console.log("ads", ads)

  return (
    <div>
        <div className="grid grid-cols-10 mx-auto max-w-6xl space-x-4">
            <div className="hidden lg:inline-grid lg:col-span-2"></div>
            <div className="hidden md:col-span-10 lg:col-span-5 md:flex flex-col pb-4">
                <Banner/>
                <Featured/>
            </div>
            <div className="hidden lg:grid lg:col-span-3 pr-4 pl-1 py-4 space-y-4">
                <WhersMyOrder/>
                <Ads  
                  fromTo={{
                    start: 2,
                    end: ads.length
                  }}  
                  ads={ads}
                />
            </div>

        </div>
    </div>
  )
}
export default BodyTop