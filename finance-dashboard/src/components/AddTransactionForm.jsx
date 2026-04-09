import { useState } from 'react'
import { CATEGORIES } from '../data/transactions'

function AddTransactionForm({ onAdd }) {
  const [formData, setFormData] = useState({
    description: '',
    category: 'Food',
    amount: '',
    type: 'expense',
    date: new Date().toISOString().split('T')[0],
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = () => {
    if (!formData.description.trim()) {
      setError('Please enter a description')
      return
    }
    if (!formData.amount || Number(formData.amount) <= 0) {
      setError('Please enter a valid amount')
      return
    }

    const newTransaction = {
      id: Date.now(),
      description: formData.description.trim(),
      category: formData.category,
      amount: Number(formData.amount),
      type: formData.type,
      date: formData.date,
    }

    onAdd(newTransaction)

    // Reset the form
    setFormData({
      description: '',
      category: 'Food',
      amount: '',
      type: 'expense',
      date: new Date().toISOString().split('T')[0],
    })
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">
      <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-4">
        Add New Transaction
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Description</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="e.g. Grocery shopping"
            className="w-full text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Amount (₹)</label>
          <input
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            placeholder="e.g. 1500"
            min="1"
            className="w-full text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div>
          <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Date</label>
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-500 mt-2">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        className="mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
      >
        Add Transaction
      </button>
    </div>
  )
}

export default AddTransactionForm
