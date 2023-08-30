// import puppeteer from 'puppeteer';
// import { NextResponse } from 'next/server';

// interface FeaturedBrand {
//   imgURL: string;
// }

// export async function GET(): Promise<NextResponse> {
//   const featuredBrands: FeaturedBrand[] = await scrapeTakealotFeaturedBrands();
//   return NextResponse.json({ featuredBrands });
// }

// async function scrapeTakealotFeaturedBrands(): Promise<FeaturedBrand[]> {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   try {
//     // Navigate to takealot.com to get featured brands
//     await page.goto('https://www.takealot.com', { timeout: 1200000 });

//     const featuredBrands = await page.$$eval('.brand-logo-link', (brands: any) =>
//       brands.map((brand: any) => {
//         const imgURL = brand.querySelector('div img').src;
        
//         return {
//           imgURL
//         };
//       })
//     );

//     return featuredBrands;
//   } catch (error) {
//     console.error('Error while scraping:', error);
//     return [];
//   } finally {
//     await browser.close();
//   }
// }

// Import the necessary module
import { NextResponse } from "next/server";

// Define the response data
const data = [
  {
    imgURL: "https://media.takealot.com/b/2/cms/p/fit-in/180x120/original_images/HealthBeauty_Brand15.png"
  },
  {
    imgURL: "https://media.takealot.com/b/2/cms/p/fit-in/160x70/original_images/b21ee0fbe4eeff9f534cc0be7bde5deb301584de.png"
  },
  {
    imgURL: "https://media.takealot.com/b/2/cms/p/fit-in/180x120/original_images/Computers_Brand4.png"
  },
  {
    imgURL: "https://media.takealot.com/b/2/cms/p/fit-in/160x70/original_images/8f4a354dba1350887c5de5819976c5a4e2158695.png"
  },
  {
    imgURL: "https://media.takealot.com/b/2/cms/p/fit-in/160x70/original_images/398bc48815c135c0f074174a2a5d4acdb36534ea.png"
  },
  {
    imgURL: "https://media.takealot.com/b/2/cms/p/fit-in/160x70/original_images/de3a814551c3fcce4784d8285b65f7b85e98a063.png"
  },
  {
    imgURL: "https://media.takealot.com/b/2/cms/p/fit-in/160x70/original_images/f09c15d95bfca26585ed659bc61811a723afc469_7cuYiGF.png"
  },
  {
    imgURL: "https://media.takealot.com/b/2/cms/p/fit-in/160x70/original_images/e268dc0cdc00e971ec2c1b4a26ae310bb8a368e1.png"
  }
];

// Define the GET request handler
export async function GET(): Promise<NextResponse> {
  try {
    // Return the data as a JSON response
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error while processing GET request:', error);
    // Return an empty array as the response in case of an error
    return NextResponse.json([]);
  }
}

