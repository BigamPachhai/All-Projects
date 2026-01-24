# 📜 NPM Scripts Cheat Sheet

Quick reference for all available npm commands in this project.

---

## 🎯 Root Directory Commands

Run these from the root `/ChatAPP` directory:

```bash
# Install all dependencies (backend + frontend)
npm run install:all

# Clean all node_modules
npm run clean

# Clean and reinstall everything
npm run clean:install

# Build for production (installs deps + builds frontend)
npm run build

# Start production server (backend only)
npm start

# Run backend dev server
npm run dev:backend

# Run frontend dev server
npm run dev:frontend
```

---

## 🔧 Backend Commands

Run these from `/backend` directory:

```bash
cd backend

# Development mode with auto-restart (nodemon)
npm run dev

# Production mode
npm start

# Install a new package
npm install <package-name>

# Install a dev dependency
npm install --save-dev <package-name>

# Update all dependencies
npm update

# Check for outdated packages
npm outdated

# Audit for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix
```

---

## 🎨 Frontend Commands

Run these from `/frontend` directory:

```bash
cd frontend

# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Install a new package
npm install <package-name>

# Install a dev dependency
npm install --save-dev <package-name>

# Update all dependencies
npm update

# Check for outdated packages
npm outdated
```

---

## 🚀 Quick Start (Development)

### Option 1: Separate Terminals (Recommended)

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

### Option 2: Using Root Scripts

**Terminal 1:**
```bash
npm run install:all
npm run dev:backend
```

**Terminal 2:**
```bash
npm run dev:frontend
```

---

## 🏭 Production Build & Deploy

```bash
# From root directory

# 1. Build everything
npm run build

# 2. Start production server
npm start

# Or for platforms like Render/Heroku
npm run build  # During build phase
npm start      # During start phase
```

---

## 🧹 Maintenance Commands

```bash
# Clean install (if you have issues)
npm run clean:install

# Update all packages to latest
cd backend && npm update
cd ../frontend && npm update

# Check for security vulnerabilities
cd backend && npm audit
cd frontend && npm audit

# Fix vulnerabilities
cd backend && npm audit fix
cd frontend && npm audit fix

# View installed packages
npm list --depth=0
```

---

## 🐛 Debugging & Troubleshooting

```bash
# Check Node version
node --version  # Should be >= 20.0.0

# Check npm version
npm --version

# Clear npm cache
npm cache clean --force

# Verify installation
npm install --verbose

# Run with debugging
cd backend
DEBUG=* npm run dev

# Check for port usage
lsof -ti:3000  # Backend
lsof -ti:5173  # Frontend

# Kill process on port
kill -9 $(lsof -ti:3000)
```

---

## 📦 Package Management

### Installing Packages

```bash
# Production dependency
npm install <package-name>

# Dev dependency (only needed in development)
npm install --save-dev <package-name>

# Specific version
npm install <package-name>@1.2.3

# Latest version
npm install <package-name>@latest

# Install from GitHub
npm install user/repo
```

### Removing Packages

```bash
# Remove package
npm uninstall <package-name>

# Remove dev dependency
npm uninstall --save-dev <package-name>
```

### Updating Packages

```bash
# Update a specific package
npm update <package-name>

# Update all packages
npm update

# Update to latest (breaking changes possible)
npm install <package-name>@latest
```

---

## 🔍 Package Information

```bash
# View package info
npm info <package-name>

# List installed packages
npm list

# List only top-level packages
npm list --depth=0

# List outdated packages
npm outdated

# Check which packages depend on another
npm ls <package-name>
```

---

## ⚙️ Environment-Specific Commands

### Development
```bash
NODE_ENV=development npm run dev
```

### Production
```bash
NODE_ENV=production npm start
```

### Custom Port (Backend)
```bash
PORT=3001 npm run dev
```

---

## 🧪 Testing (If you add tests)

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- <filename>
```

---

## 📝 Useful npm Commands

```bash
# Initialize new package.json
npm init

# Initialize with defaults
npm init -y

# Check npm configuration
npm config list

# Set npm registry (if needed)
npm config set registry https://registry.npmjs.org/

# View package.json scripts
npm run

# Get help for a command
npm help <command>

# Open package repository
npm repo <package-name>

# Open package documentation
npm docs <package-name>

# Open package bugs page
npm bugs <package-name>
```

---

## 🔧 Advanced Commands

```bash
# Rebuild native modules
npm rebuild

# Deduplicate dependencies
npm dedupe

# Prune unused packages
npm prune

# Pack application into tarball
npm pack

# Publish package (if making it public)
npm publish

# Run arbitrary script
npm run <script-name>

# Pass arguments to script
npm run <script-name> -- --arg1 --arg2
```

---

## 🚨 Emergency Commands

```bash
# If nothing works, nuclear option:
rm -rf node_modules package-lock.json
rm -rf backend/node_modules backend/package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json
npm install
cd backend && npm install
cd ../frontend && npm install

# Kill all node processes (use with caution!)
killall node

# Clear all caches
npm cache clean --force
```

---

## 💡 Pro Tips

1. **Use `npm ci`** instead of `npm install` for CI/CD (faster, cleaner)
2. **Lock dependencies** with `package-lock.json` (commit it!)
3. **Use npm scripts** instead of remembering complex commands
4. **Audit regularly** with `npm audit` to catch vulnerabilities
5. **Update carefully** - test after updates
6. **Use `.npmrc`** file for project-specific npm config

---

## 📚 Related Files

- `package.json` - Dependencies and scripts
- `package-lock.json` - Locked dependency versions
- `.npmrc` - npm configuration (if exists)
- `.nvmrc` - Node version (if exists)

---

## 🔗 Official Documentation

- [npm Docs](https://docs.npmjs.com/)
- [npm CLI Commands](https://docs.npmjs.com/cli/v9/commands)
- [package.json Spec](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)

---

**Save this file for quick reference! 📌**
