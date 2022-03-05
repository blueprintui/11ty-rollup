export default {
  layout: 'page.11ty.js',
  eleventyComputed: {
    permalink: data => `/${data.page.fileSlug}.html`
  },
  tags: []
}

// module.exports = {
//   layout: 'page.11ty.js',
//   permalink: '{{page.filePathStem | remove: "_posts"}}.html'
// }
