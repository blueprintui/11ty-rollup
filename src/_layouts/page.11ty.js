export var data = {
  layout: 'base.11ty.js',
  eleventyExcludeFromCollections: true
}

export function render(data) {
  return /* html */`
  <h1>${data.title}</h1>
  ${data.content}
  `;
}
