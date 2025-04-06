# Git & GitHub Cheatsheet

## ✅ To Check Git Status
```bash
git status
```

---

## 🚀 Basic Git Commands
```bash
git init                         # Initialize a new Git repository
git remote add <url>            # Add remote repository
git add .                       # Stage all changes
git commit -m "your message"    # Commit changes with message
git push origin master          # Push to master branch on remote
```

---

## 🌿 Branch Management

### To Create a Branch:
```bash
git branch <branch-name>
```

### To Switch to a Branch:
```bash
git checkout <branch-name>
```

### If branch exists on remote and you want to get it locally:
```bash
git fetch origin
git checkout --track origin/<branch-name>
```

### To Delete a Branch:
```bash
git branch -d <branch-name>
```

---

## 🔄 Pulling Changes From One Branch to Another

```bash
git pull origin <branch-name>
# e.g., git pull origin main
```

---

## 🧹 To Remove Unwanted Files

```bash
git clean -i
```

---

## 📦 NPM Dependency Management

### To Uninstall a Dependency:
```bash
npm uninstall <package-name> -g
# Example: npm uninstall create-react-app -g
```

---

## 🔌 JSON Server

### Run JSON server on port 3004:
```bash
json-server --watch db.json --port 3004
```

### JSON Server with Auth (custom setup):
```bash
json-server db.json --port 7001 --middlewares ./node_modules/json-server-auth
```

---

## ☁️ Vercel Deployment

### Install Vercel CLI:
```bash
npm i -g vercel
```

### To Redeploy:
```bash
vercel --prod
```
---

## 🔧 Git Configuration

### Set Git Username and Email (Global - applies to all repos)
```bash
git config --global user.name "Divya-Konala"
git config --global user.email "your-email@example.com"
```

### Set Git Username and Email (Local - only for current repo)
```bash
git config user.name "Divya-Konala"
git config user.email "your-email@example.com"
```

### Check Current Git Configuration
```bash
git config --list
```

### Check Specific Config Value
```bash
git config user.name
git config user.email
```
