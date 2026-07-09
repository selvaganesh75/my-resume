import { MetadataRoute } from "next";
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Selva OS",
 
    short_name: "Selva",
 
    display: "standalone",
 
    start_url: "/",
 
    background_color: "#070B18",
 
    theme_color: "#070B18",
  };
}