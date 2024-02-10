import { CarouselClient } from '@app/components/Carousel/Carousel';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

export default function Home() {
  return (
    <div className="mx-auto relative sm:px-20 py-5">
      <div
        className="flex mt-12 sm:mt-32 sm:gap-12 flex-col sm:flex-row"
        data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <div className="basis-1/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">Our Initiatives</h3>
            <p className="my-6 text-sm">
              Our initiatives bring people together to help solve real problems
              and evoke a positive change. Explore our initiatives and see what
              you can do to help.
            </p>
            <a
              href="/news"
              className="text-purple-site py-6 font-site"
              data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
            >
              Learn more about our projects
            </a>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_615,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
            <h3 className="text-2xl font-site">Our Mission</h3>
            <p className="my-6 text-sm">
              We believe that education is a human right and a powerful tool for
              social change. We provide educational projects, learning resources
              and mentoring programs for kids of all ages and backgrounds. We
              aim to create a world where everyone has the opportunity to learn
              and grow.
            </p>
            <a href="/about" className="text-purple-site py-6 font-site">
              Learn more about our mission
            </a>
          </div>
        </div>
      </div>
      <CarouselClient />
    </div>
  );
}
