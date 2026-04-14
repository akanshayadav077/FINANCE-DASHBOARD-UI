// Sample transactions to start with - Specific transactions updated to 2026
export const initialTransactions = [
  { id: 1, date: '2025-01-05', description: 'Salary', category: 'Salary', amount: 85000, type: 'income' },
  { id: 2, date: '2025-01-08', description: 'Grocery Store', category: 'Food', amount: 2400, type: 'expense' },
  { id: 3, date: '2026-01-10', description: 'Netflix', category: 'Entertainment', amount: 649, type: 'expense' },
  { id: 4, date: '2025-01-12', description: 'Electricity Bill', category: 'Utilities', amount: 1800, type: 'expense' },
  { id: 5, date: '2025-01-15', description: 'Freelance Project', category: 'Freelance', amount: 12000, type: 'income' },
  { id: 6, date: '2025-01-18', description: 'Restaurant', category: 'Food', amount: 1200, type: 'expense' },
  { id: 7, date: '2025-01-20', description: 'Uber', category: 'Transport', amount: 450, type: 'expense' },
  { id: 8, date: '2025-01-22', description: 'Amazon', category: 'Shopping', amount: 3200, type: 'expense' },
  { id: 9, date: '2025-01-25', description: 'Internet Bill', category: 'Utilities', amount: 999, type: 'expense' },
  { id: 10, date: '2025-01-28', description: 'Movie Tickets', category: 'Entertainment', amount: 800, type: 'expense' },
  { id: 11, date: '2026-02-05', description: 'Salary', category: 'Salary', amount: 85000, type: 'income' },
  { id: 12, date: '2025-02-04', description: 'Grocery Store', category: 'Food', amount: 2100, type: 'expense' },
  { id: 13, date: '2025-02-07', description: 'Gym Membership', category: 'Health', amount: 1500, type: 'expense' },
  { id: 14, date: '2025-02-10', description: 'Bonus', category: 'Salary', amount: 10000, type: 'income' },
  { id: 15, date: '2025-02-14', description: 'Dinner Out', category: 'Food', amount: 1800, type: 'expense' },
  { id: 16, date: '2025-02-18', description: 'Clothes Shopping', category: 'Shopping', amount: 4500, type: 'expense' },
  { id: 17, date: '2025-02-20', description: 'Electricity Bill', category: 'Utilities', amount: 1650, type: 'expense' },
  { id: 18, date: '2025-02-22', description: 'Spotify', category: 'Entertainment', amount: 119, type: 'expense' },
  { id: 19, date: '2025-02-25', description: 'Freelance Work', category: 'Freelance', amount: 8000, type: 'income' },
  { id: 20, date: '2026-03-15', description: 'Metro Card', category: 'Transport', amount: 500, type: 'expense' },
  { id: 21, date: '2025-03-01', description: 'Salary', category: 'Salary', amount: 85000, type: 'income' },
  { id: 22, date: '2025-03-05', description: 'Grocery Store', category: 'Food', amount: 2600, type: 'expense' },
  { id: 23, date: '2025-03-08', description: 'Doctor Visit', category: 'Health', amount: 800, type: 'expense' },
  { id: 24, date: '2025-03-12', description: 'Online Course', category: 'Education', amount: 3000, type: 'expense' },
  { id: 25, date: '2025-03-15', description: 'Rent', category: 'Housing', amount: 18000, type: 'expense' },
  { id: 26, date: '2025-03-18', description: 'Cab Rides', category: 'Transport', amount: 900, type: 'expense' },
  { id: 27, date: '2025-03-20', description: 'Freelance Project', category: 'Freelance', amount: 15000, type: 'income' },
  { id: 28, date: '2025-03-22', description: 'Amazon', category: 'Shopping', amount: 2200, type: 'expense' },
  { id: 29, date: '2025-03-25', description: 'Internet + OTT Bundle', category: 'Utilities', amount: 1299, type: 'expense' },
  { id: 30, date: '2026-03-28', description: 'Concert Tickets', category: 'Entertainment', amount: 2500, type: 'expense' },
  { id: 31, date: '2025-03-10', description: 'Netflix', category: 'Entertainment', amount: 5000, type: 'expense' },
  { id: 32, date: '2025-02-15', description: 'School Fees', category: 'Education', amount: 30000, type: 'expense' }
]

// Balance trend data for the line chart (monthly)
export const balanceTrendData = [
  { month: 'Oct', balance: 42000 },
  { month: 'Nov', balance: 55000 },
  { month: 'Dec', balance: 48000 },
  { month: 'Jan', balance: 72000 },
  { month: 'Feb', balance: 89000 },
  { month: 'Mar', balance: 107000 },
]

// All categories available for the add transaction form
export const CATEGORIES = [
  'Salary', 'Freelance', 'Food', 'Transport', 'Utilities',
  'Entertainment', 'Shopping', 'Health', 'Education', 'Housing', 'Other'
]

