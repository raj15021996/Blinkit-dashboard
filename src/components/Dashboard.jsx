'use client';
import React, { useState, useEffect } from 'react';
import LineChart from '@/components/LineChart';
import SemiPieChart from '@/components/SemiPieChart';
import config from '@/Data/config.json'; 
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import DynamicTable from '@/components/DataTable';
import { tableData } from '@/Data/tabledata';
import { sampleData } from '@/Data/ChartSampleData';

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
          description="Analytics for all your SKUs"
        />

        <DynamicTable
          data={tableData.cityData}
          tableTitle="City level data"
          description="Analytics for all your Cities"
        />
        </div>
      </div>
    {/* </div> */}
    </main>
  );
};

export default Dashboard;
