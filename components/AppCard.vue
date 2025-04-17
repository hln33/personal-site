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

const redirect = (e: Event) => {
  e.preventDefault();
  window.open(props.externalLink);
};
</script>

<template>
  <NCard
    class="card"
    :bordered="false"
    hoverable
    @click="redirect($event)"
  >
    <AppCardHeader
      class="card-header"
      :header="props.header"
      :subheader="props.subheader"
      :date="props.date"
      :externalLink="props.externalLink"
    />

    <AppCardBody
      :description="props.description"
      :technologies="props.technologies"
    />
  </NCard>
</template>

<style scoped>
.card {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  background: rgba(160, 175, 230, 0.5);
  transition: opacity 0.5s;
  cursor: pointer;
}
.card:hover,
.card:focus-within {
  background: rgba(160, 175, 230, 0.9);
}

/* dim cards that are not being hovered/focused */
.card:hover ~ .card,
.card:has(~ .card:hover),
.card:focus-within ~ .card,
.card:has(~ .card:focus-within) {
  opacity: 0.4;
}

.card-header {
  margin-bottom: 1.5rem;
}
</style>
