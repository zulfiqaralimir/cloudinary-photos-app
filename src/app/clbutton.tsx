'use client'
import { useState } from 'react'
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import { type } from 'os';

export type UploadResult = {
    event: "success";
    info: {
        public_id: string;
    };

};
export default function CLButton() {
    const [imageId, setImageId] = useState("cld-sample-4")
    return (
        <div>
            <CldUploadButton
                onUpload={(result: UploadResult) => {
                    setImageId(result.info.public_id);
                }}
                uploadPreset="tptvl8hq"
            />
            {imageId && (
                <CldImage
                    width="560"
                    height="200"
                    src={imageId}
                    sizes="100vw"
                    // tint="70:blue:green:purple"
                    alt="Description of my image"
                />
            )}
        </div>
    )
}
