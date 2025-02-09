// src/components/ProgressChart/ProgressChart.jsx
import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import styles from './ProgressChart.module.css';

// Sample data: "focus" represents a focus score out of 100 for each day.
const data = [
  { day: 'Mon', focus: 60 },
  { day: 'Tue', focus: 65 },
  { day: 'Wed', focus: 70 },
  { day: 'Thu', focus: 80 },
  { day: 'Fri', focus: 75 },
  { day: 'Sat', focus: 85 },
  { day: 'Sun', focus: 90 },
];

const ProgressChart = () => {
  return (
    <div className={styles.chartWrapper}>
      <h2 className={styles.chartTitle}>Your Weekly Focus Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="day" tick={{ fill: 'var(--text-light)' }} />
          <YAxis tick={{ fill: 'var(--text-light)' }} domain={[50, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--bg-light)',
              borderRadius: '8px',
              border: 'none',
            }}
            itemStyle={{ color: 'var(--text-light)' }}
          />
          <Line
            type="monotone"
            dataKey="focus"
            stroke="var(--primary-color)"
            strokeWidth={3}
            dot={{ r: 5, stroke: 'var(--primary-color)', strokeWidth: 2, fill: '#fff' }}
            activeDot={{ r: 8 }}
            isAnimationActive={true}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
