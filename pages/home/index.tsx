import {
  NearestTourGuide,
  SearchDestination,
  ShortcutButton,
} from '@components/modules/home';
import { Destination } from '@models/Destination';
import { TourGuide } from '@models/TourGuide';
import { Footer, LoadingScreen, Navbar } from '@ui';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  // GET : api/travel/destinations
  const [destinations, setDestinations] = useState<Destination>();
  const [destinationsLoading, setDestinationsLoading] = useState(true);
  const [isDestinationsEmpty, setIsDestinationsEmpty] = useState(false);

  // GET : api/travel/destinations
  const [tourguides, setTourguides] = useState<TourGuide>();
  const [tourguidesLoading, setTourguidesLoading] = useState(true);
  const [isTourguidesEmpty, setIsTourguidesEmpty] = useState(false);

  useEffect(() => {
    axios.get('/api/travel/destinations').then((response) => {
      setDestinations(response.data);
      console.log(response.data);
      setDestinationsLoading(false);
      if (response.data.length === 0) setIsDestinationsEmpty(true);
    });
  }, []);

  useEffect(() => {
    axios.get('/api/user/tour-guide').then((response) => {
      setTourguides(response.data);
      console.log(response.data);
      setTourguidesLoading(false);
      if (response.data.length === 0) setIsTourguidesEmpty(true);
    });
  }, []);

  if (destinationsLoading || tourguidesLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="h-minscreen bg-slate-800">
        <Navbar />
        <SearchDestination destinations={destinations} />
        <ShortcutButton />
        <NearestTourGuide tour_guides={tourguides} />
        <Footer />
      </div>
    );
  }
}
