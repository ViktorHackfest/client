import Image from 'next/image';
import Link from 'next/link';

export const CitiesContainerOverflow = ({ cities }: any) => {
  return (
    <>
      <div className="px-8 text-xl font-bold mb-4">
        Look up for each local area&apos;s rules
      </div>
      <div className="flex px-6 flex overflow-x-auto">
        {cities.map((city: any, id_city: number) => (
          <Link key={id_city} href="/travel/destinations/">
            <div className="mx-2">
              <div className="bg-background_global relative overflow-hidden cursor-pointer w-[150px] rounded-2xl">
                <Image
                  className="object-cover w-full h-40 scale-125"
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
    </>
  );
};
