import type { NextApiRequest, NextApiResponse } from 'next';

import { TourGuide } from '@models/TourGuide';
import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  axios
    .get(
      `${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/user/tour-guide/${id}/`
    )
    .then((response) => {
      try {
        const tour_guide = response.data;
        res.status(200).json({
          id: tour_guide.id,
          city: tour_guide.city,
        } as TourGuide);
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
