import puppeteer from 'puppeteer';
import { NextResponse } from 'next/server';

interface Catalog {
  title: string;
  products: string[]; // You can use a more structured product interface if needed
}

export async function GET(): Promise<NextResponse> {
  const catalog: Catalog[] = await scrapeTakealotCatalog();
  return NextResponse.json({ catalog });
}

async function scrapeTakealotCatalog(): Promise<Catalog[]> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // Navigate to takealot.com or specific category page
    await page.goto('https://www.takealot.com', { timeout: 1200000 });

    const catalog = await page.$$eval('.product-strip-title', (titleElements: any) =>
      titleElements.map((titleElement: any) => {
        const title = titleElement.querySelector('h2').innerText;
        const products = Array.from(
          document.querySelectorAll('.product-card')
        ).map((productElement: any) => {
          // Extract product information
          const productName = productElement.querySelector('.product-title').innerText;
          return productName;
        });

        return {
          title,
          products,
        };
      })
    );

    return catalog;
  } catch (error) {
    console.error('Error while scraping:', error);
    return [];
  } finally {
    await browser.close();
  }
}
