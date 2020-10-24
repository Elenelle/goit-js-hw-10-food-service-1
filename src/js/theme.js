const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleSwitch = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.body;

toggleSwitch.addEventListener('change', onToggleTheme);

function onToggleTheme() {
  const activeTheme = bodyTheme.classList.toggle(Theme.DARK);
  localStorage.setItem('theme', activeTheme);
}


