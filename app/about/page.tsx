import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import { WixRichContent } from '@app/components/WixRichContent/WixRichContent';
import { getWixClient } from '@app/hooks/useWixClientServer';

import testIds from '@app/utils/test-ids';

export default async function About() {
  const wixClient = await getWixClient();
  const {
    items: [about],
  } = await wixClient.items
    .queryDataItems({
      dataCollectionId: 'About',
    })
    .find();

  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          priority={true}
          media={about.data?.mastheadImage}
          alt="Image showing whatb we are about"
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">{about.data!.title}</h1>

        <div className="py-6 max-w-3xl text-sm mx-auto">
          <div
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: about.data!.intro }}
          />
          <div>
            {about.data?.richcontent && (
              <WixRichContent nodes={about.data?.richcontent.nodes} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
