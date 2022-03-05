export var data = {
  layout: 'base.11ty.js',
  tags: 'post'
}

export function render (data) {
  return /* html */`
  <article>
    <h1>${data.title}</h1>
    ${data.content}
  </article>`;
}
