# Fix Repo Structure TODO

## Status:
Repo root is cwd (.git here), FINANCE-DASHBOARD-UI-main is tracked subdir.

## Plan:
1. cd ..
2. git rm -r --cached FINANCE-DASHBOARD-UI-main
3. mv FINANCE-DASHBOARD-UI-main/* .
4. mv FINANCE-DASHBOARD-UI-main/.[!.]* . || true
5. rm -r FINANCE-DASHBOARD-UI-main
6. git add .
7. git commit -m "Fix project structure: move files to repo root"
8. git push

**Next: cd .. (run from cwd)**

Note: mv/rm use Windows `move`/`rmdir /s`.
