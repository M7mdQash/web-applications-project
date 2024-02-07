// Redirect to the detailed page on click
document.querySelectorAll('.card-group').forEach(group => {
    group.addEventListener('click', () => {
      window.location.href = group.getAttribute('href');
    });
  });
  const menu = document.getElementById("menu");
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    menu.dataset.activeIndex = index;
    // Update background pattern and image based on active index
    document.getElementById("menu-background-pattern").style.backgroundPosition = `${index * -25}% 0%`;
    document.getElementById("menu-background-image").style.backgroundPosition = `center ${45 + (index * 5)}%`;
  });
});