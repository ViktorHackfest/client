type BookingsContainerProps = {
  bookings: any;
};

export const BookingsContainer = ({ bookings }: BookingsContainerProps) => {
  return (
    <div>
      {bookings.map((booking: any, id_booking: number) => (
        <div key={id_booking}>
          <div>{booking.id}</div>
          <div>{booking.traveler}</div>
          <div>{booking.tour_guide}</div>
          <div>{booking.start_date}</div>
          <div>{booking.end_date}</div>
          <div>{booking.price}</div>
          <div>{booking.is_offline}</div>
          <div>{booking.status}</div>
        </div>
      ))}
    </div>
  );
};
