const questions = {
  news: [
    "Minneapolis waives adoption fees for Adopt-A-Shelter-Dog Month.",
    "'Empty the Shelters' offers reduced adoption fees nationwide.",
    "Fake animal rescues grow on social media platforms.",
    "Türkiye’s proposed bill threatens millions of stray animals.",
    "Citrus County hosts pet adoption event in Florida.",
    "World Animal Day holds Wild Animal Personality Award.",
    "Push for better treatment of India's captive elephants.",
    "COP28 to discuss wildlife welfare and climate issues.",
    "North Carolina promotes 'Foster to Adopt' pet program.",
    "NGOs urge ending exploitative marine mammal tourism practices.",
  ],
  pricing: [
    "Pet insurance for dogs (age 2): $31/month",
    "Pet insurance for cats (age 2): $17/month",
    "Grooming (average): $40 - $75 per session",
    "Routine vet exam: $50 - $100",
    "Vaccinations: $20 - $50 per shot",
    "Spay/Neuter surgery (cats): $50 - $100",
    "Emergency vet visit: $500 - $1,500",
    "Teeth cleaning for dogs: $300 - $700",
    "Dog boarding (per night): $25 - $85",
    "Pet sitting (daily): $15 - $40",
  ],
  faq: [
    "What vaccinations do pets need? call us",
    "How often should I take my pet for a check-up? call us",
    "How should I handle fleas and ticks? call us",
    "Is pet insurance worth it? call us",
    "What are common signs of illness in pets? call us",
    "How do I properly groom my pet? call us",
    "What is the best diet for my pet? call us",
    "How much exercise does my pet need? call us",
    "How can I help my pet with anxiety? call us",
    "When should I spay or neuter my pet? call us",
  ],
};

export function getRandomNews() {
  const randomIndex = Math.floor(Math.random() * questions.news.length);
  return questions.news[randomIndex];
}

export function getRandomPricing() {
  const randomIndex = Math.floor(Math.random() * questions.pricing.length);
  return questions.pricing[randomIndex];
}

export function getRandomFAQ() {
  const randomIndex = Math.floor(Math.random() * questions.faq.length);
  return questions.faq[randomIndex];
}
