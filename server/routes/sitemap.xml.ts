export default defineEventHandler(() => {
  const baseUrl = 'https://www.getrvn.co'

  const routes = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/features', priority: '0.9', changefreq: 'weekly' },
    { loc: '/analysis', priority: '0.9', changefreq: 'weekly' },
    { loc: '/about-us', priority: '0.8', changefreq: 'monthly' },
    { loc: '/waitlist', priority: '0.9', changefreq: 'daily' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.loc}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('\n')}
</urlset>`

  return sitemap
})

