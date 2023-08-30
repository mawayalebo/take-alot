import { NextResponse } from "next/server";

export async function GET() {
    const data = [
        {
            name: "Blue Dot Sale",
            bgColour: "bg-indigo-600",
            hoverColour: "hover:bg-indigo-700",
            textColour: "text-white",
            borderXColour: "border-x-transparent",
        },
        {
            name: "Shop Christmas",
            bgColour: "bg-gray-100",
            hoverColour: "hover:bg-gray-200",
            textColour: "text-black",
            borderXColour: "border-x-gray-200",
        },
        {
            name: "Summer",
            bgColour: "bg-gray-100",
            hoverColour: "hover:bg-gray-200",
            textColour: "text-black",
            borderXColour: "border-x-gray-200",
        },
        {
            name: "New To Takealot",
            bgColour: "bg-gray-100",
            hoverColour: "hover:bg-gray-200",
            textColour: "text-black",
            borderXColour: "border-x-gray-200",
        },
        {
            name: "Fashion Outlet",
            bgColour: "bg-gray-100",
            hoverColour: "hover:bg-gray-200",
            textColour: "text-black",
            borderXColour: "border-x-gray-200",
        },
        {
            name: "Exclusive To Takealot",
            bgColour: "bg-gray-100",
            hoverColour: "hover:bg-gray-200",
            textColour: "text-black",
            borderXColour: "border-x-gray-200",
        },
        {
            name: "Brand Stores",
            bgColour: "bg-gray-100",
            hoverColour: "hover:bg-gray-200",
            textColour: "text-black",
            borderXColour: "border-x-gray-200",
        },
        {
            name: "Clearance",
            bgColour: "bg-gray-100",
            hoverColour: "hover:bg-gray-200",
            textColour: "text-black",
            borderXColour: "border-x-gray-200",
        },
    ];

    return NextResponse.json({ data });
}
