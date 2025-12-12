const KEY = 'theme';

function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);

  document.getElementById('sun-icon')?.classList.toggle('hidden', isDark);
  document.getElementById('moon-icon')?.classList.toggle('hidden', !isDark);
}

export function initThemeToggle() {
  const saved = localStorage.getItem(KEY);
  const isDark = saved ? saved === 'dark' : systemPrefersDark();

  applyTheme(isDark);

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const nowDark = !document.documentElement.classList.contains('dark');
    localStorage.setItem(KEY, nowDark ? 'dark' : 'light');
    applyTheme(nowDark);
  });
}
