import { TourGuide } from '@models/TourGuide';
import { Traveler } from '@models/Traveler';

export type Booking = {
  id: number;
  traveler: Traveler;
  tour_guide: TourGuide;
  start_date: any;
  end_date: any;
  price: number;
  is_offline: boolean;
  status: string;
};
