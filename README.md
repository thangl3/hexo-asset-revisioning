# hexo-asset-revisioning

Enabling revisioning of assets for Hexo to support all types. Fork from [hexo-asset-pipeline](https://github.com/hexojs/hexo-asset-pipeline).

A fork from `hexo-asset-pipeline` but with only revisioning of assets and support Hexo 3, 4, 5.x.x and pass options matching file in `_config.yml`.

If you want to minify and optimations assets, please intergrated [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier). We are `hexo-asset-revisioning` + `hexo-all-minifier` = `hexo-asset-pipeline`.

## Installation

``` bash
npm install hexo-asset-revisioning --save
```

## Configuration

Add the following snippet to `_config.yml`.

```yaml
revisioning:
  enable: true
  keep: false
  exclude: ['robots.txt', '*.json']
  selectors:
    'img[data-orign]':  data-orign
    'img[data-src]': 'data-src'
    'img[src]': 'src'
```

- **enable** - Enable revisioning of assets. Defaults to `false`.
- **keep** - Keep original assets. Defaults to `false`.
- **exclude** - Exclude files from revisioning.
- **selectors** - It is used so that custom implementations can be processed. Any attribute matching the key should have the asset url in the value. For instance in above example any element matching to `img[data-orign]` will have the URL for asset in `data-origin` attribute, this specific case can be helpful for [jquery lazyload](https://github.com/tuupola/jquery_lazyload) implementations.

## Revisioning defaults

```yaml
revisioning:
  enable: false
  keep: false
  exclude: []
  selectors:
    'img[data-src]': 'data-src'
    'img[src]': 'src'
    'link[rel="apple-touch-icon"]': 'href'
    'link[rel="icon"]': 'href'
    'link[rel="shortcut icon"]': 'href'
    'link[rel="stylesheet"]': 'href'
    'script[src]': 'src'
    'source[src]': 'src'
    'video[poster]': 'poster'
  match:
    matchBase: true
```

**Note**: To match paths in `exclude` option, glob matching is done using [minmatch](https://github.com/isaacs/minimatch)
