// 'use client'
// import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../clbutton";
import { Button } from "@/components/ui/button";
import cloudinary from "cloudinary";

import Image from 'next/image'

import CLButton from '../clbutton'
import CloundinaryImage  from "./cloudinary-image";
type SearchResult = { public_id: string }

export default async function GalleryPage() {

    const results = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('public_id', 'desc')
        .max_results(5)
        .execute() as { resources: SearchResult[] };
    console.log(results)

    return (

        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <main className="flex min-h-screen flex-col justify-between p-24">
            {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}

            <CLButton />
            <div className='grid grid-cols-4 gap-2'>
                {results.resources.map((result) => (
                    <CloundinaryImage key={result.public_id}
                        src={result.public_id}
                        width="400"
                        height="300"
                        alt="an image of something" />
                ))}

            </div>

            {/* </div> */}
        </main >
    )
}
