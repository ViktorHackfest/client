import Image from 'next/image';
import Link from 'next/link';

type CitiesContainerProps = {
  cities: any;
};

export const CitiesContainer = ({ cities }: CitiesContainerProps) => {
  return (
    <div className="flex flex-wrap px-8 mb-20">
      {cities.map((city: any, id_city: number) => (
        <Link key={id_city} href="/travel/destinations/">
          <div className="m-6">
            <div className="bg-background_global relative overflow-hidden rounded-lg cursor-pointer w-[120px]">
              <Image
                className="object-cover w-full h-64 scale-125"
                src={city.image}
                alt="City Image"
                width={100}
                height={100}
              />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="mb-3 text-xl font-semibold tracking-tight text-white">
                  {city.name}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
