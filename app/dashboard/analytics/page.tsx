"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  const metrics = [
    {
      title: "Total Sales ",
      value: "$120,000",
      change: "+12%",
      isPositive: true,
    },
    {
      title: "Active Users ",
      value: "1,200",
      change: "-8%",
      isPositive: false,
    },
    {
      title: "Website Visits ",
      value: "8,500",
      change: "+5%",
      isPositive: true,
    },
    {
      title: "New Sign-Ups ",
      value: "350 ",
      change: "+18%",
      isPositive: true,
    },
  ];
  const chartData = [
    { month: "Jan", visit: 42000 },
    { month: "Feb", visit: 38000 },
    { month: "Mar", visit: 46000 },
    { month: "Apr", visit: 52000 },
    { month: "May", visit: 61000 },
    { month: "Jun", visit: 59000 },
    { month: "Jul", visit: 64000 },
    { month: "Sep", visit: 72000 },
    { month: "Aug", visit: 68000 },
    { month: "Oct", visit: 76000 },
    { month: "Nov", visit: 81000 },
    { month: "Dec", visit: 90000 },
  ];

  const chartConfig: ChartConfig = {
    revenue: {
      label: "Revenue",
      color: "#2563eb",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8 ">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Analytics Dashboard
        </h1>

        {/* Overview Metrics Section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex justify-between items-center bg-white rounded-lg shadow-md border-l-5 p-6 ${
                metric.isPositive ? "border-green-500" : "border-red-500"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-700 ">
                  {metric.title}
                </h3>
                <p className="text-lg text-gray-600 mt-2">{metric.value}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm mt-2 ${
                    metric.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Website Traffic
          </h2>
          <p className="text-md font-medium text-gray-500 mb-3">
            This is the Example of Static Chart From ShadCN :-
          </p>
          <div className="max-h-auto bg-[#0d1b2a] rounded-2xl p-6 shadow-2xl border border-white/10 text-white ">
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] w-full  bg-[#111827] rounded-xl p-4 shadow-lg"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Area
                    type="monotone"
                    dataKey="visit"
                    stroke="var(--color-revenue)"
                    fill="var(--color-revenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
        <div className="mb-8"></div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-2">
          Recent Activities
        </h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 ">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                User Registrations
              </h3>
              <p className="text-sm font-medium  text-gray-500">
                New User signed up on 2026-02-16
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">+10 Users</p>
            </div>
          </li>
          <li className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 ">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Sales Increase
              </h3>
              <p className="text-sm font-medium  text-gray-500">
                Sales Grow by 12% on 2026-02-15
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">$15,000</p>
            </div>
          </li>
          <li className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 ">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Website Traffic Surge
              </h3>
              <p className="text-sm font-medium  text-gray-500">
                Traffic increased by 8% on 2026-02-13
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">+200 Visits</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
