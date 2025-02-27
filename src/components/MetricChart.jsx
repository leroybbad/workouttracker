// src/components/MetricChart.jsx
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const MetricChart = ({ metric, data, onClose }) => {
  const [chartData, setChartData] = useState([]);
  const [timeRange, setTimeRange] = useState('month'); // 'week', 'month', 'year'
  
  useEffect(() => {
    // Process data based on the selected metric and time range
    const processedData = processDataForChart(metric, data, timeRange);
    setChartData(processedData);
  }, [metric, data, timeRange]);
  
  const processDataForChart = (metricType, rawData, range) => {
    if (!rawData || rawData.length === 0) {
      return [];
    }
    
    // Get current date to calculate range
    const currentDate = new Date();
    let startDate;
    
    // Set start date based on selected range
    if (range === 'week') {
      startDate = new Date();
      startDate.setDate(currentDate.getDate() - 7);
    } else if (range === 'month') {
      startDate = new Date();
      startDate.setMonth(currentDate.getMonth() - 1);
    } else { // year
      startDate = new Date();
      startDate.setFullYear(currentDate.getFullYear() - 1);
    }
    
    // Filter data for the selected range
    const filteredData = rawData.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= currentDate;
    });
    
    // Sort by date
    const sortedData = [...filteredData].sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    
    // Map data based on the selected metric
    return sortedData.map(item => {
      const date = new Date(item.date);
      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
      
      switch (metricType) {
        case 'workouts':
          return { 
            date: formattedDate, 
            fullDate: item.date,
            value: 1, // Each workout counts as 1
            type: item.type
          };
        case 'calories':
          return { 
            date: formattedDate, 
            fullDate: item.date,
            value: item.caloriesBurned || 0
          };
        case 'weight':
          return { 
            date: formattedDate, 
            fullDate: item.date,
            value: item.weight || 0
          };
        case 'sleep':
          return { 
            date: formattedDate, 
            fullDate: item.date,
            value: item.sleep || 0
          };
        case 'bloodPressure':
          return { 
            date: formattedDate, 
            fullDate: item.date,
            systolic: item.systolic || 0,
            diastolic: item.diastolic || 0,
            value: item.systolic // For chart primary value
          };
        default:
          return { date: formattedDate, value: 0 };
      }
    });
  };
  
  const getMetricInfo = () => {
    switch (metric) {
      case 'workouts':
        return { 
          title: 'Workouts Completed',
          yAxis: 'Count',
          color: '#4CAF50',
          formatter: (value) => `${value} workouts`
        };
      case 'calories':
        return { 
          title: 'Calories Burned',
          yAxis: 'Calories',
          color: '#FF5722',
          formatter: (value) => `${value} cal`
        };
      case 'weight':
        return { 
          title: 'Weight Tracking',
          yAxis: 'lbs',
          color: '#2196F3',
          formatter: (value) => `${value} lbs`
        };
      case 'sleep':
        return { 
          title: 'Sleep Tracking',
          yAxis: 'Hours',
          color: '#9C27B0',
          formatter: (value) => `${value} hours`
        };
      case 'bloodPressure':
        return { 
          title: 'Blood Pressure',
          yAxis: 'mmHg',
          color: '#E91E63',
          formatter: (value) => `${value} mmHg`
        };
      default:
        return { 
          title: 'Metric Tracking',
          yAxis: 'Value',
          color: '#607D8B',
          formatter: (value) => value
        };
    }
  };
  
  const metricInfo = getMetricInfo();
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="chart-tooltip">
          <p className="date">{data.fullDate}</p>
          <p className="value">
            {metricInfo.formatter(data.value)}
          </p>
          {metric === 'bloodPressure' && (
            <p className="bp-value">
              {data.systolic}/{data.diastolic} mmHg
            </p>
          )}
          {metric === 'workouts' && data.type && (
            <p className="workout-type">{data.type}</p>
          )}
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="sheet-container">
      <div className="sheet-content">
        <div className="sheet-header">
          <h2>{metricInfo.title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="time-range-selector">
          <button 
            className={`range-button ${timeRange === 'week' ? 'active' : ''}`}
            onClick={() => setTimeRange('week')}
          >
            Week
          </button>
          <button 
            className={`range-button ${timeRange === 'month' ? 'active' : ''}`}
            onClick={() => setTimeRange('month')}
          >
            Month
          </button>
          <button 
            className={`range-button ${timeRange === 'year' ? 'active' : ''}`}
            onClick={() => setTimeRange('year')}
          >
            Year
          </button>
        </div>
        
        <div className="chart-container">
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }}
                  tickMargin={10}
                />
                <YAxis 
                  label={{ 
                    value: metricInfo.yAxis, 
                    angle: -90, 
                    position: 'insideLeft', 
                    style: { textAnchor: 'middle' } 
                  }}
                  tick={{ fontSize: 12 }}
                  width={40}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={metricInfo.color} 
                  strokeWidth={2} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="no-data-message">
              <p>No {metric} data available for this time period</p>
            </div>
          )}
        </div>
        
        <div className="metric-summary">
          {chartData.length > 0 && (
            <>
              <div className="summary-item">
                <span className="label">Latest:</span>
                <span className="value">
                  {metricInfo.formatter(chartData[chartData.length - 1]?.value || 0)}
                </span>
              </div>
              
              <div className="summary-item">
                <span className="label">Average:</span>
                <span className="value">
                  {metricInfo.formatter(
                    Math.round(
                      (chartData.reduce((sum, item) => sum + item.value, 0) / chartData.length) * 10
                    ) / 10
                  )}
                </span>
              </div>
              
              {metric !== 'workouts' && (
                <div className="summary-item">
                  <span className="label">Change:</span>
                  <span className="value change">
                    {chartData.length > 1 ? (
                      <>
                        {((chartData[chartData.length - 1].value - chartData[0].value) > 0 ? '+' : '')}
                        {Math.round((chartData[chartData.length - 1].value - chartData[0].value) * 10) / 10}
                        {metric === 'weight' ? ' lbs' : metric === 'sleep' ? ' hrs' : ''}
                      </>
                    ) : 'N/A'}
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};