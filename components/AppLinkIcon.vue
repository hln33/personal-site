<script setup lang="ts">
import type { Component } from 'vue';
import { NButton, NIcon } from 'naive-ui';

const props = defineProps<{
  link: string;
  size: number;
  component: Component;
  iconAltText: String;
}>();

const redirect = () => {
  if (props.link) {
    window.open(props.link);
  }
};
</script>

<template>
  <n-button
    class="link-icon"
    text
    @click="redirect"
  >
    <n-icon
      :aria-label="props.iconAltText"
      :size="props.size"
      :component="props.component"
    />
  </n-button>
</template>

<style scoped>
.link-icon {
  transition: transform 0.2s;
}

.link-icon:hover,
.link-icon:focus {
  transform: scale(1.2);
}
</style>
