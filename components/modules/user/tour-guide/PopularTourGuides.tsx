import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';

type PopularTourGuideProps = {
  tour_guides: any;
};

export const PopularTourGuides = ({ tour_guides }: PopularTourGuideProps) => {
  return (
    <>
      <div className="pt-10 px-8 font-bold text-3xl text-center">
        Popular Tour Guides
      </div>
      <div className="flex justify-center px-8 pt-10 pb-20">
        <div className="flex flex-col gap-10">
          {tour_guides.map((tour_guide: any, id_tour_guide: number) => (
            <div key={id_tour_guide} className="bg-white rounded-2xl shadow-xl">
              <Link href={`/user/tour-guide/${tour_guide.id}`}>
                <div>
                  <div className="w-60"></div>
                  <Image
                    src={tour_guide.city.image}
                    alt="City Image"
                    width={100}
                    height={100}
                    className="object-cover w-96 h-40 rounded-t-2xl"
                  />
                </div>
                <div className="p-4">
                  <div className="font-bold">Eugenius Mario</div>
                  <div className="h-2"></div>
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-[6px]">
                      <AiFillStar className="w-5 h-5 text-yellow-500" />
                      {Math.floor(Math.random() * 1 + 4)}.
                      {Math.floor(Math.random() * 9)}
                      {Math.floor(Math.random() * 9)}
                    </div>
                    <div>{Math.floor(Math.random() * 10000 + 1)} reviews</div>
                  </div>
                  <div className="flex gap-[1px] items-center">
                    <IoLocationSharp className="w-5 h-5" />
                    <span>{tour_guide.city.name}</span>
                  </div>
                  <div>{tour_guide.city.province}</div>
                  <div className="flex gap-2 py-2">
                    <div className="bg-red-400 text-white rounded-xl px-2">
                      Online Tour
                    </div>
                    <div className="bg-red-400 text-white rounded-xl px-2">
                      Offline Tour
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
