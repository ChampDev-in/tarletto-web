# Tarletto Consulting Website

A production-ready, static consulting firm website for **Tarletto**, built with React and Vite.

## Requirements

This is a 100% static frontend application with no backend dependencies, built for easy deployment to Vercel.

## Setup & Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Setup Environment Variables:
   Create a `.env` file in the root directory and add your Web3Forms access key:
   ```
   VITE_WEB3FORMS_KEY=your_web3forms_access_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment to Vercel

This project is configured to be deployed easily to Vercel without any modifications.

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project into Vercel.
3. Vercel will automatically detect the Vite preset:
   - Build Command: `npm run build`
   - Output Directory: `dist/public` (or adjust based on Vercel's config)
4. Add the Environment Variable in Vercel settings:
   - Key: `VITE_WEB3FORMS_KEY`
   - Value: Your Web3Forms key
5. Deploy!

## Features

- **Static Frontend**: No backend API calls or server processing.
- **Web3Forms Integration**: Contact form submissions are handled purely through frontend HTML forms directly to the Web3Forms API, hiding the target email address.
- **Responsive Design**: Built with Tailwind CSS, fully responsive across mobile, tablet, and desktop.
- **Dark Theme**: Professional dark theme consulting design.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion (Animations)
- Lucide React (Icons)
- Wouter (Routing)
