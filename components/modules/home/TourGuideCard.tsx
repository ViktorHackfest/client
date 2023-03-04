import Image from 'next/image';

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
        <div>
          <span>{tour_guide.city.name}</span>
        </div>
        <div>{tour_guide.city.province}</div>
      </div>
    </div>
  );
};
