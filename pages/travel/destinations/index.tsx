import { DestinationsContainer } from '@components/modules/travel/destinations';
import { Destination } from '@models/Destination';
import { LoadingScreen } from '@ui';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Destinations: NextPage = () => {
  // GET : api/travel/destinations
  const [destinations, setDestinations] = useState<Destination>();
  const [destinationsLoading, setDestinationsLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/travel/destinations').then((response) => {
      setDestinations(response.data);
      setDestinationsLoading(false);
    });
  }, []);

  if (destinationsLoading) {
    return <LoadingScreen />;
  } else {
    return <DestinationsContainer destinations={destinations} />;
  }
};

export default Destinations;
