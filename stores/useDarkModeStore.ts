import { onMounted, onUnmounted, ref, watch } from 'vue';
import { defineStore } from 'pinia';

const STORAGE_KEY = 'darkMode';
const DARK_MODE_CLASS = 'dark-mode';

export const useDarkModeStore = defineStore('darkMode', () => {
  const isDarkMode = ref(false);
  const toggle = () => (isDarkMode.value = !isDarkMode.value);

  const handlePreferenceChange = (e: MediaQueryListEvent) => {
    isDarkMode.value = e.matches;
  };

  let colorSchemeMedia: MediaQueryList | null;

  onMounted(() => {
    colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeMedia.addEventListener('change', handlePreferenceChange);

    const savedPreference = localStorage.getItem(STORAGE_KEY);
    if (savedPreference) {
      isDarkMode.value = savedPreference === 'true';
    }
    document.documentElement.classList.toggle(DARK_MODE_CLASS, isDarkMode.value);
  });

  onUnmounted(() => {
    colorSchemeMedia?.removeEventListener('change', handlePreferenceChange);
  });

  watch(isDarkMode, () => {
    const storageValue = isDarkMode.value ? 'true' : 'false';
    localStorage.setItem(STORAGE_KEY, storageValue);
    document.documentElement.classList.toggle(DARK_MODE_CLASS, isDarkMode.value);
  });

  return { isDarkMode, toggle };
});
