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
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    axios.get('/api/travel/destinations').then((response) => {
      setDestinations(response.data);
      console.log(response.data);
      setDestinationsLoading(false);
      if (response.data.length === 0) setIsEmpty(true);
    });
  }, []);

  if (destinationsLoading) {
    return <LoadingScreen />;
  } else {
    if (isEmpty) return <div>There are no destinations</div>;
    return <DestinationsContainer destinations={destinations} />;
  }
};

export default Destinations;
