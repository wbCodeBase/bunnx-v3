// lib/api.ts

export async function getActiveSlugs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/activeSlug`, {
      cache: "no-store", // or 'force-cache' if you're okay caching it
    });
    if (!res.ok) throw new Error("Failed to fetch slugs");
    return await res.json();
  } catch (error) {
    console.error("Slug fetch error:", error);
    return null;
  }
}
