import type { MetadataRoute } from "next";
import { BASE_URL } from "./lib/config";

const staticRoutes = [
  "",
  "/about-us",
  "/contact-us",
  "/process",
  "/services",
  "/industries",
  "/technologies",
];

const serviceRoutes = [
  "/services/saas-development-services",
  "/services/b2b-platform-engineering-services",
  "/services/erp-and-business-automation-services",
  "/services/ecommerce-solutions-services",
  "/services/mobile-applications-services",
  "/services/branding-and-digital-growth-services",
];

const industryRoutes = [
  "/industries/finance",
  "/industries/healthcare",
  "/industries/education",
  "/industries/retail",
  "/industries/logistics",
  "/industries/enterprise",
  "/industries/real-estate",
  "/industries/professional-industries",
];

const technologyRoutes = [
  "/technologies/frontend-technologies",
  "/technologies/backend-technologies",
  "/technologies/cloud-devops",
  "/technologies/ai-and-automation",
  "/technologies/data-and-integrations",
  "/technologies/security",
  "/technologies/reactjs-development-company",
  "/technologies/nextjs-development-company",
  "/technologies/typescript-development-company",
  "/technologies/nodejs-development-company",
  "/technologies/python-development-company",
  "/technologies/fastapi-development-company",
  "/technologies/postgresql-development-company",
  "/technologies/redis-development-company",
  "/technologies/opensearch-development-company",
  "/technologies/aws-development-company",
  "/technologies/docker-development-company",
  "/technologies/kubernetes-development-company",
  "/technologies/openai-development-company",
  "/technologies/rag-development-company",
  "/technologies/agents-development-company",
  "/technologies/oauth-development-company",
  "/technologies/jwt-development-company",
  "/technologies/rbac-development-company",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const buildEntries = (
    routes: string[],
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ): MetadataRoute.Sitemap =>
    routes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency,
      priority,
    }));

  return [
    ...buildEntries(staticRoutes, 1, "weekly"),
    ...buildEntries(serviceRoutes, 0.8, "monthly"),
    ...buildEntries(industryRoutes, 0.8, "monthly"),
    ...buildEntries(technologyRoutes, 0.8, "monthly"),
  ];
}
