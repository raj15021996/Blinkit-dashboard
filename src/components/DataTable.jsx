import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  TableSortLabel,
  Paper,
  Typography,
  Button,
} from '@mui/material';
const DynamicTable = ({ data, tableTitle, description }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('skuName');
  const [filter, setFilter] = useState('');

  const handleSelectRow = (skuName) => {
    const selectedIndex = selectedRows.indexOf(skuName);
    let newSelectedRows = [];

    if (selectedIndex === -1) {
      newSelectedRows = newSelectedRows.concat(selectedRows, skuName);
    } else {
      newSelectedRows = newSelectedRows.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }
    setSelectedRows(newSelectedRows);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortData = (array) => {
    return array.sort((a, b) => {
      if (orderBy === 'skuName') {
        if (order === 'asc') {
          return a.skuName?.localeCompare(b.skuName ?? '') ?? 0;
        } else {
          return b.skuName?.localeCompare(a.skuName ?? '') ?? 0;
        }
      } else if (orderBy === 'sales') {
        if (order === 'asc') {
          return (parseFloat(a.sales?.replace('₹', '').replace(',', '') ?? 0) -
            parseFloat(b.sales?.replace('₹', '').replace(',', '') ?? 0)) ?? 0;
        } else {
          return (parseFloat(b.sales?.replace('₹', '').replace(',', '') ?? 0) -
            parseFloat(a.sales?.replace('₹', '').replace(',', '') ?? 0)) ?? 0;
        }
      }
      return 0;
    });
  };

  const formatCurrency = (value) => {
    const valueString = value?.toString() ?? '0';
    return `₹${parseFloat(valueString.replace('₹', '').replace(',', '')).toFixed(1)}L`;
  };

  const sortedData = sortData(data);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <Typography variant="h6">{tableTitle}</Typography>
          <Typography variant="body2">{description}</Typography>
        </div>
        <Button variant="contained" color="success">Filters</Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              {['SKU Name', 'Sales', 'Out of Stock', 'Total Inventory', 'Average Rank', 'Est. Traffic', 'Est. Impressions'].map(
                (header, index) => (
                  <TableCell key={index}>
                    <TableSortLabel
                      active={orderBy === header.toLowerCase().replace(' ', '')}
                      direction={orderBy === header.toLowerCase().replace(' ', '') ? order : 'asc'}
                      onClick={() => handleSort(header.toLowerCase().replace(' ', ''))}
                    >
                      {header}
                    </TableSortLabel>
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow
                key={index}
                hover
                onClick={() => handleSelectRow(row.skuName)}
                selected={selectedRows.indexOf(row.skuName) !== -1}
                style={{
                  backgroundColor: selectedRows.indexOf(row.skuName) !== -1 ? '#e0f7fa' : 'transparent',
                }}
              >
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{row.skuName}</TableCell>
                <TableCell>{row.sales}</TableCell>
                <TableCell>{row.outOfStock}</TableCell>
                <TableCell>{row.totalInventory}</TableCell>
                <TableCell>{row.avgRank}</TableCell>
                <TableCell>{row.estTraffic}</TableCell>
                <TableCell>{row.estImpressions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 'bold' }}>Total</div>
        <div style={{ fontWeight: 'bold' }}>
          {formatCurrency(
            sortedData.reduce((total, row) => total + parseFloat(row.sales?.replace('₹', '').replace(',', '') ?? 0), 0)
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
