<script setup lang="ts">
import { type CSSProperties, onMounted } from 'vue';
import { NDivider, NIcon, NTab, NTabs, NSkeleton, NSwitch } from 'naive-ui';
import { DarkModeOutlined, LightModeOutlined } from '@vicons/material';
import { useCurrentSection } from '@/composables/useCurrentSection';
import { vPreventFocusOnClick } from '@/directives/directives';
import { useDarkModeStore } from '@/stores/useDarkModeStore';

const experienceSectionID = 'experience';
const projectsSectionID = 'projects';
const currentViewedSection = useCurrentSection([experienceSectionID, projectsSectionID]);

const scrollToElement = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const darkModeStore = useDarkModeStore();
let darkModeRailStyle: (params: { focused: boolean; checked: boolean }) => CSSProperties;

onMounted(() => {
  darkModeRailStyle = (params: { focused: boolean; checked: boolean }): CSSProperties => {
    const rootStyles = getComputedStyle(document.documentElement);
    return {
      background: params.checked
        ? rootStyles.getPropertyValue('--dark-background-color-mute')
        : rootStyles.getPropertyValue('--light-background-color-mute'),
    };
  };
});
</script>

<template>
  <div
    id="toolbar"
    role="toolbar"
  >
    <nav>
      <n-tabs
        size="large"
        :tabsPadding="1"
        v-model:value="currentViewedSection"
      >
        <n-tab
          name="experience"
          @click="scrollToElement(experienceSectionID)"
          @keydown.enter="scrollToElement(experienceSectionID)"
          v-prevent-focus-on-click
        >
          <span
            class="tab-text"
            tabindex="0"
          >
            Experience
          </span>
        </n-tab>
        <n-tab
          name="projects"
          @click="scrollToElement(projectsSectionID)"
          @keydown.enter="scrollToElement(projectsSectionID)"
          v-prevent-focus-on-click
        >
          <span
            class="tab-text"
            tabindex="0"
          >
            Projects
          </span>
        </n-tab>
      </n-tabs>
    </nav>

    <n-divider
      class="divider"
      vertical
    />

    <ClientOnly>
      <n-switch
        aria-label="Dark mode toggle"
        :rail-style="darkModeRailStyle"
        v-model:value="darkModeStore.isDarkMode"
        v-prevent-focus-on-click
      >
        <template #checked-icon>
          <n-icon :component="DarkModeOutlined" />
        </template>
        <template #unchecked-icon>
          <n-icon :component="LightModeOutlined" />
        </template>
      </n-switch>
    </ClientOnly>
  </div>
</template>

<style scoped>
#toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
}

.divider {
  visibility: hidden;
}

@media (min-width: 600px) {
  #toolbar {
    display: flex;
    justify-content: end;
  }

  .divider {
    visibility: visible;
  }
}
</style>
