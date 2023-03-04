import { Card, InputField } from '@ui';
import { BiSearch } from 'react-icons/bi';
import { IoLocationSharp } from 'react-icons/io5';

export const SearchDestination = ({ destinations }: any) => {
  console.log(destinations.length);

  let x = Math.floor(Math.random() * destinations.length); // Random From 0 to destinations.length
  let y = Math.floor(Math.random() * destinations.length); // Random From 0 to destinations.length
  const recomendation = [destinations[x], destinations[y]];

  return (
    <Card preset="dark" className="rounded-none">
      <div>
        <div className="flex gap-2 items-center text-xl font-semibold">
          <IoLocationSharp className="text-black" />
          <p>Choose Destination</p>
        </div>
        <div className="my-4">
          <InputField
            key="key"
            type="text"
            placeholder="Find your desired tourist destination"
            leftIcon={<BiSearch className="w-4 h-4" color="gray.300" />}
            className="bg-white rounded-xl z-0"
          />
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
