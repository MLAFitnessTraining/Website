const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  menuButton.setAttribute('aria-label', isExpanded ? 'Ouvrir le menu' : 'Fermer le menu');
  navigation.classList.toggle('is-open', !isExpanded);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Ouvrir le menu');
    navigation.classList.remove('is-open');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('.load-instagram').forEach((button) => {
  button.addEventListener('click', () => {
    const embed = button.closest('.instagram-embed');
    const frame = document.createElement('iframe');

    frame.title = 'Reel Instagram de MLA Fitness Training';
    frame.src = `https://www.instagram.com/reel/${button.dataset.reelId}/embed`;
    frame.width = '400';
    frame.height = '711';
    frame.loading = 'lazy';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';

    embed.replaceChildren(frame);
  });
});