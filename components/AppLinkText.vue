<script setup lang="ts">
import { NButton } from 'naive-ui';

const props = withDefaults(
  defineProps<{ link: string; text: string; openInSameFrame?: boolean }>(),
  {
    openInSameFrame: false,
  }
);

const target = props.openInSameFrame ? '_self' : '_blank';
</script>

<template>
  <n-button
    class="nav-button"
    text
    tag="a"
    :target
    :href="props.link"
  >
    {{ text }}
  </n-button>
</template>

<style scoped>
.nav-button {
  font-size: 1.25rem;
  transition: transform 0.2s;
}

.nav-button:hover,
.nav-button:focus {
  transform: scale(1.05);
}
</style>
