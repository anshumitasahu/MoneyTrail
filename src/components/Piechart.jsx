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
  "#3B82F6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

export default function ExpensePieChart() {
  return (
    <div
      style={{
        width: "40%",
        height: "350px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="30%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
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