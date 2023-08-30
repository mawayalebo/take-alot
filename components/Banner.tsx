'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

function Banner() {
  return (
    <div className="pl-4 pr-1 py-4">
        <Carousel autoPlay showThumbs={false} showStatus={false} showIndicators={true} infiniteLoop={true} interval={5000}>
            <div className="h-[260px]">
                <img src="/images/banner_3.png" className="object-cover h-[260px]"/>
            </div>
            <div className="h-[260px]">
                <img src="/images/banner_2.png" className="object-cover h-[260px]"/>
            </div>
            <div className="h-[260px]">
                <img src="/images/banner_1.png" className="object-cover h-[260px]"/>
            </div>
           
        </Carousel>
    </div>
  )
}
export default Banner