import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Chart() {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
  return (
    <LineChart width={600} height={200} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
  )
}
