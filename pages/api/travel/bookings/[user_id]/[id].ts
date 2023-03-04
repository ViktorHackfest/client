import type { NextApiRequest, NextApiResponse } from 'next';

import { Booking } from '@models/Booking';
import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  console.log(id);
  let config = {
    headers: {
      'X-Firebase-ID': req.query.user_id,
    },
  };
  axios
    .get(
      `${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/travel/bookings/${id}/`,
      config
    )
    .then((response) => {
      try {
        const booking = response.data;
        console.log(booking);
        res.status(200).json({
          id: booking.id,
          traveler: booking.traveler,
          tour_guide: booking.tour_guide,
          start_date: booking.start_date,
          end_date: booking.end_date,
          price: booking.price,
          is_offline: booking.is_offline,
          status: booking.status,
        } as Booking);
      } catch (e) {
        console.log(e);
      }
    })
    .catch((error) => res.status(500).send(error));
}

export const config = {
  api: {
    externalResolver: true,
  },
};
