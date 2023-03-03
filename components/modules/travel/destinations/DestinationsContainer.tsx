import Image from 'next/image';

type DestinationsContainerProps = {
  destinations: any;
};

export const DestinationsContainer = ({
  destinations,
}: DestinationsContainerProps) => {
  return (
    <div>
      {destinations.map((destination: any, id_destination: number) => (
        <div key={id_destination}>
          <div>{destination.id}</div>
          <div>{destination.name}</div>
          <div>
            <div>{destination.city.id}</div>
            <div>{destination.city.name}</div>
            <div>{destination.city.province}</div>
            <div>{destination.city.lat}</div>
            <div>{destination.city.lng}</div>
          </div>
          <div>{destination.description}</div>
          <div>
            <Image
              src={destination.image}
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
