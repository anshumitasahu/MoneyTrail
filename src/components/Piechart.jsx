import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Shopping", value: 300 },
  { name: "Travel", value: 200 },
  { name: "Bills", value: 150 },
  { name: "Entertainment", value: 100 },
];

const COLORS = [
  "#ff9500",
  "#0072c3",
  "#a300bc",
  "#b36f00",
  "#001aaf",
  "#b6003d",
  "#009f10",
  "#a47e00",
  "#00558d"
];

export default function ExpensePieChart({ data }) {
  return (
    <div
      style={{
        width: "100%",
        height: "350px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={150}
            paddingAngle={4}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}