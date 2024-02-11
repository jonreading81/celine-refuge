import { CarouselClient } from '@app/components/Carousel/Carousel';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';

type Params = { slug: string };

export const generateMetadata = async ({ params }: { params: Params }) => {
  return generateMetadataForPage(params.slug);
};

export default async function News({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID('page', params.slug)
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}
// export default async function New({ params }: any) {
//   const wixClient = await getWixClient();
//   const { items } = await wixClient.items
//     .queryDataItems({
//       dataCollectionId: 'News',
//     })
//     .eq('slug', params.slug)
//     .find();
//   const item = items![0];

//   return (
//     <div className="relative" data-testid={testIds.NEWS_DETAILS_PAGE.CONTAINER}>
//       <div className="w-full h-[400px] relative">
//         <WixMediaImage
//           media={item.data!.image}
//           alt={item.data!.title}
//           objectFit="cover"
//           sizes="100vw"
//           disableZoom={true}
//         />
//       </div>
//       <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20 text-center">
//         <h1 className="py-8 font-site">{item.data!.title}</h1>

//         <div className="py-6 max-w-3xl text-sm mx-auto">
//           <p dangerouslySetInnerHTML={{ __html: item.data!.intro }} />

//           <div>
//             {item.data?.body && (
//               <WixRichContent nodes={item.data?.body.nodes} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
