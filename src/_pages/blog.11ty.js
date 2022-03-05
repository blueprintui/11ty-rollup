export var data = {
  title: 'Blog Page',
  tags: [],
  layout: 'page.11ty.js',
  permalink: 'blog.html',
  pagination: {
    data: 'collections.post',
    size: 3,
    alias: 'posts',
    reverse: true,
  },
}

export function render(data) {
  return /* html */`
  <section>
    ${data.pagination.items.map(item => /* html */`
    <article>
      <h2>
        <a href="${item.data.page.url}">${item.data.title}</a>
      </h2>
      <p>${item.data.description}</p>
    </article>`).join('')}
  </section>
  `;
}
