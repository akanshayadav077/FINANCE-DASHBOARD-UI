// Shows the 3 summary cards at the top: Total Balance, Income, Expenses

function SummaryCards({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpenses

  const formatAmount = (num) => {
    return '₹' + num.toLocaleString('en-IN')
  }

  const cards = [
    {
      label: 'Total Balance',
      value: formatAmount(balance),
      icon: '💰',
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      label: 'Total Income',
      value: formatAmount(totalIncome),
      icon: '📈',
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      label: 'Total Expenses',
      value: formatAmount(totalExpenses),
      icon: '📉',
      color: 'from-red-500 to-red-600',
      textColor: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/20',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className={`rounded-2xl p-5 ${card.bg} border border-slate-100 dark:border-slate-700`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {card.label}
            </span>
            <span className="text-xl">{card.icon}</span>
          </div>
          <p className={`text-2xl font-bold font-mono ${card.textColor}`}>
            {card.value}
          </p>
        </div>
      ))}
    </div>
  )
}

export default SummaryCards
