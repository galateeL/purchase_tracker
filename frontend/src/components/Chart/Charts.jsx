/* eslint-disable react/prop-types */
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export default function Chart(purchases) {
  const { data } = purchases;
  return (
    <LineChart width={350} height={200} data={data}>
      <Line type="monotone" dataKey="price" stroke="#eb5569" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
  );
}
