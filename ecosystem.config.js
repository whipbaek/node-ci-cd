module.exports = {
  apps: [
    {
      name:'node-ci-cd',
      script: 'dist/main.js',
      watch: true,
    }
  ]
}