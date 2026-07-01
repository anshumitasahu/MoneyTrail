import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     amt: 2100,
//   },
// ];

const data = [
    { month: "Jan", expense: 1200 },
    { month: "Feb", expense: 950 },
    { month: "Mar", expense: 1600 },
    { month: "Apr", expense: 700 },
    { month: "May", expense: 1800 },
    { month: "Jun", expense: 1400 },
];
// #endregion

export default function ExpenseLineChart({ data }) {


    return (
        <LineChart data={data}
            style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
            <XAxis dataKey="month" stroke="#000001" />
            <YAxis width="auto" stroke="var(--color-text-3)" />
            <Tooltip
                cursor={{
                    stroke: 'var(--color-border-2)',
                }}
                contentStyle={{
                    backgroundColor: 'var(--color-surface-raised)',
                    borderColor: 'var(--color-border-2)',
                }}
            />
            <Legend />
            <Line
                type="monotone"
                dataKey="expense"
                stroke="#f63b3b"
                dot={{
                    fill: 'var(--color-surface-base)',
                }}
                activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
            />
            {/* <Line
        type="monotone"
        dataKey="uv"
        stroke="var(--color-chart-2)"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{ stroke: 'var(--color-surface-base)' }}
      /> */}
        </LineChart>
    );
}