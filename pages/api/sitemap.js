
import { SitemapStream, streamToPromise } from 'sitemap';

export default async function handler(req, res) {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    // List of posts
    const pages = [
        { url: "./", changefreq: "monthly", priority: 0.9 },
        // { url: "/rsvp/", changefreq: "monthly", priority: 0.9 },
        // { url: "/the-venue/", changefreq: "monthly", priority: 0.6 },
        // { url: "/on-the-day/", changefreq: "monthly", priority: 0.6 },
        // { url: "/accommodation/", changefreq: "monthly", priority: 0.6 },
        // { url: "/responses/", changefreq: "monthly", priority: 0.2 },
      ];
    // Create each URL row
    pages.forEach(page => {
      smStream.write({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch(e) {
    res.send(JSON.stringify(e))
  }

}
