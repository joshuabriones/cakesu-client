import {
  DollarSign,
  Wallet,
  CalendarArrowDown,
  UsersRound,
} from "lucide-react";

import { OverviewChart } from "./OverviewChart";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
  const counts = [
    {
      title: "Total Sales",
      count: "5,000",
      text: "+20.1% from last month",
      icon: DollarSign,
    },
    {
      title: "Total Income",
      count: "$45,000",
      text: "+180.1% from last month",
      icon: Wallet,
    },
    {
      title: "Orders Paid",
      count: "500",
      text: "+19% from last month",
      icon: CalendarArrowDown,
    },
    {
      title: "Total Customers",
      count: "100",
      text: "+67 since last hour",
      icon: UsersRound,
    },
  ];

  return (
    <div className=" w-full p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 ">
        {counts.map((item) => (
          <div
            key={item.title}
            className="p-4 bg-white rounded-xl border border-gray-200"
          >
            <div className="flex items-center justify-between ">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <item.icon className="w-5 h-5" stroke={"#fe6e30"} />
            </div>
            <p className="text-2xl font-bold mt-2">{item.count}</p>
            <p className="text-sm text-gray-500">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 flex flex-col md:flex-row gap-4 ">
        <div className="flex-1 min-h-[400px]">
          <OverviewChart />
        </div>
        <RecentOrders />
      </section>
    </div>
  );
};

export default Dashboard;
