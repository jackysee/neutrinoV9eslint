module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    '@neutrinojs/airbnb-base',
    [
      '@neutrinojs/web',
      {
        html: {
          title: 'neutrinoV9eslint'
        }
      }
    ],
    neutrino => console.log('here')
  ]
};
