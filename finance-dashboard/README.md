# Finance Dashboard

A frontend assignment project built with React + Vite, Tailwind CSS, and Recharts. The goal was to demonstrate understanding of React fundamentals, basic state management, and clean UI structuring.

---

## Setup

Make sure you have Node.js 18+ installed.

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Features

### Dashboard Overview
- Three summary cards showing Total Balance, Total Income, and Total Expenses
- A line chart showing balance trend over the last 6 months
- A donut pie chart breaking down expenses by category

### Transactions Section
- Lists all transactions with date, amount, category, and type
- Filter by type (Income / Expense / All)
- Search by category name
- Empty state handled when nothing matches the filter

### Role-Based UI (Frontend Only)
- Dropdown in the header to switch between **Admin** and **Viewer** roles
- Admins can add new transactions via a form
- Viewers only see the data — the add form is hidden
- A banner notifies viewers of their limited access

### Insights
- Shows the highest spending category
- Basic month-over-month comparison for expenses (e.g., March vs February)

### Dark Mode
- Toggle in the header switches between light and dark themes

### Data Persistence
- Transactions are saved to `localStorage` so they persist on page refresh

---

## Approach

I kept things simple and modular. Each section of the UI is its own component — Navbar, SummaryCards, Charts, TransactionList, AddTransactionForm, and Insights. All state lives in `App.jsx` using `useState`, so there's no Redux or complex state library involved.

The mock data lives in `src/data/transactions.js` and the app uses that as the starting point. When you add a transaction, it prepends to the list and saves everything to localStorage.

I tried to keep the code readable and not over-engineer it — it's a student project, not a production app. Things like the role-based access are purely frontend simulations (no real auth).

---

## Project Structure

```
src/
  components/
    Navbar.jsx           # Header with role switcher and dark mode
    SummaryCards.jsx     # Balance / Income / Expense cards
    Charts.jsx           # Line chart + Pie chart
    TransactionList.jsx  # List with filter and search
    AddTransactionForm.jsx  # Form for adding transactions (admin only)
    Insights.jsx         # Top category + monthly comparison
  data/
    transactions.js      # Mock data and constants
  App.jsx                # Main component, holds all state
  main.jsx               # Entry point
  index.css              # Tailwind + global styles
```

---

## Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **Recharts** for charts
- **localStorage** for basic persistence

---

## Notes

- The balance trend chart uses static monthly data (not derived from transactions) to show a realistic multi-month view
- Role switching is purely UI — refreshing resets the role to admin (intentional, since there's no auth)
- Tested on Chrome; should work fine on other modern browsers
