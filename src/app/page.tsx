import Image from 'next/image'
import cloudinary from "cloudinary";
import { CloundinaryImage } from './gallery/cloudinary-image';

import CLButton from './clbutton'
type SearchResult = {
  public_id: string
}
export default function Home() {
  // const results = await cloudinary.v2.search
  //   .expression('resource_type:image')
  //   .sort_by('public_id', 'desc')
  //   .max_results(60)
  //   .execute() as { resources: SearchResult[] };
  // console.log(results)

  return (

    <div>
      Welcome
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

    //     <CLButton />
    //     <div className='grid grid-cols-4 gap-4'>
    //       {results.resources.map((result) => (
    //         <CloundinaryImage key={result.public_id}
    //           src={result.public_id}
    //           width="400"
    //           height="300"
    //           alt="an image of something" />
    //       ))}
    //     </div>

    //   </div>
    // </main>
  )
}
