'use client'

import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image'

// Define the Brand interface
interface Brand {
  imgURL: string;
}

function Featured() {
  const [featuredBrands, setFeaturedBrands] = useState<Brand[]>([]);
  console.log("state", featuredBrands);
  useEffect(() => {
    async function fetchFeaturedBrands() {
      try {
        const res = await fetch('http://localhost:3000/api/featured');
        const {data} = await res.json();
        console.log("data", data);
        setFeaturedBrands(data); // Set the fetched data to the state
      } catch (error) {
        console.error('Error fetching featured brands:', error);
      }
    }

    fetchFeaturedBrands(); // Call the fetch function
  }, []);

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrowClass:" bg-black p-2"
  };

  return (
    <div className="px-4 py-2">
        <div className='py-2'>
            <h2 className="font-bold text-gray-700">Featured Brands</h2>
        </div>
        <div className="px-4">
            <Slider {...sliderSettings}>
                {featuredBrands.map((brand, index) => (
                    <div key={index} className="px-4 pb-4">
                        <Image src={brand.imgURL} alt={`Brand ${index + 1}`} className="objectfit-contain" height={50} width={150} />
                    </div>
                ))}
            </Slider>

        </div>
      
    </div>
  );
}

export default Featured;
