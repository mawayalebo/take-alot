import React from 'react'


interface Catalog {
    title: string;
    products: [
      {
        productTitle: string,
        price:{
          now:string,
          list: string
        },
        productThumbLink: string,
        rating: string,
        raters: string,
        saleImg:string,
        salePercentage: string,
  
      }
    ]
  }

  interface Product {
      productTitle: string,
      price:{
        now:string,
        list: string
      },
      productThumbLink: string,
      rating: string,
      raters: string,
      saleImg:string,
      salePercentage: string,

    }

async function getCatalog(): Promise<{ catalog: Catalog[] }> {
    const res = await fetch('http://localhost:3000/api/catalogue', {next:{revalidate:10}});
    return res.json();
  }






export default async function Catalog() {
    const { catalog } = await getCatalog();
  return (
    <section>
        <div className='p-4'>
            <div>
                {
                    catalog && catalog.map((productStrip: any, index: number)=>{
                        return(
                            <div key={index}>
                                <div className='p-4 flex items-center'>
                                    <h3 className='font-bold text-3xl flex-1 text-gray-700'>{productStrip.title}</h3>
                                    <div className='bg-white border-2 border-solid border-gray-700 px-6 py-4 flex justify-center items-center'>
                                        <span className='text-gray-700 font-bold'>View More</span>

                                    </div>
                        
                                </div>
                                <div className='flex p-4 overflow-auto scrollbar-hide space-x-4 items-center'>
                                    {
                                        productStrip.products.map((product:Product, index: number)=>{
                                            return(
                                                <div key={index} className='p-4 w-full'>
                                                    <div>
                                                        <img src={product.productThumbLink} alt="" width={256}  height={256} loading='lazy' />
                                                        <p>{product.productTitle}</p>
                                                        <div>
                                                            <div>
                                                                <span>{product.price.now}</span>
                                                            </div>
                                                            {
                                                                product.price.list &&
                                                                <div>
                                                                    <span>{product.price.list}</span>
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                        
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                            </div>
                        )
                    })
                    
                }
            </div>
            
        </div>

    </section>
  )
}
