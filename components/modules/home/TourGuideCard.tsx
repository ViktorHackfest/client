import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';

export const TourGuideCard = ({ tour_guide, key }: any) => {
  return (
    <div key={key} className="shadow-xl rounded-b-2xl">
      <div>
        <div className="w-60"></div>
        <Image
          src={tour_guide.city.image}
          alt="City Image"
          width={100}
          height={100}
          className="object-cover w-60 h-40 rounded-t-2xl"
        />
      </div>
      <div className="p-4">
        <div className="font-bold">Eugenius Mario</div>
        <div className="h-2"></div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-[6px]">
            <AiFillStar className="w-5 h-5 text-yellow-500" />
            {Math.floor(Math.random() * 1 + 4)}.{Math.floor(Math.random() * 9)}
            {Math.floor(Math.random() * 9)}
          </div>
          <div>{Math.floor(Math.random() * 10000 + 1)} reviews</div>
        </div>
        <div className="flex gap-[1px] items-center">
          <IoLocationSharp className="w-5 h-5" />
          <span>{tour_guide.city.name}</span>
        </div>
        <div>{tour_guide.city.province}</div>
      </div>
    </div>
  );
};
