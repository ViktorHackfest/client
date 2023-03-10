import { BookingsContainer } from '@components/modules/travel/bookings';
import { Booking } from '@models/Booking';
import { Breadcrumb, Footer, LoadingScreen, Navbar } from '@ui';
import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BookingByUserId: NextPage = () => {
  const router = useRouter();
  const { user_id } = router.query;
  // GET : api/travel/bookings
  const [bookings, setbookings] = useState<Booking>();
  const [bookingsLoading, setbookingsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!user_id) return;
    axios.get(`/api/travel/bookings/${user_id}`).then((response) => {
      setbookings(response.data);
      setbookingsLoading(false);
      if (response.data.length === 0) setIsEmpty(true);
    });
  }, [user_id]);

  if (bookingsLoading) {
    return <LoadingScreen />;
  } else {
    if (isEmpty) return <div>There are no bookings</div>;
    return (
      <>
        <Navbar />
        <Breadcrumb path={['Tour Guide Bookings']} />
        <BookingsContainer bookings={bookings} />
        <Footer />
      </>
    );
  }
};

export default BookingByUserId;
