#!/bin/bash

# Create logs directory
mkdir -p logs

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
fi

# Start or restart the application
echo "Starting the application..."
pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js

# Save PM2 process list
echo "Saving PM2 process list..."
pm2 save

# Show status
echo "Application status:"
pm2 status

echo "Deployment completed successfully!" 