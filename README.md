<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1nHQNUZbFB2aKLccFdzBPZi7yyyQhal50

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. Run the app:
   ```bash
   npm run dev
   ```

## Deploy to Vercel

Das Projekt ist bereits für Vercel vorbereitet.

### Option 1: Vercel CLI

1. Installiere die Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploye das Projekt:
   ```bash
   vercel
   ```

3. Für Production:
   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration

1. Push das Projekt zu GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. Importiere das Repository
4. Vercel erkennt automatisch die Vite-Konfiguration
5. Füge Environment-Variablen hinzu (z.B. `GEMINI_API_KEY`)
6. Klicke auf "Deploy"

### Environment Variables

Stelle sicher, dass folgende Environment-Variablen in Vercel gesetzt sind:
- `GEMINI_API_KEY` - Dein Gemini API Key

Die Konfiguration befindet sich in `vercel.json`.
