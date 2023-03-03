import type { NextApiRequest, NextApiResponse } from 'next';

import { Traveler } from '@models/Traveler';
import axios from 'axios';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/user/traveler/`
      )
      .then((response) => {
        // console.log(response.data);
        try {
          res.status(200).json(
            response.data.map(
              (traveler: any) =>
                ({
                  id: traveler.id,
                  money: traveler.money,
                } as Traveler)
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
