'use client'
import { useState } from 'react'
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { type } from 'os';
import { Button } from '@/components/ui/button';

export type UploadResult = {
    event: "success";
    info: {
        public_id: string;
    };

};
export default function CLButton() {
    const [imageId, setImageId] = useState("cld-sample-4")
    return (

        <section>
            <div className="flex flex justify-between">
                <h1 className="text-4xl font-bold">GALLERY </h1>
                <Button asChild>
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>


                        <CldUploadButton
                            onUpload={(result: UploadResult) => { // setImageId(result.info.public_id);
                            }}
                            uploadPreset="tptvl8hq"
                        />
                    </div>
                </Button>

            </div>
        </section>


        // <div>
        //     <CldUploadButton
        //         onUpload={(result: UploadResult) => {
        //             setImageId(result.info.public_id);
        //         }}
        //         uploadPreset="tptvl8hq"
        //     />
        //     {/* {imageId && (
        //         // <CldImage
        //         //     width="560"
        //         //     height="200"
        //         //     src={imageId}
        //         //     sizes="100vw"
        //         //     // tint="70:blue:green:purple"
        //         //     alt="Description of my image"
        //         // />
        //     )} */}
        // </div>
    )
}
