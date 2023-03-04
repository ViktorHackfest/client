import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(403).end('Must use POST method!');
  }

  if (!req.body) {
    res.status(400).end('Must provide request body!');
  }

  const { data } = req.body;
  console.log(data);
  const parameters = req.query;
  console.log(parameters);

  let config = {
    headers: {
      'X-Firebase-ID': req.query.user_id,
    },
    // parameters: {
    //   'X-Firebase-ID': req.query.user_id,
    // },
  };

  axios
    .post(
      `${process.env.NEXT_PUBLIC_DEPLOY_SERVER_DEVELOPMENT}/travel/bookings/`,
      {
        traveler: data.traveler,
        tour_guide: data.tour_guide,
        start_date: data.start_date,
        end_date: data.end_date,
        price: data.price,
        is_offline: data.is_offline,
        status: data.status,
      },
      config
    )
    .then((response) => res.status(200).send(response.data))
    .catch((e) => {
      console.log(e.response.data.error);
      res.status(e.response.status).send(e.response.data.error);
    });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
