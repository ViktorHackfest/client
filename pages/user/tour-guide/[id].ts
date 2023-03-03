import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Destination = (tour_guide: any) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    axios.get(`/api/user/tour-guide/${id}`).then((response) => {
      console.log(response.data);
    });
  }, [id]);
};

export default Destination;
