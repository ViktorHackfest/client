import { BookingsContainer } from '@components/modules/travel/bookings';
import { Booking } from '@models/Booking';
import { LoadingScreen } from '@ui';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Bookings: NextPage = () => {
  // GET : api/travel/bookings
  const [bookings, setbookings] = useState<Booking>();
  const [bookingsLoading, setbookingsLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/travel/bookings').then((response) => {
      setbookings(response.data);
      setbookingsLoading(false);
    });
  }, []);

  if (bookingsLoading) {
    return <LoadingScreen />;
  } else {
    return <BookingsContainer bookings={bookings} />;
  }
};

export default Bookings;
