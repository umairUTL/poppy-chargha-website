# Setup Guide - Poppy Chargha House Website

## Step-by-Step Setup Instructions

### Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - To check if you have it installed, open terminal/command prompt and run:
     ```bash
     node --version
     ```
   - You should see something like `v18.x.x` or higher

2. **npm** (comes with Node.js)
   - To check if you have it:
     ```bash
     npm --version
     ```

### Installation Steps

#### Step 1: Open Terminal/Command Prompt

- **Windows**: Press `Win + R`, type `cmd` or `powershell`, press Enter
- **Mac/Linux**: Open Terminal application

#### Step 2: Navigate to Project Directory

```bash
cd C:\Users\hp\poppy-chargha-house
```

Or if you're in a different location, navigate to where the project folder is located.

#### Step 3: Install Dependencies

This will install all required packages (Next.js, React, Tailwind CSS, etc.):

```bash
npm install
```

**What this does:**
- Reads `package.json` file
- Downloads and installs all required packages
- Creates a `node_modules` folder with all dependencies

**Expected output:**
- You'll see a progress bar and various package names being installed
- This may take 2-5 minutes depending on your internet speed
- When complete, you'll see something like "added 500 packages"

#### Step 4: Start Development Server

```bash
npm run dev
```

**What this does:**
- Starts the Next.js development server
- Compiles your website
- Makes it available at http://localhost:3000

**Expected output:**
```
▲ Next.js 14.0.4
- Local:        http://localhost:3000
- Ready in 2.5s
```

#### Step 5: View Your Website

1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Go to: **http://localhost:3000**
3. You should see your Poppy Chargha House website!

### Development Commands

While the development server is running:

- **View website**: Open http://localhost:3000 in your browser
- **Auto-reload**: Any changes you make to files will automatically refresh in the browser
- **Stop server**: Press `Ctrl + C` in the terminal

### Building for Production

When you're ready to deploy your website:

#### Step 1: Build the Project

```bash
npm run build
```

This creates an optimized production version of your website.

#### Step 2: Start Production Server

```bash
npm start
```

This runs the production version (faster, optimized).

### Troubleshooting

#### Problem: "npm is not recognized"
**Solution**: Node.js is not installed or not in PATH. Install Node.js from nodejs.org

#### Problem: "Port 3000 is already in use"
**Solution**: Another application is using port 3000. Either:
- Close the other application
- Or run: `npm run dev -- -p 3001` (uses port 3001 instead)

#### Problem: "Module not found" errors
**Solution**: Run `npm install` again to ensure all dependencies are installed

#### Problem: Website shows errors
**Solution**: 
1. Check the terminal for error messages
2. Make sure all files are saved
3. Try stopping the server (Ctrl+C) and running `npm run dev` again

### Project Structure Overview

```
poppy-chargha-house/
├── app/                    # Main application files
│   ├── layout.tsx         # Website layout & metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   └── sections/         # Page sections
├── public/               # Static files (images, etc.)
├── package.json          # Project dependencies
└── tailwind.config.ts    # Tailwind CSS configuration
```

### Next Steps After Setup

1. **Customize Content**: Edit files in `components/sections/` to update text, images, etc.
2. **Add Images**: Place menu images in `public/menu/` folder
3. **Update Contact Info**: Modify phone numbers in `components/sections/Branches.tsx`
4. **Deploy**: When ready, deploy to Vercel, Netlify, or your hosting provider

### Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run lint` | Check for code errors |

### Need Help?

- Check the terminal/console for error messages
- Ensure Node.js version is 18 or higher
- Make sure you're in the correct project directory
- Try deleting `node_modules` folder and running `npm install` again

---

**You're all set!** 🎉 Your website should now be running at http://localhost:3000
