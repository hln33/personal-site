<script setup lang="ts">
import { type Component } from 'vue';
import { NP, NTag } from 'naive-ui';
import { TECHNOLOGIES, type Technologies } from '@/types/technology';
import { useDarkModeStore } from '@/stores/useDarkModeStore';
import {
  IconJS,
  IconReact,
  IconJQuery,
  IconRuby,
  IconRails,
  IconJava,
  IconTS,
  IconPostgreSQL,
  IconRust,
  IconPython,
  IconJupyter,
  IconPandas,
  IconNode,
} from './icons';

const props = defineProps<{
  description: string;
  technologies: Technologies[];
}>();

const technologyIcons: {
  [key in Technologies]: Component;
} = {
  [TECHNOLOGIES.JS]: IconJS,
  [TECHNOLOGIES.React]: IconReact,
  [TECHNOLOGIES.ReactNative]: IconReact,
  [TECHNOLOGIES.JQuery]: IconJQuery,
  [TECHNOLOGIES.Ruby]: IconRuby,
  [TECHNOLOGIES.Rails]: IconRails,
  [TECHNOLOGIES.Java]: IconJava,
  [TECHNOLOGIES.TS]: IconTS,
  [TECHNOLOGIES.Postgres]: IconPostgreSQL,
  [TECHNOLOGIES.Rust]: IconRust,
  [TECHNOLOGIES.Python]: IconPython,
  [TECHNOLOGIES.Jupyter]: IconJupyter,
  [TECHNOLOGIES.Pandas]: IconPandas,
  [TECHNOLOGIES.Node]: IconNode,
};

const darkModeStore = useDarkModeStore();
</script>

<template>
  <n-p class="description">
    {{ props.description }}
  </n-p>

  <section class="technologies">
    <n-tag
      class="technology"
      :class="{ 'dark-mode': darkModeStore.isDarkMode }"
      round
      size="large"
      v-for="tech in props.technologies"
      :key="tech"
    >
      <template #icon>
        <component :is="technologyIcons[tech]" />
      </template>
      {{ tech }}
    </n-tag>
  </section>
</template>

<style scoped>
.description {
  font-size: 0.9rem;
}

.technologies {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}
.technologies .technology {
  padding: 1.25em 1em 1.25em 1.5em;
}

.technology {
  background: rgba(0, 0, 0, 0.8);
  color: var(--vt-c-text-dark-1);
  cursor: inherit;
}
.technology.dark-mode {
  background: rgba(0, 0, 0, 0.3);
}

@media (min-width: 600px) {
  .description {
    font-size: 0.9rem;
  }
}
</style>
