import { useState } from 'react'

const CATEGORY_ICONS = {
  Food: '🍜',
  Transport: '🚗',
  Utilities: '⚡',
  Entertainment: '🎬',
  Shopping: '🛍',
  Health: '💊',
  Education: '📚',
  Housing: '🏠',
  Salary: '💼',
  Freelance: '💻',
  Other: '📦',
}

const CATEGORY_COLORS = {
  Food:          { bg: 'bg-orange-500/15', text: 'text-orange-400' },
  Transport:     { bg: 'bg-blue-500/15',   text: 'text-blue-400' },
  Utilities:     { bg: 'bg-yellow-500/15', text: 'text-yellow-400' },
  Entertainment: { bg: 'bg-pink-500/15',   text: 'text-pink-400' },
  Shopping:      { bg: 'bg-purple-500/15', text: 'text-purple-400' },
  Health:        { bg: 'bg-red-500/15',    text: 'text-red-400' },
  Education:     { bg: 'bg-cyan-500/15',   text: 'text-cyan-400' },
  Housing:       { bg: 'bg-teal-500/15',   text: 'text-teal-400' },
  Salary:        { bg: 'bg-green-500/15',  text: 'text-green-400' },
  Freelance:     { bg: 'bg-indigo-500/15', text: 'text-indigo-400' },
  Other:         { bg: 'bg-slate-500/15',  text: 'text-slate-400' },
}

function TransactionList({ transactions }) {
  const [filterType, setFilterType] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  const formatAmount = (amount) => {
    return '₹' + amount.toLocaleString('en-IN')
  }

  const filtered = transactions.filter(t => {
    const matchesType = filterType === 'all' || t.type === filterType
    const matchesSearch =
      t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  const sortedTransactions = [...filtered].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  return (
    <div className="glass rounded-2xl p-5">

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="font-display font-700 text-base text-white">
            Transactions
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {sortedTransactions.length} records
          </p>
        </div>

        <div className="flex items-center gap-2">

          {/* Search input */}
          <div className="relative">
            <svg
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 pointer-events-none"
              fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-xs bg-dark-800 border border-white/10 text-slate-200
                         placeholder:text-slate-600 rounded-lg pl-8 pr-3 py-2
                         w-40 focus:outline-none focus:border-accent-blue/50
                         focus:ring-1 focus:ring-accent-blue/20 transition-all"
            />
          </div>

          {/* Filter buttons */}
          <div className="flex bg-dark-800 border border-white/10 rounded-lg p-0.5 gap-0.5">
            {['all', 'income', 'expense'].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`text-xs capitalize px-3 py-1.5 rounded-md font-medium transition-all ${
                  filterType === type
                    ? type === 'income'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : type === 'expense'
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-dark-500 text-white'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Empty state */}
      {sortedTransactions.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-3xl mb-3 opacity-30">🔍</p>
          <p className="text-sm font-medium text-slate-500">No transactions found</p>
          <p className="text-xs text-slate-700 mt-1">Try adjusting your search or filter</p>
        </div>
      ) : (
        <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1">
          {sortedTransactions.map((t, index) => {
            const catStyle = CATEGORY_COLORS[t.category] || CATEGORY_COLORS.Other
            return (
              <div
                key={t.id}
                className="flex items-center justify-between px-3 py-3.5 rounded-xl
                           hover:bg-white/[0.04] border border-transparent
                           hover:border-white/[0.06] transition-all duration-150 group"
              >
                {/* Left: icon + details */}
                <div className="flex items-center gap-3 min-w-0">

                  {/* Category icon bubble */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                                  text-[17px] flex-shrink-0 ${catStyle.bg}`}>
                    {CATEGORY_ICONS[t.category] || '📦'}
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-100 truncate leading-snug">
                      {t.description}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className={`text-[11px] font-medium ${catStyle.text}`}>
                        {t.category}
                      </span>
                      <span className="text-slate-700 text-[10px]">•</span>
                      <span className="text-[11px] text-slate-600">
                        {formatDate(t.date)}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right: amount + type badge */}
                <div className="flex flex-col items-end flex-shrink-0 ml-4">
                  <span className={`text-sm font-bold font-mono tracking-tight ${
                    t.type === 'income' ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {t.type === 'income' ? '+' : '-'}{formatAmount(t.amount)}
                  </span>
                  <span className={`text-[10px] font-medium mt-0.5 px-1.5 py-0.5 rounded-md ${
                    t.type === 'income'
                      ? 'bg-emerald-500/10 text-emerald-500/70'
                      : 'bg-red-500/10 text-red-500/70'
                  }`}>
                    {t.type}
                  </span>
                </div>

              </div>
            )
          })}
        </div>
      )}

    </div>
  )
}

export default TransactionList