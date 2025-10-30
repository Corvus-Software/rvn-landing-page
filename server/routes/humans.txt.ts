export default defineEventHandler(() => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain'
    },
    body: `# www.rvn.com

This site showcases RVN - an AI-powered motorcycle telemetry unit.

## Contact
Email: info@rvn.com
Phone: (555) 123-4567

## Social Media
Facebook: https://facebook.com/RVN
Twitter: https://twitter.com/RVN
Instagram: https://instagram.com/RVN

Built with Nuxt 4 + Tailwind CSS
`
  }
})
