import headTag from './src/_includes/shortcodes/head-tag.js';

export default function (config) {
  config.setDataDeepMerge(true);
  config.addPassthroughCopy('./src/index.js');
  config.addPassthroughCopy('./src/assets');
  config.addPassthroughCopy('./src/**/*.css');
  config.addWatchTarget('./src/**/*.css');
  config.addWatchTarget('./src/**/*.js');

  config.setBrowserSyncConfig({
    server: {
      baseDir: './dist',
      serveStaticOptions: {
        extensions: ['html']
      },
    }
  });

  // shortcodes
  headTag(config);

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  };
}
