import type { NextApiRequest, NextApiResponse } from 'next';

import { City } from '@models/City';
import axios from 'axios';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  axios
    .get(`${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/travel/cities`)
    .then((response) => {
      try {
        res.status(200).json(
          response.data.data.map(
            (city: any) =>
              ({
                id: city.id,
                name: city.attributes.name,
                province: city.attributes.province,
                lat: city.attributes.lat,
                lng: city.attributes.lng,
              } as City)
          )
        );
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
