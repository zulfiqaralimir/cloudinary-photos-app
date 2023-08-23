'use client'

import Heart from "@/components/ui/icons/heart"
import { CldImage } from "next-cloudinary"
export default function CloundinaryImage(props: any) {
    return (
        <div>
            < CldImage {...props} />;
            <Heart />
        </div>
    )

}
