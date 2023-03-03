import Image from 'next/image';

type CitiesContainerProps = {
  cities: any;
};

export const CitiesContainer = ({ cities }: CitiesContainerProps) => {
  return (
    <div>
      {cities.map((city: any, id_city: number) => (
        <div key={id_city}>
          <div>{city.id}</div>
          <div>{city.name}</div>
          <div>{city.province}</div>
          <div>{city.lat}</div>
          <div>{city.lng}</div>
          <div>
            <Image
              src={city.image}
              alt="Destination Photo"
              width={100}
              height={100}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
