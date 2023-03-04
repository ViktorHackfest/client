import Link from 'next/link';
import { TourGuideCard } from './TourGuideCard';

export const NearestTourGuide = ({ tour_guides }: any) => {
  console.log(tour_guides);
  return (
    <div className="bg-white px-10 pb-20">
      <div className="flex justify-between items-center py-4">
        <div className="text-xl font-semibold">Nearest Tour Guide</div>
        <Link href="/user/tour-guide/">
          <div className="text-md text-gray-500 underline">See All</div>
        </Link>
      </div>
      <div className="bg-white flex overflow-x-auto gap-4">
        {tour_guides.map((tour_guide: any, id_tour_guide: number) => (
          <TourGuideCard tour_guide={tour_guide} key={id_tour_guide} />
        ))}
      </div>
    </div>
  );
};
