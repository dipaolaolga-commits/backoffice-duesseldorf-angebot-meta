/**
 * Zentrale Bildkonfiguration
 * 
 * Hier können Sie alle Bilder auf der Website zentral verwalten und leicht austauschen.
 * 
 * Alle Bilder sind lokal im Ordner /public/assets/images/ gespeichert.
 * Um ein Bild auszutauschen:
 * 1. Ersetzen Sie die entsprechende .jpg Datei im Ordner public/assets/images/
 * 2. Behalten Sie den Dateinamen bei, oder aktualisieren Sie den Pfad hier
 * 
 * Unterstützte Formate: .jpg, .jpeg, .png, .webp
 */

export const images = {
  // Hero Section - Hintergrundbild
  hero: {
    background: '/assets/images/hero-background.jpg',
  },

  // Problem Section - Bild in der rechten Spalte
  problem: {
    main: '/assets/images/problem-main.jpg',
  },

  // Why Us Section - Hauptbild
  whyUs: {
    main: '/assets/images/whyus-main.jpg',
  },

  // Quick Start Section - Bilder für die 3 Schritte
  quickStart: {
    step1: '/assets/images/quickstart-step1.jpg',
    step2: '/assets/images/quickstart-step2.jpg',
    step3: '/assets/images/quickstart-step3.jpg',
  },
} as const;

