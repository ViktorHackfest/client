import type { NextApiRequest, NextApiResponse } from 'next';

import { City } from '@models/City';
import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  let config = {
    headers: {
      'X-Firebase-ID': req.query.user_id,
    },
  };
  axios
    .get(
      `${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/travel/bookings/${id}/`
    )
    .then((response) => {
      try {
        const city = response.data;
        console.log(city);
        res.status(200).json({
          id: city.id,
          name: city.name,
          province: city.province,
          lat: city.lat,
          lng: city.lng,
          image: city.image,
        } as City);
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
