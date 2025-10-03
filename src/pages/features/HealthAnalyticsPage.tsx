import React, { useState } from 'react';
import { LineChart, Activity, ArrowLeft } from 'lucide-react';

const HealthAnalyticsPage: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('all');
  const [dateRange, setDateRange] = useState('1m');

  const metrics = [
    { id: 'bp', name: 'Blood Pressure', value: '120/80', trend: '+2%' },
    { id: 'weight', name: 'Weight', value: '165 lbs', trend: '-1%' },
    { id: 'glucose', name: 'Blood Glucose', value: '95 mg/dL', trend: '+5%' },
    { id: 'heart', name: 'Heart Rate', value: '68 bpm', trend: 'stable' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Activity className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Health Analytics</h1>
            <p className="text-gray-600 mt-1">Track and analyze your health metrics over time</p>
          </div>
        </div>
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="all">All Metrics</option>
            <option value="bp">Blood Pressure</option>
            <option value="weight">Weight</option>
            <option value="glucose">Blood Glucose</option>
            <option value="heart">Heart Rate</option>
          </select>

          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="1w">Last Week</option>
            <option value="1m">Last Month</option>
            <option value="3m">Last 3 Months</option>
            <option value="1y">Last Year</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <div key={metric.id} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">{metric.name}</h3>
              <p className="mt-1 text-2xl font-semibold text-gray-900">{metric.value}</p>
              <div className={`mt-1 text-sm ${
                metric.trend.includes('+') ? 'text-green-600' :
                metric.trend.includes('-') ? 'text-red-600' :
                'text-gray-600'
              }`}>
                {metric.trend}
              </div>
            </div>
          ))}
        </div>

        <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <LineChart className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">Interactive health trends chart would appear here</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Analysis & Insights</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <Activity className="h-5 w-5 text-primary-600 mt-1 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">Blood Pressure Trend</h3>
              <p className="text-sm text-gray-600">Your blood pressure has remained stable over the past month.</p>
            </div>
          </div>
          <div className="flex items-start">
            <Activity className="h-5 w-5 text-primary-600 mt-1 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">Weight Management</h3>
              <p className="text-sm text-gray-600">You've maintained a consistent weight within your target range.</p>
            </div>
          </div>
          <div className="flex items-start">
            <Activity className="h-5 w-5 text-primary-600 mt-1 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">Blood Glucose Levels</h3>
              <p className="text-sm text-gray-600">Your glucose levels show slight elevation in the morning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAnalyticsPage;