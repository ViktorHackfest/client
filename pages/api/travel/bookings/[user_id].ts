import type { NextApiRequest, NextApiResponse } from 'next';

import { Booking } from '@models/Booking';
import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userInfo = localStorage.getItem('user');
  const { user_id } = req.query;
  console.log(userInfo);
  let config = {
    headers: {
      HTTP_X_FIREBASE_ID: user_id,
    },
  };
  if (req.method === 'GET') {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/travel/bookings/`,
        config
      )
      .then((response) => {
        // console.log(response.data);
        try {
          res.status(200).json(
            response.data.map(
              (booking: any) =>
                ({
                  id: booking.id,
                  traveler: booking.traveler,
                  tour_guide: booking.tour_guide,
                  start_date: booking.start_date,
                  end_date: booking.end_date,
                  price: booking.price,
                  is_offline: booking.is_offline,
                  status: booking.status,
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
