import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const City = (city: any) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    axios.get(`/api/travel/cities/${id}`).then((response) => {
      console.log(response.data);
    });
  }, [id]);
};

export default City;
