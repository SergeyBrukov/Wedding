async function loadComponent(id, file) {
  try {
    const response = await fetch(file)
    const text = await response.text()
    const component = document.getElementById(id);
    if (!component) {
      console.error(`Component with id ${id} not found`);
      return;
    }
    component.insertAdjacentHTML('afterbegin', text);
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header', 'src/components/header.html');
  loadComponent('gallery', 'src/components/gallery.html');
  loadComponent('footer', 'src/components/footer.html');
});
