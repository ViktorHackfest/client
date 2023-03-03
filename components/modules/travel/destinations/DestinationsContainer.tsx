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
          <div>{destination.city}</div>
          <div>{destination.description}</div>
        </div>
      ))}
    </div>
  );
};
