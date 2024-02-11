import { CarouselClient } from '@app/components/Carousel/Carousel';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';

const PAGE = 'home';

export const generateMetadata = generateMetadataForPage(PAGE);

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID('page', PAGE).catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

// export default function Home() {
//   return (
//     <div>
//       <div className="relative">
//         <div className="w-full h-[300px] relative">
//           <WixMediaImage
//             media="https://static.wixstatic.com/media/8ad122_27aa0ed95d9e486492ed68822e3213f8~mv2.webp"
//             alt="projects"
//             sizes="100vw"
//             objectFit="cover"
//             disableZoom={true}
//           />
//         </div>
//       </div>
//       <div className="mx-auto relative sm:px-20 py-5">
//         <div
//           className="flex mt-12 sm:mt-28 sm:gap-12 flex-col sm:flex-row"
//           data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
//         >
//           <div className="basis-1/3">
//             <div className="h-[370px] relative">
//               <WixMediaImage
//                 media="https://static.wixstatic.com/media/8ad122_22cc5ee3edcd46beb0f751469c21e050~mv2.webp"
//                 objectFit="cover"
//                 sizes="50vw"
//                 disableZoom={true}
//               />
//             </div>
//             <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
//               <h3 className="text-2xl font-site">Our Initiatives</h3>
//               <p className="my-6 text-sm">
//                 For me, sharing a table and sleeping quarters with a young
//                 family I had just met, in a place I&apos;d only decided to trek
//                 to on a spur of the moment whim, was a warm and intimate
//                 experience that&apos;s rarely encountered, and one I won&apos;t
//                 soon forget
//               </p>
//               <a
//                 href="/news"
//                 className="text-purple-site py-6 font-site"
//                 data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
//               >
//                 Learn more about our projects
//               </a>
//             </div>
//           </div>
//           <div className="basis-2/3">
//             <div className="h-[370px] relative">
//               <WixMediaImage
//                 media="https://static.wixstatic.com/media/8ad122_27aa0ed95d9e486492ed68822e3213f8~mv2.webp"
//                 objectFit="cover"
//                 sizes="100vw"
//                 disableZoom={true}
//               />
//             </div>
//             <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
//               <h3 className="text-2xl font-site">Our Mission</h3>
//               <p className="my-6 text-sm">
//                 For me, sharing a table and sleeping quarters with a young
//                 family I had just met, in a place I&apos;d only decided to trek
//                 to on a spur of the moment whim, was a warm and intimate
//                 experience that`s rarely encountered, and one I won&apos;t soon
//                 forget
//               </p>
//               <a href="/about" className="text-purple-site py-6 font-site">
//                 Learn more about our mission
//               </a>
//             </div>
//           </div>
//         </div>
//         <CarouselClient />
//       </div>
//     </div>
//   );
// }
