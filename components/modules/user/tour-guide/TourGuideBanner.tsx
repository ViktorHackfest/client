import Image from 'next/image';

export const TourGuideBanner = () => {
  return (
    <div className="relative overflow-hidden cursor-pointer">
      <Image
        src="/assets/images/tour-guide-banner.svg"
        alt="City Image"
        width={100}
        height={100}
        className="object-cover w-full"
      />
      <div className="absolute top-3/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="mb-3 text-xl font-semibold tracking-tight text-white">
          <div className="text-4xl font-bold py-2">Tripfolk</div>
          <div className="text-4xl font-bold pb-4">Tour Guide</div>
          <div className="font-light">Hassle-free travel experience</div>
          <div className="font-light">with 1-on-1 tour guiding</div>
        </div>
      </div>
    </div>
  );
};
