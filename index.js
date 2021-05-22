'use strict';

const revision = require('./lib/core');
const config = hexo.config;

/**
 * Start things is hexo.config.revisioning is defined in _config.yaml.
 */

if (config.revisioning) {
  /**
   * Hook to enable revisioning.
   */
  const revisioningDefaults = {
    exclude: [],
  };
  const soupConfig = {
    selectors: {
      'img[data-src]': 'data-src',
      'img[src]': 'src',
      'link[rel="apple-touch-icon"]': 'href',
      'link[rel="icon"]': 'href',
      'link[rel="shortcut icon"]': 'href',
      'link[rel="stylesheet"]': 'href',
      'script[src]': 'src',
      'source[src]': 'src',
      'video[poster]': 'poster',
    },
  };
  const matchConfig = {
    match: {
      matchBase: true,
    },
  };

  config.revisioning = Object.assign(
    revisioningDefaults,
    soupConfig,
    matchConfig,
    config.revisioning || {},
  );

  if (config.revisioning.enable) {
    hexo.extend.filter.register('after_generate', revision);
  }

  hexo.extend.filter.register('after_init', function () {
    // Setup revisioning for caching data
    hexo.assetRevisioning = {
      revIndex: {},
    };
  });
}
