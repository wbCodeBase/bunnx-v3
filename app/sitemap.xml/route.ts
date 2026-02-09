// app/sitemap/route.ts

export const dynamic = 'force-dynamic'; // Optional: for fresh data

async function getSitemapEntries() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/activeSlug`);
    const activeSlugData = await response.json();

    if (!Array.isArray(activeSlugData)) {
      throw new Error("Invalid slug data");
    }

    const serviceSlugsOnly = activeSlugData.filter((item) => item?.slugOf === "service");

    // Base pages
    const sitemapLinks = [
      {
        url: "https://www.bunnx.com",
        lastModified: "2025-01-27T09:45:58+00:00",
        priority: "1.00",
      },
      {
        url: "https://www.bunnx.com/contact-us",
        lastModified: "2025-01-27T09:45:58+00:00",
        priority: "0.64",
      },
      {
        url: "https://www.bunnx.com/about-us",
        lastModified: "2025-01-27T09:45:58+00:00",
        priority: "0.64",
      },
    ];

    // Services
    const serviceLinks = serviceSlugsOnly.map((item) => {
      const updatedAt = new Date(item?.updatedAt);
      const lastModified = updatedAt.toISOString().split('.')[0] + '+00:00';

      return {
        url: `https://www.bunnx.com/${item.slug}`,
        lastModified,
        priority: "0.80",
      };
    });

    return [...sitemapLinks, ...serviceLinks];
  } catch (error) {
    console.error("Error generating sitemap entries:", error);
    return [];
  }
}

export async function GET() {
  const entries = await getSitemapEntries();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
      .map((entry) => {
        return `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <priority>${entry.priority}</priority>
  </url>`;
      })
      .join('\n') +
    `\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
