import { NextRequest, NextResponse} from "@/next/server";


const getDept = (req: NextRequest, res: NextResponse) =>{
    const data = ["Automotive & DIY",
     "Baby & Toddler",
     "Beauty",
     "Books & Courses",
     "Camping & Outdoor",
     "Cellphones & Wearables",
     "Fashion & Luggage",
     "Computers & Electronics",
     "Gaming",
     "Garden", "Pool & Patio",
     "Groceries & Household",
     "Health & Personal Care",
     "Home & Appliances",
     "Liquor",
     "Office & Stationery",
     "Pets",
     "Sport & Training",
     "Toys",
     "TV, Audio & Media"
     ];
    res.status(200).json(data);
 }

 const thirdParty = (req: NextRequest, res: NextResponse) =>{
    const data = [
        "Blue Dot Sale", "Shop Christmas", "Summer", "New To Takealot", "Fashion Outlet", "Exclusive To Takealot", "Brand Stores", "Clearance"
     ];
     return res.status(200).json(data);
 }

 export { getDept, thirdParty }