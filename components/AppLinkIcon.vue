<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui';

const props = defineProps<{
  link: string;
  size: number;
  iconAltText: String;
  component: Component;
}>();

const redirect = () => {
  window.open(props.link);
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
