import StatCard from "./StatCard";

const DashbordStats = ({ StatsData }) => {
  if (!StatsData || StatsData.length === 0) {
    return <div className="text-white/50 p-6">No statistics available.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {StatsData.map((stat, index) => (
        <StatCard
          key={stat.id || index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};

export default DashbordStats;
