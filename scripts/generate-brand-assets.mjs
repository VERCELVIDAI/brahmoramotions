import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const APP_DIR = path.resolve('src/app');

// Ensure directories exist
if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
if (!fs.existsSync(APP_DIR)) fs.mkdirSync(APP_DIR, { recursive: true });

// 1. Crisp Vector Favicon SVG
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <linearGradient id="charcoalGrad" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#232323" />
      <stop offset="100%" stop-color="#121212" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>
  
  <!-- Outer Rounded Square Container -->
  <rect width="512" height="512" rx="112" fill="url(#charcoalGrad)" />
  <rect x="8" y="8" width="496" height="496" rx="104" stroke="#FFD400" stroke-width="6" stroke-opacity="0.3" fill="none" />
  
  <!-- Stylized Monogram "B" with Dynamic Motion Cuts -->
  <g transform="translate(10, 0)">
    <!-- Main Spine and Curve Outline -->
    <path d="M148 128H288C336 128 368 160 368 200C368 228 352 248 328 260C360 272 376 304 376 344C376 392 336 424 288 424H148V128Z" 
          stroke="#FFD400" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" />
    
    <!-- Top Motion Bar (Signature Yellow) -->
    <polygon points="196,176 280,176 312,216 228,216" fill="#FFD400" />
    
    <!-- Middle Motion Bar (Pure White) -->
    <polygon points="196,248 304,248 328,288 220,288" fill="#FFFFFF" />
    
    <!-- Bottom Motion Bar (Signature Yellow) -->
    <polygon points="196,336 280,336 312,376 228,376" fill="#FFD400" />
    
    <!-- High-Impact Studio Dot -->
    <circle cx="392" cy="160" r="24" fill="#FFD400" filter="url(#shadow)" />
  </g>
</svg>`;

// 2. High-Resolution 1200x630 Open Graph Banner SVG
const ogImageSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#FAFAFA" />
      <stop offset="100%" stop-color="#F2F2F2" />
    </linearGradient>
    <linearGradient id="brandAccent" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFD400" />
      <stop offset="50%" stop-color="#FFE033" />
      <stop offset="100%" stop-color="#FFD400" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#222222" />
      <stop offset="100%" stop-color="#121212" />
    </linearGradient>
    <pattern id="studioGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#171717" stroke-width="0.75" stroke-opacity="0.04" />
    </pattern>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="60" result="blur" />
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <rect width="1200" height="630" fill="url(#studioGrid)" />

  <!-- Ambient Light Orbs -->
  <circle cx="1060" cy="180" r="260" fill="#FFD400" fill-opacity="0.14" filter="url(#softGlow)" />
  <circle cx="200" cy="480" r="220" fill="#FFD400" fill-opacity="0.08" filter="url(#softGlow)" />

  <!-- Top Yellow Signature Brand Border -->
  <rect width="1200" height="14" fill="url(#brandAccent)" />

  <!-- Corner Studio Tag -->
  <g transform="translate(100, 70)">
    <!-- Logo Monogram Container -->
    <rect width="100" height="100" rx="24" fill="url(#cardGrad)" stroke="#FFD400" stroke-width="2" stroke-opacity="0.4" />
    
    <g transform="translate(2, -2) scale(0.19)">
      <path d="M148 128H288C336 128 368 160 368 200C368 228 352 248 328 260C360 272 376 304 376 344C376 392 336 424 288 424H148V128Z" 
            stroke="#FFD400" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" />
      <polygon points="196,176 280,176 312,216 228,216" fill="#FFD400" />
      <polygon points="196,248 304,248 328,288 220,288" fill="#FFFFFF" />
      <polygon points="196,336 280,336 312,376 228,376" fill="#FFD400" />
      <circle cx="392" cy="160" r="24" fill="#FFD400" />
    </g>

    <!-- Brand Typography Header -->
    <text x="126" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Syne', sans-serif" font-size="44" font-weight="900" letter-spacing="0.06em" fill="#171717">BRAHMORA</text>
    <circle cx="430" cy="38" r="7" fill="#FFD400" />
    <text x="448" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Syne', sans-serif" font-size="44" font-weight="400" letter-spacing="0.16em" fill="#171717">MOTIONS</text>
    
    <!-- Subtitle Pill -->
    <rect x="126" y="68" width="480" height="26" rx="6" fill="#171717" fill-opacity="0.05" />
    <text x="138" y="86" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="0.22em" fill="#666666">CREATIVE MEDIA &amp; TECHNOLOGY STUDIO • NOIDA, INDIA</text>
  </g>

  <!-- Studio Status Badge Right -->
  <g transform="translate(930, 80)">
    <rect width="170" height="42" rx="21" fill="#171717" />
    <circle cx="28" cy="21" r="5" fill="#FFD400" />
    <text x="44" y="27" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" letter-spacing="0.08em" fill="#FFFFFF">OFFICIAL SITE</text>
  </g>

  <!-- Main Value Proposition Typography -->
  <g transform="translate(100, 260)">
    <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Syne', sans-serif" font-size="64" font-weight="900" letter-spacing="-0.03em" fill="#171717">WE TURN BIG IDEAS</text>
    <text x="0" y="74" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Syne', sans-serif" font-size="64" font-weight="900" letter-spacing="-0.03em" fill="#171717">INTO <tspan fill="#FFD400">DIGITAL IMPACT.</tspan></text>
  </g>

  <!-- Tagline Badge -->
  <g transform="translate(100, 395)">
    <rect width="360" height="38" rx="8" fill="#FFD400" />
    <text x="180" y="25" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" letter-spacing="0.12em" fill="#171717">BORN TO CREATE BEYOND LIMITS</text>
  </g>

  <!-- Capabilities Pill Tray -->
  <g transform="translate(100, 480)">
    <rect width="1000" height="74" rx="20" fill="#FFFFFF" stroke="#E5E5E5" stroke-width="1.5" />
    
    <!-- 4 Key Services with Dots -->
    <g transform="translate(36, 44)">
      <circle cx="0" cy="-6" r="4" fill="#FFD400" />
      <text x="14" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" fill="#171717">AI Video Production</text>

      <circle cx="210" cy="-6" r="4" fill="#FFD400" />
      <text x="224" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" fill="#171717">Bespoke Websites</text>

      <circle cx="410" cy="-6" r="4" fill="#FFD400" />
      <text x="424" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" fill="#171717">Scalable SaaS</text>

      <circle cx="585" cy="-6" r="4" fill="#FFD400" />
      <text x="599" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" fill="#171717">Brand Identity</text>

      <circle cx="755" cy="-6" r="4" fill="#FFD400" />
      <text x="769" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="700" fill="#FFD400">brahmoramotions.com</text>
    </g>
  </g>
</svg>`;

// Helper function to build a multi-resolution ICO file from PNG buffers
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO type
  header.writeUInt16LE(count, 4); // Number of images

  const dirEntries = [];
  for (const { buffer, width, height } of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // No color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Size of image data
    entry.writeUInt32LE(offset, 12); // Offset to image data
    dirEntries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function run() {
  console.log('Generating high-resolution brand assets...');

  // 1. Write vector SVGs
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), faviconSvg, 'utf8');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'og-image.svg'), ogImageSvg, 'utf8');
  console.log('✔ Created public/favicon.svg & public/og-image.svg');

  // 2. Render Open Graph raster image (1200x630 PNG)
  const ogPngBuffer = await sharp(Buffer.from(ogImageSvg))
    .resize(1200, 630)
    .png({ quality: 95, compressionLevel: 8 })
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'og-image.png'), ogPngBuffer);
  fs.writeFileSync(path.join(APP_DIR, 'opengraph-image.png'), ogPngBuffer);
  console.log('✔ Created public/og-image.png & src/app/opengraph-image.png (1200x630)');

  // 3. Render Apple Touch Icon (180x180 PNG)
  const appleTouchBuffer = await sharp(Buffer.from(faviconSvg))
    .resize(180, 180)
    .png({ quality: 95 })
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'apple-touch-icon.png'), appleTouchBuffer);
  fs.writeFileSync(path.join(APP_DIR, 'apple-icon.png'), appleTouchBuffer);
  console.log('✔ Created public/apple-touch-icon.png & src/app/apple-icon.png (180x180)');

  // 4. Render Standard PWA / App Icons (512x512 and 192x192)
  const icon512 = await sharp(Buffer.from(faviconSvg)).resize(512, 512).png().toBuffer();
  const icon192 = await sharp(Buffer.from(faviconSvg)).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'icon-512.png'), icon512);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'icon-192.png'), icon192);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'icon.png'), icon512);
  fs.writeFileSync(path.join(APP_DIR, 'icon.png'), icon512);
  console.log('✔ Created public/icon-512.png, icon-192.png, icon.png');

  // 5. Render Small Favicon PNGs (16x16, 32x32, 48x48)
  const fav16 = await sharp(Buffer.from(faviconSvg)).resize(16, 16).png().toBuffer();
  const fav32 = await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toBuffer();
  const fav48 = await sharp(Buffer.from(faviconSvg)).resize(48, 48).png().toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-16x16.png'), fav16);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-32x32.png'), fav32);

  // 6. Generate Multi-size favicon.ico
  const icoBuffer = createIco([
    { buffer: fav16, width: 16, height: 16 },
    { buffer: fav32, width: 32, height: 32 },
    { buffer: fav48, width: 48, height: 48 },
  ]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(APP_DIR, 'favicon.ico'), icoBuffer);
  console.log('✔ Created public/favicon.ico & src/app/favicon.ico (multi-resolution 16x16, 32x32, 48x48)');

  console.log('All SEO and Favicon assets successfully generated!');
}

run().catch((err) => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});
