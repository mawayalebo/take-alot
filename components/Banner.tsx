'use client'

import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

function Banner() {
  const [bannerAds, setBannerAds] = useState([]);

  useEffect(() => {
    // Fetch banner ads from your API
    fetch('http://localhost:3000/api/bannerads') // Update with your API endpoint
      .then(response => response.json())
      .then(data => {
        // Assuming your API returns an array of banner ad URLs
        setBannerAds(data.bannerAds);
      })
      .catch(error => {
        console.error('Error fetching banner ads:', error);
      });
  }, []);

  return (
    <div className="pl-4 pr-1 py-4">
      <Carousel autoPlay showThumbs={false} showStatus={false} showIndicators={true} infiniteLoop={true} interval={5000}>
        {bannerAds.map((ad: any, index) => (
          <div key={index} className="h-[260px]">
            <img src={ad.adURL} className="object-cover h-[260px]" alt={`Banner Ad ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
