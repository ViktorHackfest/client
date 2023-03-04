type BookingsContainerProps = {
  bookings: any;
};

const formatter = new Intl.NumberFormat('id', {
  style: 'currency',
  currency: 'IDR',
});

export const BookingsContainer = ({ bookings }: BookingsContainerProps) => {
  return (
    <div>
      {bookings.map((booking: any, id_booking: number) => (
        <div
          key={id_booking}
          className="bg-white mx-8 mb-8 rounded-3xl p-8 shadow-lg"
        >
          <div className="flex gap-2 text-gray-500 border-b-[1px] border-b-gray-300 pb-2 mb-2">
            <div>BOOKING</div>
            <div>
              {booking.traveler}-{booking.tour_guide}
            </div>
          </div>
          <div>
            <span>Start Date&nbsp;: </span>
            <span>{booking.start_date}</span>
          </div>
          <div>
            <span>End Date &nbsp;&nbsp;: </span>
            <span>{booking.end_date}</span>
          </div>
          <div className="h-4"></div>
          <div className="flex justify-between">
            <div className="text-xl">{formatter.format(booking.price)}</div>
            {booking.status === 'BOOKED' && (
              <div className="bg-yellow-200 font-bold text-xl px-4 rounded-xl">
                {booking.status}
              </div>
            )}
            {booking.status === 'CANCELLED' && (
              <div className="bg-red-200 font-bold text-xl px-4 rounded-xl">
                {booking.status}
              </div>
            )}
            {booking.status === 'COMPLETED' && (
              <div className="bg-green-200 font-bold text-xl px-4 rounded-xl">
                {booking.status}
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="h-40"></div>
    </div>
  );
};
