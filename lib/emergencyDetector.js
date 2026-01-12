// /lib/emergencyDetector.js

const emergencyKeywords = [
  "bleeding",
  "blood",
  "seizure",
  "fits",
  "unconscious",
  "collapsed",
  "not breathing",
  "breathing problem",
  "vomiting continuously",
  "not eating",
  "not drinking",
  "hit by car",
  "accident",
  "severe pain",
  "crying nonstop",
];

export function detectEmergency(userMessage = "") {
  const msg = userMessage.toLowerCase();

  return emergencyKeywords.some(keyword =>
    msg.includes(keyword)
  );
}
