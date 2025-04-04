import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import "./dashboard.css";
import info from "@/assets/info.svg";
import Image from "next/image";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"]; 

const SemiPieChart = ({ data, title, total, percentageChange }) => {
  // Helper function to format the value with currency
  const formatCurrency = (value) => `₹${value.toFixed(1)}L`;

  // Helper function to format the percentage change with a symbol
  const formatPercentage = (value) => {
    const sign = value >= 0 ? "↑" : "↓";
    return `${sign} ${Math.abs(value).toFixed(1)}%`;
  };

  return (
    <div className="piechart-card">
     <div className="chart-heading">
          <h3 className="piechart-title">{title}</h3>
          <Image src={info} alt="info" className="menu-icon" />
     </div>
      {/* <h3 className="piechart-title">{title}</h3> */}
      <div className="piechart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => formatCurrency(value)} />
          </PieChart>
        </ResponsiveContainer>
        <div className="semi-pie-chart-info">
          <div className="total">
            <h4>Total</h4>
            <div className="total-value">{formatCurrency(total)}</div>
            <div
              className="total-change"
              style={{ color: percentageChange >= 0 ? "green" : "red" }}
            >
              {formatPercentage(percentageChange)}
            </div>
          </div>
          <div className="city-list">
            {data.map((item, index) => (
              <div key={index} className="city-item">
                <div className="city-content">
                  <div
                    className="city-color"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="city-name">{item?.name}</span>
                </div>
                <div className="city-value">{formatCurrency(item?.value)}</div>
                <div className="city-per-value">{(item?.percentageValue)}%</div>
                <div
                  className="city-percentage"
                  style={{
                    color: item.percentageChange >= 0 ? "green" : "red",
                  }}
                >
                  {formatPercentage(item?.percentageChange)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemiPieChart;
