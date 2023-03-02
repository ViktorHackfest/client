import { CitiesContainer } from '@components/modules/travel/cities';
import { City } from '@models/City';
import { LoadingScreen } from '@ui';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Cities: NextPage = () => {
  // GET : api/travel/cities
  const [cities, setCities] = useState<City>();
  const [citiesLoading, setCitiesLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/travel/cities').then((response) => {
      setCities(response.data);
      setCitiesLoading(false);
    });
  }, []);

  if (citiesLoading) {
    return <LoadingScreen />;
  } else {
    return <CitiesContainer cities={cities} />;
  }
};

export default Cities;
