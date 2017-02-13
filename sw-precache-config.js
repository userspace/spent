module.exports = {
  staticFileGlobs: [
    'manifest.json',
    'index.html',
    '/',
    'assets/**/**.*',
  ],
  replacePrefix: '/',
  runtimeCaching: [{
    urlPattern: /\/assets\//,
    handler: 'fastest',
  },{
    urlPattern: 'manifest.json',
    handler: 'fastest',
  },{
    urlPattern: 'index.html',
    handler: 'fastest',
  }]
};
