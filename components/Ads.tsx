import { FC } from 'react';
import { Advert } from '@/typings.d';

interface AdProps {
  ads: Advert[];
  fromTo:{
    start: number,
    end: number,
  }
}


const Ads: FC<AdProps> = ({ ads, fromTo }) => {
  return (
    <div className="flex flex-col gap-4 y-2">
      {
        ads && ads.slice(fromTo.start, fromTo.end).map((ad, index)=>{
          return(
            <div key={index} className=" p-2 bg-white shadow-md">
              <img src={ad.adURL} alt={"advert no"+ index.toString} />
            </div>
          )
        })
      }
    </div>
  );
};

export default Ads;
