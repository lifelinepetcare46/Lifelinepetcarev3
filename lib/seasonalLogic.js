// lib/seasonalLogic.js

export function getSeasonalContext() {
  const month = new Date().getMonth() + 1;

  // Summer: Mar–Jun
  if (month >= 3 && month <= 6) {
    return {
      title: "🌞 Summer Pet Care Alert",
      message:
        "Garmi me pets ko dehydration, heat stroke aur low appetite ka risk hota hai.",
      tips: [
        "Paani zyada available rakhein",
        "Direct sunlight avoid karein",
        "Lethargy ya panting notice karein",
      ],
      cta: "Book Summer Health Check",
    };
  }

  // Monsoon: Jul–Sep
  if (month >= 7 && month <= 9) {
    return {
      title: "🌧️ Monsoon Pet Health Warning",
      message:
        "Monsoon me skin infection, ticks aur stomach issues common hote hain.",
      tips: [
        "Wet paws dry rakhein",
        "Scratching / redness observe karein",
        "Tick protection zaroori hai",
      ],
      cta: "Book Monsoon Vet Visit",
    };
  }

  // Winter: Oct–Feb
  return {
    title: "❄️ Winter Pet Care Advisory",
    message:
      "Thand me joint pain, low immunity aur cough jaise symptoms aa sakte hain.",
    tips: [
      "Warm bedding provide karein",
      "Activity level observe karein",
      "Older pets pe extra dhyan dein",
    ],
    cta: "Book Winter Health Check",
  };
}
