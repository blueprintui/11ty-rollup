module.exports = {
  layout: 'post.11ty.js',
  // permalink: 'blogss/{{page.filePathStem | remove: "_posts"}}.html'
  eleventyComputed: {
    permalink: data => `/blog/${data.page.fileSlug}.html`
  },
}
