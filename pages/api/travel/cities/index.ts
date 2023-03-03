import type { NextApiRequest, NextApiResponse } from 'next';

import { City } from '@models/City';
import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/travel/cities/`
      )
      .then((response) => {
        // console.log(response.data);
        try {
          res.status(200).json(
            response.data.map(
              (city: any) =>
                ({
                  id: city.id,
                  name: city.name,
                  province: city.province,
                  lat: city.lat,
                  lng: city.lng,
                  image: city.image,
                } as City)
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
