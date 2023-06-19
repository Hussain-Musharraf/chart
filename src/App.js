import "./App.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  AreaChart,
  Area,
  Bar,
  BarChart,
} from "recharts";

const pdata = [
  {
    name: "Python",
    student: 13,
    fees: 10,
  },
  {
    name: "Javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 5,
  },
  {
    name: "C#",
    student: 9,
    fees: 4,
  },
  {
    name: "C++",
    student: 10,
    fees: 8,
  },
];
function App() {
  return (
    <>
      <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 200, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray=" 3 3" />
          <XAxis
            dataKey="name"
            interval={"preserveStartEnd"}
            tickFormatter={(value) => value + " Programming"}
          />
          <YAxis />
          <Legend />
          <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
          <Line
            dataKey="student"
            stroke="red"
            activeDot={{ r: 8 }}
            type="monotone"
          />
          <Line dataKey="fees" stroke="blue" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <h1 className="chart-heading">Area Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 200, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray=" 3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Area
            dataKey="student"
            stroke="red"
            fill="#8884d8"
            type="monotone"
          />
        </AreaChart>
      </ResponsiveContainer>


      <h1 className="chart-heading">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 200, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray=" 3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

    </>
  );
}

export default App;
