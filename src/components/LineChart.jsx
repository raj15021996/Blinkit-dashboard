import React from "react";
import { useCubeQuery } from '@cubejs-client/react';
import info from "@/assets/info.svg";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Area,
} from "recharts";
import Image from "next/image";

const LineChart = ({ title, query, data }) => {
  // const query1 = query?.[0] || {}; 
  // const query2 = query?.[1] || {}; 

  // const { resultSet: resultSet1, isLoading: isLoading1, error: error1 } = useCubeQuery({
  //   query: query1,
  // });

  // const { resultSet: resultSet2, isLoading: isLoading2, error: error2 } = useCubeQuery({
  //   query: query2,
  // });

  // if (error1 || error2) return <div>Error: {error1 ? error1.message : error2.message}</div>;

  // const dataProcessed1 = resultSet1 ? resultSet1.chartPivot() : [];
  // const dataProcessed2 = resultSet2 ? resultSet2.chartPivot() : [];

  // const combinedData = dataProcessed1.map((item, index) => ({
  //   ...item,
  //   lastMonth: dataProcessed2[index] ? dataProcessed2[index].lastMonth : null,
  // }));

  return (
    <div className="chart-container">
     <div className="chart-heading">
      <h3>{title}</h3>
      <Image src={info} alt="info" className="menu-icon" />
     </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="chart-value">125.49</span>
        <span><span className="chart-perc" >+2.4%</span> <br/> vs 119.69 last month</span>
      </div>
      <ResponsiveContainer width="100%" height="65%">
        <ComposedChart data={data}>
          <CartesianGrid vertical={false} horizontal={true} stroke="#ccc" strokeOpacity={0.5} />
          <XAxis dataKey="day" axisLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="This Month"
            stroke="#00cc66"
            fill="rgba(0, 204, 102, 0.2)"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Last Month"
            stroke="#FF7043"
            strokeDasharray="3 3"
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="custom-legend">
        <div className="legend-item">
          <div style={{ width: '10px', height: '10px', backgroundColor: '#00cc66', marginRight: '5px' }}></div>
          This Month
        </div>
        <div className="legend-item">
          <div style={{ width: '10px', height: '10px', backgroundColor: '#FF7043', marginRight: '5px' }}></div>
          Last Month
        </div>
      </div>
    </div>
  );
};

export default LineChart;
