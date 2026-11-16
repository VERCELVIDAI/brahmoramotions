# BRAHMORA MOTIONS — PRODUCTION DEPLOYMENT & DOMAIN GUIDE

**Domain:** `https://www.brahmoramotions.com`  
**Brand:** BRAHMORA MOTIONS  
**Location:** Noida, Uttar Pradesh, India  
**Tagline:** Born To Create Beyond Limits.

---

## 1. Domain Configuration

### Recommended Canonical Setup: `https://www.brahmoramotions.com`

To ensure brand consistency and maximum SEO authority, configure non-www (`brahmoramotions.com`) to redirect to `www.brahmoramotions.com` with a permanent 301 redirect.

### DNS Records to add in your Domain Registrar (GoDaddy / Namecheap / Hostinger / Cloudflare):

| Type | Name / Host | Target / Value | TTL | Note |
|---|---|---|---|---|
| **CNAME** | `www` | `cname.vercel-dns.com` (or your host CNAME) | Auto / 3600 | Primary canonical endpoint |
| **A** | `@` | `76.76.21.21` (or registrar 301 redirect) | Auto / 3600 | Apex domain redirect to `www` |

---

## 2. Environment Variables

Create `.env.production` or configure in your deployment dashboard:

```env
NEXT_PUBLIC_SITE_URL=https://www.brahmoramotions.com
NEXT_PUBLIC_WHATSAPP_NUMBER=917827557434
NEXT_PUBLIC_CONTACT_EMAIL=hello@brahmoramorions.com
```

---

## 3. Deployment Steps on Vercel / Cloudflare

### Method A: Vercel (Recommended)
1. Push repository to GitHub/GitLab.
2. In Vercel Dashboard, click **Add New Project** and import the repo.
3. Framework Preset: **Next.js** (auto-detected).
4. Root Directory: `./`
5. Build Command: `npm run build`
6. Output Directory: `.next`
7. Click **Deploy**.
8. In Project **Settings > Domains**, add:
   - `www.brahmoramotions.com` (Production)
   - `brahmoramotions.com` (Redirects automatically to `www.brahmoramotions.com`)

### Method B: Self-Hosted Docker or Node.js VPS
```bash
npm install --production
npm run build
npm run start -p 3000
```
Use NGINX with Let's Encrypt SSL:
```nginx
server {
    server_name brahmoramotions.com;
    return 301 https://www.brahmoramotions.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.brahmoramotions.com;
    
    ssl_certificate /etc/letsencrypt/live/www.brahmoramotions.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www.brahmoramotions.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 4. Verification Checklist
- [x] Canonical URL configured as `https://www.brahmoramotions.com`
- [x] Schema.org Organization and WebSite markup tested
- [x] Sitemap.xml generated at `/sitemap.xml`
- [x] Robots.txt generated at `/robots.txt`
- [x] WhatsApp direct integration tested: `+91 7827557434`
- [x] Responsive viewports verified: Mobile (375px), Tablet (768px), Laptop (1024px), Desktop (1440px+)
