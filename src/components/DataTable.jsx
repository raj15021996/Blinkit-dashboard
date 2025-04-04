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
  const [selectAll, setSelectAll] = useState(false);

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

  const handleSelectAllClick = () => {
    if (!selectAll) {
      setSelectedRows(data.map((row) => row.skuName));
    } else {
      setSelectedRows([]);
    }
    setSelectAll(!selectAll);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const formatColumnKey = (key) => key.toLowerCase().replace(/\s+/g, '');

  const sortData = (array) => {
    return array.sort((a, b) => {
      if (orderBy === 'skuName') {
        return order === 'asc' ? a.skuName.localeCompare(b.skuName) : b.skuName.localeCompare(a.skuName);
      } else if (orderBy === 'sales') {
        return order === 'asc'
          ? parseFloat(a.sales.replace('₹', '').replace(',', '')) - parseFloat(b.sales.replace('₹', '').replace(',', ''))
          : parseFloat(b.sales.replace('₹', '').replace(',', '')) - parseFloat(a.sales.replace('₹', '').replace(',', ''));
      }
      return 0;
    });
  };

  const formatCurrency = (value) => {
    const valueString = value?.toString() ?? '0';
    return `₹${parseFloat(valueString.replace('₹', '').replace(',', '')).toFixed(1)}L`;
  };

  const sumColumn = (key) => {
    return data.reduce((total, row) => total + (parseFloat(row[key]?.toString().replace('₹', '').replace(',', '') ?? 0) || 0), 0);
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
              <TableCell rowSpan={2}>
               {""}
              </TableCell>
              <TableCell rowSpan={2} style={{ borderRight: '1px solid #ddd' }}>SKU Name</TableCell>
              <TableCell colSpan={3} align="center" style={{ borderRight: '1px solid #ddd' }}>Availability</TableCell>
              <TableCell colSpan={3} align="center">Visibility</TableCell>
            </TableRow>
            <TableRow>
              {['Sales', 'Out of Stock', 'Total Inventory', 'Average Rank', 'Est. Traffic', 'Est. Impressions'].map(
                (header, index) => (
                  <TableCell key={index} style={{ borderRight: index === 2 ? '1px solid #ddd' : 'none' }}>
                    <TableSortLabel
                      active={orderBy === formatColumnKey(header)}
                      direction={orderBy === formatColumnKey(header) ? order : 'asc'}
                      onClick={() => handleSort(formatColumnKey(header))}
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
                <TableCell style={{ borderRight: '1px solid #ddd' }}>
                  <Checkbox checked={selectedRows.includes(row.skuName)} onChange={() => handleSelectRow(row.skuName)} />
                </TableCell>
                <TableCell style={{ borderRight: '1px solid #ddd' }}>{row.skuName}</TableCell>
                <TableCell>{row.sales}</TableCell>
                <TableCell>{row.outOfStock}</TableCell>
                <TableCell style={{ borderRight: '1px solid #ddd' }}>{row.totalInventory}</TableCell>
                <TableCell>{row.avgRank}</TableCell>
                <TableCell>{row.estTraffic}</TableCell>
                <TableCell>{row.estImpressions}</TableCell>
              </TableRow>
            ))}
            <TableRow style={{ fontWeight: 'bold', backgroundColor: '#f0f0f0' }}>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell>{formatCurrency(sumColumn('sales'))}</TableCell>
              <TableCell>{sumColumn('outOfStock')}</TableCell>
              <TableCell>{sumColumn('totalInventory')}</TableCell>
              <TableCell>{sumColumn('avgRank')}</TableCell>
              <TableCell>{sumColumn('estTraffic')}</TableCell>
              <TableCell>{sumColumn('estImpressions')}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DynamicTable;
