module.exports = {
  // Production server configuration
  production: {
    host: '68.183.96.99',
    username: 'myaccuratebooks',
    path: '/var/www/website',
    branch: 'main',
    commands: [
      'cd /var/www/website',
      'git pull origin main',
      'npm install',
      'npm run build',
      'pm2 restart myaccuratebooks'
    ]
  },

  // Staging server configuration
  staging: {
    host: 'staging.myaccuratebooks.com',
    username: 'your-username',
    path: '/var/www/staging.myaccuratebooks.com',
    branch: 'develop',
    commands: [
      'cd /var/www/staging.myaccuratebooks.com',
      'git pull origin develop',
      'npm install',
      'npm run build',
      'pm2 restart myaccuratebooks-staging'
    ]
  }
}; 