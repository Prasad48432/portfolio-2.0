import { MetadataRoute } from "next";
import { BasePath } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: BasePath(""),
      lastModified: new Date(),
    },
  ];
}
