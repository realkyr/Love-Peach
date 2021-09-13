module.exports = {
  distDir: 'build',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/just',
        permanent: true,
      },
    ]
  },
}