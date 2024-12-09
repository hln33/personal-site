<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';
import { storeToRefs } from 'pinia';
import {
  darkTheme,
  lightTheme,
  NConfigProvider,
  type GlobalThemeOverrides,
} from 'naive-ui';
import { useDarkModeStore } from '@/stores/useDarkModeStore';

useHead({
  script: [
    {
      id: 'check-dark-mode',
      innerHTML: `
        if (localStorage.getItem('darkMode') === 'true') {
          document.documentElement.classList.add('dark-mode');
        }
      `,
    },
  ],
});

const darkModeStore = useDarkModeStore();
const { isDarkMode } = storeToRefs(darkModeStore);

const themeOverrides: ComputedRef<GlobalThemeOverrides> = computed(() => ({
  Divider: {
    color: isDarkMode.value ? 'rgba(255, 255, 255, 0.09)' : 'rgba(0, 0, 0, 0.09)',
  },
  Typography: {
    pTextColor: isDarkMode.value ? 'rgba(255, 255, 255, 0.82)' : 'rgba(0, 0, 0, 0.82)',
  },
}));

// onMounted(() => {
//   debugger;
// });
</script>

<template>
  <n-config-provider
    id="app"
    :theme="isDarkMode ? darkTheme : lightTheme"
    :themeOverrides
  >
    <TheToolBar class="toolbar" />

    <header>
      <TheAboutMe />
    </header>
    <div>
      <main>
        <TheWorkExperience id="experience" />
        <ThePersonalProjects id="projects" />
      </main>

      <TheFooter class="footer" />
    </div>
  </n-config-provider>
</template>

<style scoped>
.toolbar {
  grid-column-start: 1;
  grid-column-end: 3;

  position: sticky;
  top: 0;
  height: var(--nav-bar-height);
  z-index: 1000;
}

main {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
}
#experience,
#projects {
  scroll-margin-top: var(--nav-bar-height);
}

.footer {
  margin-top: 2rem;
}

@media (min-width: 1050px) {
  header {
    padding-right: calc(var(--section-gap) / 2);

    position: sticky;
    top: var(--nav-bar-height);
    line-height: 1.2;
    height: 30vh;
    width: 100%;
  }
}
</style>
