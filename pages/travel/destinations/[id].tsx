import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Destination = (destination: any) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    axios.get(`/api/travel/destinations/${id}`).then((response) => {
      console.log(response.data);
    });
  }, [id]);
};

export default Destination;
