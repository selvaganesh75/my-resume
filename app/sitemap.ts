import { MetadataRoute } from "next";
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://selvaganesh.dev",
      priority: 1,
    },
    {
      url: "https://selvaganesh.dev/about",
      priority: 0.9,
    },
    {
      url: "https://selvaganesh.dev/projects",
      priority: 0.9,
    },
    {
      url: "https://selvaganesh.dev/contact",
      priority: 0.8,
    },
  ];
}