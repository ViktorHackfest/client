import { City } from '@models/City';

export type Destination = {
  id: number;
  name: string;
  city: City;
  description: string;
  image: any;
};
