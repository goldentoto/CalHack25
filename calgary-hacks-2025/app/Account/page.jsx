import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import RecentActivity from "../components/RecentActivity";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import UpcomingReservations from "../components/UpcomingReservations";

function Dashboard() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className="flex overflow-hidden flex-col mx-auto my-0 w-full bg-white rounded-lg border-2 border-gray-300 border-solid max-w-[1440px]">
        <div className="flex flex-col w-full bg-transparent">
          <div className="flex flex-col w-full bg-gray-50">
            <div className="flex w-full">
              <div className="flex gap-5 max-md:flex-col">
                <Sidebar />
                <div className="flex flex-col pl-5 w-[82%] max-md:w-full">
                  <div className="flex flex-col w-full">
                    <Header />
                    <ProfileInfo />
                    <div className="grid gap-5 px-6 py-0 grid-cols-[repeat(3,1fr)] max-md:gap-4 max-md:grid-cols-[1fr]">
                      <StatCard
                        title="Account Balance"
                        value="2,450 Credits"
                        icon="ti-coins"
                      />
                      <StatCard
                        title="Subscription"
                        value="Premium"
                        icon="ti-crown"
                      />
                      <StatCard
                        title="Next Class"
                        value="Feb 15"
                        icon="ti-calendar"
                      />
                    </div>
                    <UpcomingReservations />
                    <RecentActivity />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
