#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Create necessary directories
echo "Creating necessary directories..."
mkdir -p dist/images

# Copy static assets
echo "Copying static assets..."
cp -r public/images/* dist/images/

# Create robots.txt
echo "Creating robots.txt..."
cat > dist/robots.txt << EOL
User-agent: *
Allow: /
Sitemap: https://myaccuratebooks.com/sitemap.xml
EOL

# Create sitemap.xml
echo "Creating sitemap.xml..."
cat > dist/sitemap.xml << EOL
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://myaccuratebooks.com/</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://myaccuratebooks.com/features</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://myaccuratebooks.com/pricing</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://myaccuratebooks.com/contact</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
EOL

echo "Build completed successfully!" 