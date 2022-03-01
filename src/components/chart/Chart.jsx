import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./Chart.css";

const Chart = () => {
  const data = [
    {
      name: "Jan",
      "Active User": 7000,
    },
    {
      name: "Feb",
      "Active User": 9000,
    },
    {
      name: "Mar",
      "Active User": 10000,
    },
    {
      name: "Apr",
      "Active User": 5500,
    },
    {
      name: "May",
      "Active User": 6500,
    },
    {
      name: "Jun",
      "Active User": 6000,
    },
    {
      name: "Jul",
      "Active User": 7000,
    },
    {
      name: "Aug",
      "Active User": 8500,
    },
    {
      name: "Sep",
      "Active User": 7500,
    },
    {
      name: "Oct",
      "Active User": 4500,
    },
    {
      name: "Dec",
      "Active User": 6000,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chart__title">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip stroke="#000000" />
          <Line
            type="monotone"
            dataKey="Active User"
            stroke="#5067A3"
            // activeDot={{ r: 8 }}
          />
          <CartesianGrid stroke="#8DA399" strokeDasharray="8 8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
