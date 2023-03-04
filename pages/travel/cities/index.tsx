import { CitiesContainer } from '@components/modules/travel/cities';
import { useAuthBackend } from '@hooks';
import { City } from '@models/City';
import { Breadcrumb, Footer, LoadingScreen, Navbar } from '@ui';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Cities: NextPage = () => {
  // GET : api/travel/cities
  const [cities, setCities] = useState<City>();
  const [citiesLoading, setCitiesLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    axios.get('/api/travel/cities').then((response) => {
      setCities(response.data);
      setCitiesLoading(false);
      if (response.data.length === 0) setIsEmpty(true);
    });
  }, []);

  useAuthBackend();

  if (citiesLoading) {
    return <LoadingScreen />;
  } else {
    if (isEmpty) return <div>There are no cities</div>;
    return (
      <>
        <Navbar />
        <Breadcrumb path={['Cities']} />
        <CitiesContainer cities={cities} />
        <Footer />
      </>
    );
  }
};

export default Cities;
