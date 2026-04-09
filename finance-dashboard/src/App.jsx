import { useState, useEffect } from 'react'
import { initialTransactions } from './data/transactions'
import Navbar from './components/Navbar'
import SummaryCards from './components/SummaryCards'
import Charts from './components/Charts'
import TransactionList from './components/TransactionList'
import AddTransactionForm from './components/AddTransactionForm'
import Insights from './components/Insights'

// Load from localStorage if available, otherwise use initial data
function loadTransactions() {
  try {
    const saved = localStorage.getItem('fd_transactions')
    return saved ? JSON.parse(saved) : initialTransactions
  } catch {
    return initialTransactions
  }
}

function App() {
  const [transactions, setTransactions] = useState(loadTransactions)
  const [role, setRole] = useState('admin')
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  // Sync to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('fd_transactions', JSON.stringify(transactions))
  }, [transactions])

  // Apply or remove dark class on root html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleAddTransaction = (newTransaction) => {
    setTransactions(prev => [newTransaction, ...prev])
  }

  const tabs = ['overview', 'transactions', 'insights']

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
      <Navbar
        role={role}
        onRoleChange={setRole}
        darkMode={darkMode}
        onDarkModeToggle={() => setDarkMode(prev => !prev)}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Viewer notice banner */}
        {role === 'viewer' && (
          <div className="mb-4 px-4 py-2.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-sm text-amber-700 dark:text-amber-300">
            👁 You're in <strong>Viewer mode</strong> — you can view data but cannot add transactions.
          </div>
        )}

        {/* Tab navigation */}
        <div className="flex gap-1 bg-white dark:bg-slate-800 rounded-xl p-1 border border-slate-100 dark:border-slate-700 mb-6 w-fit">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-5">
            <SummaryCards transactions={transactions} />
            <Charts transactions={transactions} />
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className="space-y-5">
            {/* Only admins can add transactions */}
            {role === 'admin' && (
              <AddTransactionForm onAdd={handleAddTransaction} />
            )}
            <TransactionList transactions={transactions} />
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div className="space-y-5">
            <Insights transactions={transactions} />
            {/* Show a summary as well for context */}
            <SummaryCards transactions={transactions} />
          </div>
        )}
      </main>
    </div>
  )
}

export default App
