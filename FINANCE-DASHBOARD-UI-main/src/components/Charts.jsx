import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts'
import { balanceTrendData } from '../data/transactions'

// Colors for pie chart slices
const PIE_COLORS = ['#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6', '#f97316', '#06b6d4', '#84cc16']

function Charts({ transactions }) {
  // Build expense breakdown by category for pie chart
  const expenseByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount
      return acc
    }, {})

  const pieData = Object.entries(expenseByCategory).map(([name, value]) => ({
    name,
    value,
  }))

  const formatRupees = (value) => `₹${(value / 1000).toFixed(0)}k`

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Line Chart - Balance Trend */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-4">
          Balance Trend (Last 6 Months)
        </h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={balanceTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={formatRupees}
              tick={{ fontSize: 12, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Balance']}
              contentStyle={{
                borderRadius: '10px',
                border: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                fontSize: '13px',
              }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3b82f6"
              strokeWidth={2.5}
              dot={{ fill: '#3b82f6', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart - Expense Breakdown */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">
        <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-4">
          Expenses by Category
        </h3>
        {pieData.length === 0 ? (
          <div className="flex items-center justify-center h-[220px] text-slate-400 text-sm">
            No expense data available
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={entry.name} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Amount']}
                contentStyle={{
                  borderRadius: '10px',
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  fontSize: '13px',
                }}
              />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}

export default Charts
