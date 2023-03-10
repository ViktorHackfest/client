import { DestinationCard } from './DestinationCard';

type DestinationsContainerProps = {
  destinations: any;
};

export const DestinationsContainer = ({
  destinations,
}: DestinationsContainerProps) => {
  return (
    <div className="flex justify-center px-8 pb-20">
      <div className="flex flex-col gap-10">
        {destinations.map((destination: any, id_destination: number) => (
          <DestinationCard key={id_destination} destination={destination} />
        ))}
      </div>
    </div>
  );
};
