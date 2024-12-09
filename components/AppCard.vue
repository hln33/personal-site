<script setup lang="ts">
import { NCard } from 'naive-ui';
import { type Technologies } from '@/types/technology';

const props = defineProps<{
  header: string;
  subheader?: string;
  date: string;
  description: string;
  technologies: Technologies[];
  externalLink: string;
}>();

const redirect = () => {
  if (props.externalLink) {
    window.open(props.externalLink);
  }
};
</script>

<template>
  <NCard
    class="card"
    tabindex="0"
    @click="redirect"
    @keydown.enter="redirect"
    hoverable
    :bordered="false"
  >
    <AppCardHeader
      class="card-header"
      :header="props.header"
      :subheader="props.subheader"
      :date="props.date"
    />

    <AppCardBody
      :description="props.description"
      :technologies="props.technologies"
    />
  </NCard>
</template>

<style scoped>
.card {
  background: rgba(75, 116, 231, 0.1);
  transition: opacity 0.5s;
  cursor: pointer;
}
.card:hover,
.card:focus {
  background: rgba(75, 116, 231, 0.25);
}

/* dim cards that are not being hovered/focused */
.card:hover ~ .card,
.card:has(~ .card:hover),
.card:focus-visible ~ .card,
.card:has(~ .card:focus-visible) {
  opacity: 0.4;
}

.card-header {
  margin-bottom: 1.5rem;
}
</style>
