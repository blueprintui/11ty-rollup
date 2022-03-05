export function render(data) {
  return /* html */`<!DOCTYPE html>
  <html lang="en">
    ${this.headTag(data)}
    <body>
      <header>
        <button aria-label="trigger visual confetti effect" class="confetti-button">
          <img src="/assets/images/logo.svg" alt="" />
        </button>  
        <a href="/">Home</a>
        <a href="/blog.html">Blog</a>
        <a href="/about.html">About</a>
        <a href="/contact.html">Contact</a>
      </header>
      <main>
        ${data.content}
      </main>
      <footer>
        2022
      </footer>
      <canvas class="confetti-canvas"></canvas>
      <script type="module" src="/index.js"></script>
    </body>
  </html>`
}
