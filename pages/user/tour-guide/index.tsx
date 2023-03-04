import { TourGuideBanner } from '@components/modules/user';
import { useAuthBackend } from '@hooks';
import { City } from '@models/City';
import { Breadcrumb, Footer, LoadingScreen, Navbar } from '@ui';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const TourGuide: NextPage = () => {
  // GET : api/travel/tourGuides
  const [tourGuides, setTourGuides] = useState<City>();
  const [tourGuidesLoading, setTourGuidesLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    axios.get('/api/user/tour-guide').then((response) => {
      setTourGuides(response.data);
      setTourGuidesLoading(false);
      console.log(response.data);
      if (response.data.length === 0) setIsEmpty(true);
    });
  }, []);

  useAuthBackend();

  if (tourGuidesLoading) {
    return <LoadingScreen />;
  } else {
    if (isEmpty) return <div>There are no tourGuides</div>;
    return (
      <>
        <Navbar />
        <Breadcrumb path={['Tour Guide']} />
        <TourGuideBanner />
        <Footer />
      </>
    );
  }
};

export default TourGuide;
