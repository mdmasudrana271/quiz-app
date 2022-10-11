import React, { useContext } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { TopicsContext } from "../../Layout/Main";

const Statistics = () => {
  const topics = useContext(TopicsContext);
  const data = topics.map((topic) => topic);
  return (
    <div className="my-10">
      <div>
        <h1 className="text-3xl font-bold py-10 text-indigo-500">Data Analysis</h1>
        </div>
      <div className="">
        <LineChart
          width={400}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
