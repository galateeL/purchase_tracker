/* eslint-disable react/prop-types */
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export default function Chart(purchases) {
  const { data } = purchases;
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
  );
}
