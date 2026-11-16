async function verify() {
  const urls = [
    'http://localhost:3000/',
    'http://localhost:3000/favicon.ico',
    'http://localhost:3000/favicon.svg',
    'http://localhost:3000/apple-touch-icon.png',
    'http://localhost:3000/apple-icon.png',
    'http://localhost:3000/og-image.png',
    'http://localhost:3000/opengraph-image.png',
    'http://localhost:3000/site.webmanifest'
  ];
  for (const u of urls) {
    try {
      const res = await fetch(u);
      console.log(u, '=> STATUS:', res.status, 'TYPE:', res.headers.get('content-type'), 'LENGTH:', res.headers.get('content-length'));
      if (u === 'http://localhost:3000/') {
        const text = await res.text();
        const metaMatches = text.match(/<(?:meta|link)[^>]+(?:og:image|twitter:image|shortcut icon|icon|apple-touch-icon|manifest)[^>]+>/gi) || [];
        console.log('\n--- HEAD TAGS ---');
        metaMatches.forEach(m => console.log('  ', m));
        console.log('-----------------\n');
      }
    } catch (e) {
      console.error(u, '=> FAILED:', e.message);
    }
  }
}
verify();
