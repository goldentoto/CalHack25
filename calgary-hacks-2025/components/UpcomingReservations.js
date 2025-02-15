function UpcomingReservations() {
  const reservations = [
    {
      title: 'Italian Cooking Masterclass',
      date: 'Feb 15, 2025 • 2:00 PM',
      image: 'https://placehold.co/48x48/f0f0f0/f0f0f0'
    },
    {
      title: 'Meal Prep Workshop',
      date: 'Feb 20, 2025 • 3:30 PM',
      image: 'https://placehold.co/48x48/f0f0f0/f0f0f0'
    }
  ];

  return (
    <div className="p-6 m-6 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div className="mb-4 text-xl font-semibold text-black">
        Upcoming Reservations
      </div>
      {reservations.map((reservation, index) => (
        <div key={index} className="flex justify-between items-center p-4 mb-4 rounded-lg border border border-solid max-md:flex-col max-md:gap-3 max-md:items-start">
          <div className="flex gap-4 items-center">
            <RawImg
              image={reservation.image}
              altText={reservation.title}
              className="rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <div className="text-base font-semibold text-black">
                {reservation.title}
              </div>
              <div className="text-sm text-black">
                {reservation.date}
              </div>
            </div>
          </div>
          <i className="ti ti-chevron-right" />
        </div>
      ))}
    </div>
  );
}

export default UpcomingReservations;