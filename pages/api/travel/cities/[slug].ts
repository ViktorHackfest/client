import type { NextApiRequest, NextApiResponse } from 'next';

import { City } from '@models/City';
import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('TOST');
  const { slug } = req.query;
  console.log(slug);
  axios
    .get(
      `${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/travel/cities/${slug}/`
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
