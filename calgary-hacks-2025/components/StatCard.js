
function StatCard({ title, value, icon }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center mb-4">
        <div className="text-base text-black">{title}</div>
        <i className={`ti ${icon}`} />
      </div>
      <div className="text-2xl font-semibold text-black">{value}</div>
    </div>
  );
}

export default StatCard;