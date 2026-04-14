import { useState } from 'react'
import { CATEGORIES } from '../data/transactions'

function AddTransactionForm({ isOpen, onClose, onAdd }) {
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

    // Reset the form and close modal
    setFormData({
      description: '',
      category: 'Food',
      amount: '',
      type: 'expense',
      date: new Date().toISOString().split('T')[0],
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Add New Transaction
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="text-sm text-slate-600 dark:text-slate-300 mb-1 block">Description</label>
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g. Grocery shopping"
              className="w-full text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600 dark:text-slate-300 mb-1 block">Amount (₹)</label>
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
            <label className="text-sm text-slate-600 dark:text-slate-300 mb-1 block">Category</label>
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
            <label className="text-sm text-slate-600 dark:text-slate-300 mb-1 block">Type</label>
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
            <label className="text-sm text-slate-600 dark:text-slate-300 mb-1 block">Date</label>
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
          <p className="text-sm text-red-500 mt-3">{error}</p>
        )}

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Add Transaction
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddTransactionForm
