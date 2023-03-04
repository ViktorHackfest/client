import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';

export const DestinationCard = ({ destination, key }: any) => {
  console.log(destination);
  return (
    <div key={key} className="shadow-2xl rounded-b-2xl">
      <div>
        <div className="w-80"></div>
        <Image
          src={destination.image}
          alt="City Image"
          width={100}
          height={100}
          className="object-cover w-80 h-44 rounded-t-2xl"
        />
      </div>
      <div className="bg-white p-4 rounded-b-2xl">
        <div className="font-bold">{destination.name}</div>
        <div>{destination.description}</div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-[6px]">
            <AiFillStar className="w-5 h-5 text-yellow-500" />
            {Math.floor(Math.random() * 1 + 4)}.{Math.floor(Math.random() * 9)}
            {Math.floor(Math.random() * 9)}
          </div>
          <div>{Math.floor(Math.random() * 10000 + 1)} reviews</div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <IoLocationSharp className="w-5 h-5" />
            <div>{destination.city.name}</div>
          </div>
          <div>{destination.city.province}</div>
        </div>
        <div>{destination.description}</div>
      </div>
    </div>
  );
};
