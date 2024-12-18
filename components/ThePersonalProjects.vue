<script setup lang="ts">
import projects from '~/content/projects';
</script>

<template>
  <AppSection title="Projects">
    <AppCard
      v-for="{ title, date, description, technologies, externalLink } in projects"
      :key="title"
      :header="title"
      :date
      :description
      :technologies
      :externalLink
    />
  </AppSection>
</template>
