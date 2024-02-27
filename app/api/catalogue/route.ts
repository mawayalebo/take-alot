import puppeteer from 'puppeteer';
import { NextResponse } from 'next/server';

interface Catalog {
  title: string;
  products: string[]; // You can use a more structured product interface if needed
}

export async function GET(): Promise<NextResponse> {
  
  const catalog: Catalog[] = await scrapeTakealotCatalog(startIndex, endIndex);
  return NextResponse.json({ catalog });
}

// async function scrapeTakealotCatalog(): Promise<Catalog[]> {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
  
//   try {
//     // Navigate to takealot.com or specific category page
//     await page.goto('https://www.takealot.com', { timeout: 1200000 });
//     const startIndex = 0
//     const catalog = await page.$$eval('.product-strip-title', (titleElements: any) =>
//       titleElements.map((titleElement: any) => {
//         const title = titleElement.querySelector('h2').innerText; 
//         const products = Array.from(
//           document.querySelectorAll('.product-card')
          
//         ).slice(0,9).map((productElement: any) => {
//           const productTitle = productElement.querySelector('.card-section a h4.product-title').innerText;
          
//           return productTitle;
          
//         });

        

//         return {
//           title,
//           products,
//         };
//       })
//     );

//     return catalog;
//   } catch (error) {
//     console.error('Error while scraping:', error);
//     return [];
//   } finally {
//     await browser.close();
//   }
// }
let startIndex = 0;
let endIndex = 10;
async function scrapeTakealotCatalog(startIndex: number, endIndex: number): Promise<Catalog[]> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
 
  try {
    // Navigate to takealot.com or specific category page
    await page.goto('https://www.takealot.com', { timeout: 1200000 });
    
    const catalog = await page.$$eval('.product-strip-title', (titleElements: any, startIndex: number, endIndex: number) =>
      titleElements.map((titleElement: any) => {
        const title = titleElement.querySelector('h2').innerText; 
        
        const products = Array.from(
          document.querySelectorAll('.product-card')
        ).slice(startIndex, endIndex).map((productElement: any) => {
          const productTitle = productElement.querySelector('.card-section a h4.product-title').innerText;
          return productTitle;
        });
        startIndex += 10
        endIndex += 9
        return {
          title,
          products,
        };
      }), startIndex, endIndex);

    return catalog;
  } catch (error) {
    console.error('Error while scraping:', error);
    return [];
  } finally {
    await browser.close();
  }
}

// Example usage:



















