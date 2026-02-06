/**
 * Zentrale Bildkonfiguration
 *
 * Alle Bilder liegen im Ordner: public/bilder/
 * Zum Austauschen: Datei in public/bilder/ ersetzen, Dateinamen beibehalten.
 */

export const images = {
  // Hero Section - Hintergrundbild
  hero: {
    background: '/bilder/hero-background.jpg',
  },

  // Problem Section - Bild in der rechten Spalte (mit 15h+-Badge)
  problem: {
    main: '/bilder/problem-main.jpg',
  },

  // Why Us Section - Hauptbild
  whyUs: {
    main: '/bilder/whyus-main.jpg',
  },

  // Quick Start Section - Bilder für die 3 Schritte
  quickStart: {
    step1: '/bilder/quickstart-step1.jpg',
    step2: '/bilder/quickstart-step2.jpg',
    step3: '/bilder/quickstart-step3.jpg',
  },
} as const;

