// Shows spending insights: top category and monthly comparison

function Insights({ transactions }) {
  // Get expenses grouped by category
  const expenseByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount
      return acc
    }, {})

  // Find highest spending category
  const topCategory = Object.entries(expenseByCategory).sort((a, b) => b[1] - a[1])[0]

  // Monthly comparison - compare last 2 months from the data
  const monthlyExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      const month = t.date.slice(0, 7) // "2024-03"
      acc[month] = (acc[month] || 0) + t.amount
      return acc
    }, {})

  const sortedMonths = Object.keys(monthlyExpenses).sort()
  const lastMonth = sortedMonths[sortedMonths.length - 1]
  const prevMonth = sortedMonths[sortedMonths.length - 2]

  const lastMonthAmt = monthlyExpenses[lastMonth] || 0
  const prevMonthAmt = monthlyExpenses[prevMonth] || 0
  const diff = lastMonthAmt - prevMonthAmt
  const percentChange = prevMonthAmt > 0 ? ((diff / prevMonthAmt) * 100).toFixed(1) : null

  const formatMonth = (str) => {
    if (!str) return '—'
    const [year, month] = str.split('-')
    return new Date(year, month - 1).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">
      <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-4">
        Insights
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Top spending category */}
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
          <p className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-1">
            🔥 Highest Spending Category
          </p>
          {topCategory ? (
            <>
              <p className="text-lg font-bold text-slate-700 dark:text-slate-200">
                {topCategory[0]}
              </p>
              <p className="text-sm font-mono text-amber-600 dark:text-amber-400">
                ₹{topCategory[1].toLocaleString('en-IN')}
              </p>
            </>
          ) : (
            <p className="text-sm text-slate-400">No expense data</p>
          )}
        </div>

        {/* Monthly comparison */}
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
          <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mb-1">
            📊 Month-over-Month Expenses
          </p>
          {prevMonth && lastMonth ? (
            <>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {formatMonth(lastMonth)}:{' '}
                <span className="font-mono font-semibold">
                  ₹{lastMonthAmt.toLocaleString('en-IN')}
                </span>
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {formatMonth(prevMonth)}:{' '}
                <span className="font-mono">₹{prevMonthAmt.toLocaleString('en-IN')}</span>
              </p>
              {percentChange !== null && (
                <p className={`text-xs mt-1 font-medium ${diff > 0 ? 'text-red-500' : 'text-green-500'}`}>
                  {diff > 0 ? '▲' : '▼'} {Math.abs(percentChange)}% vs previous month
                </p>
              )}
            </>
          ) : (
            <p className="text-sm text-slate-400">Need at least 2 months of data</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Insights
