'use client'

import Heart from "@/components/ui/icons/heart"
import { CldImage } from "next-cloudinary"
import { startTransition, useTransition } from "react";
import setAsFavoriteAction from "./actions";
import { SearchResult } from "./page";
import FullHeart from "@/components/ui/icons/full-heart";
import path from "path";

export default function CloundinaryImage(props: any & { imageData: SearchResult; path: string }) {

    const [transition, startTransition] = useTransition();

    const { imageData } = props;
    const isFavorited = imageData.tags.includes("favorite");
    return (
        <div className="relative">
            < CldImage {...props}
                src={imageData.public_id} />;
            {isFavorited ? (
                <FullHeart onClick={() => {

                    startTransition(() => {
                        setAsFavoriteAction(imageData.public_id, false, props.path);
                    });
                }}
                    className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer" />
            )
                :
                (
                    <Heart onClick={() => {
                        startTransition(() => {
                            setAsFavoriteAction(imageData.public_id, true, props.path);
                        });
                    }}
                        className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
                    />
                )}
        </div>
    )

}
