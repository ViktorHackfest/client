import type { NextApiRequest, NextApiResponse } from 'next';

import { TourGuide } from '@models/TourGuide';
import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/user/tour-guide/`
      )
      .then((response) => {
        // console.log(response.data);
        try {
          res.status(200).json(
            response.data.map(
              (tour_guide: any) =>
                ({
                  id: tour_guide.id,
                  city: tour_guide.city,
                  name: tour_guide.name,
                  photo_url: tour_guide.photo_url,
                } as TourGuide)
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
