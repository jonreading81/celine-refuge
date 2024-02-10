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

  console.log(about.data.mastheadImage);

  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          priority={true}
          media={about.data.mastheadImage}
          alt="Image showing whatb we are about"
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">{about.data!.title}</h1>

        <div
          className="py-6 max-w-3xl text-sm mx-auto"
          dangerouslySetInnerHTML={{ __html: about.data!.intro }}
        />

        <WixRichContent richcontent={about.data.richcontent} />

        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          ChoosEquality is a non-profit organization that aims to bring
          education to everyone, regardless of age, background, or location. We
          believe that education is a human right and a powerful force for
          positive change in the world. We provide training, tools, resources,
          and support to help schools achieve their educational goals and
          aspirations. We also advocate for policies and reforms that promote
          quality education for all.
        </p>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          We envision a world where everyone has the opportunity to learn, grow,
          and thrive. Our mission is to empower people and communities with the
          knowledge and skills they need to create a better future for
          themselves and others.
        </p>
      </div>
    </div>
  );
}
