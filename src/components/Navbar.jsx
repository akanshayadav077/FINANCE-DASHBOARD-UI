function Navbar({ role, onRoleChange, darkMode, onDarkModeToggle }) {
  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">📊</span>
          <span className="font-bold text-slate-800 dark:text-slate-100 text-lg">
            FinanceBoard
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Role indicator badge */}
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              role === 'admin'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            {role === 'admin' ? '🔑 Admin' : '👁 Viewer'}
          </span>

          {/* Role switcher */}
          <select
            value={role}
            onChange={(e) => onRoleChange(e.target.value)}
            className="text-sm px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="admin">Admin</option>
            <option value="viewer">Viewer</option>
          </select>

          {/* Dark mode toggle */}
          <button
            onClick={onDarkModeToggle}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-base"
            title="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
