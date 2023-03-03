import type { NextApiRequest, NextApiResponse } from 'next';

import { Destination } from '@models/Destination';
import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  axios
    .get(
      `${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/travel/destinations/${id}/`
    )
    .then((response) => {
      try {
        const destination = response.data;
        res.status(200).json({
          id: destination.id,
          name: destination.name,
          city: destination.city,
          description: destination.description,
          image: destination.image,
        } as Destination);
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
