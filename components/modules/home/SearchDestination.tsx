import { Card, InputField } from '@ui';
import { IoLocationSharp } from 'react-icons/io5';

export const SearchDestination = ({ destinations }: any) => {
  console.log(destinations.length);

  let x = Math.floor(Math.random() * destinations.length); // Random From 0 to destinations.length
  let y = Math.floor(Math.random() * destinations.length); // Random From 0 to destinations.length
  const recomendation = [destinations[x], destinations[y]];

  return (
    <Card preset="dark" className="rounded-none">
      <div>
        <div>
          <IoLocationSharp />
          <p>Choose Destination</p>
        </div>
        <div>
          <InputField placeholder="Search Destination" />
        </div>
        {/* STATIC FIRST */}
        <div>
          <span>Place recommendation: </span>
          {recomendation.map((rec: any, id_rec: number) => (
            <span key={id_rec}>{rec.name},&nbsp;</span>
          ))}
          ...
        </div>
      </div>
    </Card>
  );
};
