import { CarouselClient } from '@app/components/Carousel/Carousel';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';

const PAGE = 'news';

export const generateMetadata = generateMetadataForPage(PAGE);

export default async function News() {
  const client = createClient();
  const page = await client.getByUID('page', PAGE).catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}
// export default async function News() {
//   const wixClient = await getWixClient();
//   const { items } = await wixClient.items
//     .queryDataItems({
//       dataCollectionId: 'News',
//     })
//     .find();

//   return (
//     <div className="relative">
//       <div className="w-full h-[400px] relative">
//         <WixMediaImage
//           media="https://static.wixstatic.com/media/8ad122_27aa0ed95d9e486492ed68822e3213f8~mv2.webp"
//           alt="news"
//           sizes="100vw"
//           objectFit="cover"
//           disableZoom={true}
//         />
//       </div>
//       <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
//         <h1
//           className="text-center py-8 text-blue-site font-site"
//           data-testid={testIds.NEWS_PAGE.HEADER}
//         >
//           News & Updates
//         </h1>
//         <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
//           Read the latest news and stay up to date about the refuges and any
//           upcoming events.
//         </p>
//         <div
//           className="grid grid-cols-1 sm:grid-cols-3 gap-7 grid-flow-row mt-10"
//           data-testid={testIds.NEWS_PAGE.NEWS_LIST}
//         >
//           {items!.map((item) => (
//             <div
//               key={item._id}
//               className="relative border"
//               data-testid={testIds.NEWS_PAGE.NEWS_ITEM_CONTAINER}
//             >
//               <div className="h-[320px] relative">
//                 <WixMediaImage
//                   media={item.data!.image}
//                   alt={item.data!.title}
//                   objectFit="cover"
//                   disableZoom={true}
//                 />
//                 {item.data!.date && (
//                   <span className="bg-blue-site text-white px-6 py-2 absolute bottom-[-20px]">
//                     {formatDate(new Date(item.data!.date))}
//                   </span>
//                 )}
//               </div>
//               <div className="bg-white relative mt-10 px-8 pb-10">
//                 <h2 className="mb-10 font-site">{item.data!.title}</h2>
//                 <p className="text-sm mb-6">{item.data!.short_description}</p>
//                 <a
//                   data-testid={testIds.NEWS_PAGE.NEWS_ITEM_CTA}
//                   href={`/news/${item.data!.slug}`}
//                   className="text-purple-site py-6 font-site"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
