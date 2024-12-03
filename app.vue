<script setup lang="ts">
// import { computed, type ComputedRef } from 'vue';
// import { storeToRefs } from 'pinia';
import {
  darkTheme,
  lightTheme,
  // lightTheme,
  NConfigProvider,
  // type GlobalThemeOverrides,
} from 'naive-ui';
// import { useDarkModeStore } from './stores/useDarkModeStore';

// const darkModeStore = useDarkModeStore();
// const { isDarkMode } = storeToRefs(darkModeStore);

// const themeOverrides: ComputedRef<GlobalThemeOverrides> = computed(() => ({
//   Divider: {
//     color: isDarkMode.value ? 'rgba(255, 255, 255, 0.09)' : 'rgba(0, 0, 0, 0.09)',
//   },
//   Typography: {
//     pTextColor: isDarkMode.value ? 'rgba(255, 255, 255, 0.82)' : 'rgba(0, 0, 0, 0.82)',
//   },
// }));
</script>

<template>
  <n-config-provider :theme="lightTheme">
    <header>
      <TheAboutMe />
    </header>
    <div>
      <main>
        <TheWorkExperience />
      </main>

      <TheFooter />
    </div>
  </n-config-provider>
</template>
