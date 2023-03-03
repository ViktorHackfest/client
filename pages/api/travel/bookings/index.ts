import type { NextApiRequest, NextApiResponse } from 'next';

import { Booking } from '@models/Booking';
import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/travel/bookings/`
      )
      .then((response) => {
        // console.log(response.data);
        try {
          res.status(200).json(
            response.data.map(
              (city: any) =>
                ({
                  id: city.id,
                  traveler: city.traveler,
                  tour_guide: city.tour_guide,
                  start_date: city.start_date,
                  end_date: city.end_date,
                  price: city.price,
                  is_offline: city.is_offline,
                  status: city.status,
                } as Booking)
            )
          );
        } catch (e) {
          console.log(e);
        }
      })
      .catch((error) => res.status(500).send(error));
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
