import { NextResponse } from "@/next/server"

export type Departments = NextResponse<[String]>

export interface Department = {
    titile: String
}

 export interface Advert{
    adURL: string;
}
