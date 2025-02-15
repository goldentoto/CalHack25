import RawImg from './RawImg';

function RecentActivity() {
  const activities = [
    {
      title: 'Purchased Premium Plan',
      date: 'Feb 10, 2025',
      amount: '$49.99',
      image: 'https://placehold.co/40x40/e0e0e0/e0e0e0'
    },
    {
      title: 'Earned 100 Bonus Credits',
      date: 'Feb 8, 2025',
      amount: '+100',
      image: 'https://placehold.co/40x40/e0e0e0/e0e0e0'
    }
  ];

  return (
    <div className="p-6 m-6 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div className="mb-4 text-xl font-semibold text-black">
        Recent Activity
      </div>
      {activities.map((activity, index) => (
        <div key={index} className="flex justify-between items-center mb-4 max-md:flex-col max-md:gap-3 max-md:items-start">
          <div className="flex gap-4 items-center">
            <RawImg
              image={activity.image}
              altText={activity.title}
              className="rounded-full"
            />
            <div className="flex flex-col gap-3">
              <div className="text-base font-medium text-black">
                {activity.title}
              </div>
              <div className="text-sm text-black">
                {activity.date}
              </div>
            </div>
          </div>
          <div className="text-base text-black">{activity.amount}</div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;