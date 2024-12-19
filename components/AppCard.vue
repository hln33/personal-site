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
  background: rgba(180, 190, 230, 0.8);
  transition: opacity 0.5s;
  cursor: pointer;
}
.card:hover,
.card:focus-within {
  background: rgba(180, 190, 230, 1);
}

/* dim cards that are not being hovered/focu  sed */
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
