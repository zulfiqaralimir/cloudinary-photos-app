// 'use client'
import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../clbutton";
import { Button } from "@/components/ui/button";
import cloudinary from "cloudinary";


import Image from 'next/image'

import CLButton from '../clbutton'
import { CloundinaryImage } from "./cloudinary-image";
type SearchResult = {
    public_id: string
}

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





        // <section>
        //     <div className="flex justify-between">
        //         <h1 className="text-4xl font-bold">GALLERY </h1>
        //         <Button asChild>
        //             <div className="flex gap-2">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        //                 </svg>


        //                 <CldUploadButton
        //                     onUpload={(result: UploadResult) => {
        //                         // setImageId(result.info.public_id);
        //                     }}
        //                     uploadPreset="tptvl8hq"
        //                 />
        //             </div>
        //         </Button>

        //     </div>
        // </section>
    )
}
