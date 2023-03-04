import {
  NearestTourGuide,
  SearchDestination,
  ShortcutButton,
} from '@components/modules/home';
import { Destination } from '@models/Destination';
import { Footer, Navbar } from '@ui';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  // GET : api/travel/destinations
  const [destinations, setDestinations] = useState<Destination>();
  const [destinationsLoading, setDestinationsLoading] = useState(true);
  const [isDestinationsEmpty, setIsDestinationsEmpty] = useState(false);

  useEffect(() => {
    axios.get('/api/travel/destinations').then((response) => {
      setDestinations(response.data);
      console.log(response.data);
      setDestinationsLoading(false);
      if (response.data.length === 0) setIsDestinationsEmpty(true);
    });
  }, []);

  if (destinationsLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="h-minscreen bg-slate-800">
        <Navbar />
        <SearchDestination destinations={destinations} />
        <ShortcutButton />
        <NearestTourGuide />
        <Footer />
      </div>
    );
  }
}
