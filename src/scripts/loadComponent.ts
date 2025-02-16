const components = import.meta.glob('/src/components/*.html', { as: 'raw' });

async function loadComponent(id: string, file: string) {
  if (components[file]) {
    const text = await components[file]();
    document.getElementById(id)?.insertAdjacentHTML('afterbegin', text);
  } else {
    console.error(`Component ${file} not found`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header', '/src/components/header.html');
  loadComponent('gallery', '/src/components/gallery.html');
  loadComponent('footer', '/src/components/footer.html');
});
