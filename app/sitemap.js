export default async function sitemap() {
  const baseUrl = "https://lifeline-pet-care-v3.vercel.app";

  const routes = [
    "",
    "/services",
    "/packages",
    "/about",
    "/blog",
    "/contact",
    "/gallery",
    "/vet-services",
    "/grooming-services",
    "/vaccination-services",
    "/emergency-services",
    "/boarding-services",
    "/lab-test-services",
    "/pet-walking-sitting",
    "/pricing",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
