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
        </div>
      ))}
    </div>
  );
};
