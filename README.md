# egg-neutrino
Create and build modern JavaScript applications with zero initial configuration. Neutrino for egg

[neutrino introduction](https://neutrino.js.org/)

[![NPM version][npm-image]][npm-url]
[![David deps][david-image]][david-url]
[![NPM download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-neutrino.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-neutrino
[david-image]: https://img.shields.io/david/okoala/egg-neutrino.svg?style=flat-square
[david-url]: https://david-dm.org/okoala/egg-neutrino
[download-image]: https://img.shields.io/npm/dm/egg-neutrino.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-neutrino


## Install
```bash
npm install egg-neutrino --save
```

## Getting Started
```javascript
// {app_root}/config/plugin.js
exports.neutrino = {
  enable: true,
  package: 'egg-neutrino',
};

// {app_root}/config/config.default.js
exports.neutrino = {
  use: [ 'neutrino-preset-react' ],
  config: {
    entry: {
      vendor: [
        'react',
        'react-dom',
      ],
    },
  },
};
```

## How to Contribute

Please let us know what we can help, check [issues](https://github.com/okoala/egg-neutrino/issues) for bug reporting and suggestion.

