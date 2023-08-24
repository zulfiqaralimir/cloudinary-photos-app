// 'use client'

import { UploadResult } from "../clbutton";
import { Button } from "@/components/ui/button";
import cloudinary from "cloudinary";

import Image from 'next/image'

import CLButton from '../clbutton'
import CloundinaryImage from "../gallery/cloudinary-image";
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";


export default async function FavoritesPage() {

    const results = await cloudinary.v2.search
        .expression('resource_type:image AND tags=favorite')
        .sort_by('public_id', 'desc')
        .with_field("tags")
        .max_results(30)
        .execute() as { resources: SearchResult[] };
    console.log(results)

    return (
        <section>
            <ForceRefresh />

            <main className="flex min-h-screen flex-col justify-between p-24">

                <div >
                    <h1 className="text-4xl font-bold">Favorite Images</h1>
                </div>

                <div className='grid grid-cols-4 gap-2 '>

                    {results.resources.map((result) => (
                        <CloundinaryImage
                            path="/gallery"
                            key={result.public_id}
                            imageData={result}
                            width="400"
                            height="300"
                            alt="an image of something" />
                    ))}

                </div>


            </main >
        </section>
    )
}
