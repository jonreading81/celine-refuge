import { CarouselClient } from '@app/components/Carousel/Carousel';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';

const PAGE = 'contact';

export const generateMetadata = generateMetadataForPage(PAGE);

export default async function Contact() {
  const client = createClient();
  const page = await client.getByUID('page', PAGE).catch(() => notFound());

  return (
    <div>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}
// export default async function Page() {
//   return (
//     <div className="relative">
//       <div className="w-full h-[400px] relative">
//         <WixMediaImage
//           media="https://static.wixstatic.com/media/8ad122_27aa0ed95d9e486492ed68822e3213f8~mv2.webp"
//           alt="projects"
//           sizes="100vw"
//           objectFit="cover"
//           disableZoom={true}
//         />
//       </div>
//       <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
//         <h1 className="text-center py-8 font-site">Contact</h1>
//         <div className="max-w-4xl mx-auto">
//           <form className="border-2 border-blue-site p-8">
//             <div className="flex flex-col sm:flex-row sm:gap-12">
//               <div className="basis-1/2">
//                 <label className="text-xs" htmlFor="name">
//                   First name *
//                 </label>
//                 <input
//                   className="input"
//                   type="text"
//                   name="name"
//                   id="name"
//                   required={true}
//                 />
//                 <label className="text-xs" htmlFor="email">
//                   Email *
//                 </label>
//                 <input
//                   className="input"
//                   type="email"
//                   name="email"
//                   id="email"
//                   required={true}
//                 />
//               </div>
//               <div className="basis-1/2">
//                 <label className="text-xs" htmlFor="name">
//                   Last name
//                 </label>
//                 <input className="input" type="text" name="last" id="last" />
//                 <label className="text-xs" htmlFor="phone">
//                   Phone
//                 </label>
//                 <input className="input" type="tel" name="phone" id="phone" />
//               </div>
//             </div>
//             <label className="text-xs" htmlFor="address">
//               Address
//             </label>
//             <input className="input" type="text" name="address" id="address" />
//             <button className="btn-main w-full mt-6 text-xl" type="submit">
//               Apply
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
