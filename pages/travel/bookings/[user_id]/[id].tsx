import axios from 'axios';
import { useEffect } from 'react';

import { useRouter } from 'next/router';

const Destination = (booking: any) => {
  const router = useRouter();
  const { id } = router.query;
  const { user_id } = router.query;

  useEffect(() => {
    if (!id || !user_id) return;
    // console.log(id);
    // console.log(user_id);
    axios.get(`/api/travel/bookings/${user_id}/${id}`).then((response) => {
      console.log(response.data);
    });
  }, [id, user_id]);
};

export default Destination;
