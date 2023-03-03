import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const City = (city: any) => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!slug) return;
    axios.get(`/api/travel/cities/${slug}`).then((response) => {
      console.log(response.data);
      console.log('TESTING');
    });
  }, [slug]);
};

export default City;
