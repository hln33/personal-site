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

  let darkModeMedia: MediaQueryList | null;

  onMounted(() => {
    darkModeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMedia.addEventListener('change', handlePreferenceChange);

    const savedPreference = localStorage.getItem(STORAGE_KEY);
    if (
      savedPreference === 'true' ||
      (savedPreference === null && darkModeMedia.matches)
    ) {
      isDarkMode.value = true;
    }
    document.documentElement.classList.toggle(DARK_MODE_CLASS, isDarkMode.value);
  });

  onUnmounted(() => {
    darkModeMedia?.removeEventListener('change', handlePreferenceChange);
  });

  watch(isDarkMode, () => {
    const storageValue = isDarkMode.value ? 'true' : 'false';
    localStorage.setItem(STORAGE_KEY, storageValue);
    document.documentElement.classList.toggle(DARK_MODE_CLASS, isDarkMode.value);
  });

  return { isDarkMode, toggle };
});
