'use client';
import React, { useState, useEffect } from 'react';
import LineChart from '@/components/LineChart';
import SemiPieChart from '@/components/SemiPieChart';
import config from '@/Data/config.json'; 
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import DynamicTable from '@/components/DataTable';
import { tableData } from '@/Data/tabledata';

const sampleData = {
    lineChartData : [
        { day: 9, "This Month": 3.5, "Last Month": 2.8 },
        { day: 10, "This Month": 9.2, "Last Month": 3.1 },
        { day: 11, "This Month": 4.0, "Last Month": 3.4 },
        { day: 12, "This Month": 8.5, "Last Month": 3.2 },
        { day: 13, "This Month": 5.0, "Last Month": 3.6 },
        { day: 14, "This Month": 4.7, "Last Month": 3.9 },
        { day: 15, "This Month": 5.2, "Last Month": 4.1 },
      ],
    pieChartData: [
        { name: 'New Delhi', value: 26.5, percentageChange: 1.2 },
        { name: 'Mumbai', value: 36.4, percentageChange: -3.3 },
        { name: 'West Bengal', value: 12.2, percentageChange: -2.3 },
        { name: 'Others', value: 24.3, percentageChange: 1.09 },
    ],
    tableData: [
      {
        id: '1',
        name: 'Protein Bar 100g',
        sales: 953112.12,
        outOfStock: 1.68,
        totalInventory: 933.9,
        averageRank: 3.2,
        estTraffic: 12303,
        estImpressions: 25005,
      },
      {
        id: '2',
        name: 'Choco Bar 100g',
        sales: 48526.32,
        outOfStock: 6.79,
        totalInventory: 679,
        averageRank: 7,
        estTraffic: 3606,
        estImpressions: 4231,
      },
    ],
  };

const total = 68.2;
const percentageChange = 2.2;

const Dashboard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(config.cards);
  }, []);

//   const renderCard = (card) => {
//     const { visualizationType, title, query, id } = card;

//     // Parse the query from the stringified JSON
//     const parsedQuery = JSON.parse(query);

//     switch (visualizationType) {
//       case 'linechart':
//         return <LineChart key={id} title={title} query={parsedQuery} data={sampleData.lineChartData}/>;
//       case 'semipiechart':
//         return <SemiPieChart key={id} title={title} query={parsedQuery} data={sampleData.pieChartData} />;
//       case 'table':
//         return <DataTable key={id} title={title} query={parsedQuery} data={sampleData.tableData} />;
//       default:
//         return <div key={id}>Unsupported Visualization</div>;
//     }
//   };

  return (
    <main className="dashboard-container">
      <Sidebar/>
      <div className="dashboard-content">
      <Header/>
        {/* <div className="dashboard-grid"> */}
        {/* {cards.map((card) => renderCard(card))} */}
        <div className='inner-dashboard'>

        <div className="dashboard-grid">
          <LineChart
            data={sampleData.lineChartData}
            title="Sales (MRP)"
            percentage={2.4}
          />
          <LineChart
            data={sampleData.lineChartData}
            title="Total Quantity Sold"
            percentage={2.4}
          />
          <SemiPieChart
            data={sampleData.pieChartData} 
            title="Top Cities" 
            total={total} 
            percentageChange={percentageChange}
          />
        </div>
    
        <DynamicTable
          data={tableData.skuData}
          tableTitle="SKU level data"
          description="Analytics for all your SKUs 📦"
        />

        <DynamicTable
          data={tableData.cityData}
          tableTitle="City level data"
          description="Analytics for all your Cities 🗺️"
        />
        </div>
      </div>
    {/* </div> */}
    </main>
  );
};

export default Dashboard;
