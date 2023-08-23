'use client'

import { CldImage } from "next-cloudinary"
export function CloundinaryImage(props: any) {
    return < CldImage {...props} />;
}
