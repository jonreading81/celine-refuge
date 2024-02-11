import { CarouselClient } from '@app/components/Carousel/Carousel';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';

const PAGE = 'about';

export const generateMetadata = generateMetadataForPage(PAGE);

export default async function About() {
  const client = createClient();
  const page = await client.getByUID('page', PAGE).catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

// export default async function About() {
//   const wixClient = await getWixClient();
//   const {
//     items: [about],
//   } = await wixClient.items
//     .queryDataItems({
//       dataCollectionId: 'About',
//     })
//     .find();

//   return (
//     <div className="relative">
//       <div className="w-full h-[400px] relative">
//         <WixMediaImage
//           priority={true}
//           media={about.data?.mastheadImage}
//           alt="Image showing whatb we are about"
//           sizes="100vw"
//           objectFit="cover"
//           disableZoom={true}
//         />
//       </div>
//       <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
//         <h1 className="text-center py-8 font-site">{about.data!.title}</h1>

//         <div className="py-6 max-w-3xl text-sm mx-auto">
//           <div
//             className="mb-4"
//             dangerouslySetInnerHTML={{ __html: about.data!.intro }}
//           />
//           <div>
//             {about.data?.richcontent && (
//               <WixRichContent nodes={about.data?.richcontent.nodes} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
