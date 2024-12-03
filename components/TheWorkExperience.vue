<script setup lang="ts">
import experiences from '@/config/experience';
</script>

<template>
  <AppSection title="Experience">
    <AppCard
      v-for="{
        company,
        title,
        date,
        description,
        technologies,
        externalLink,
      } in experiences"
      class="card"
      :date
      :key="company"
      :header="company"
      :subheader="title"
      :description
      :technologies
      :externalLink
    />

    <template #footer>
      <AppLinkText
        link="/resume.pdf"
        text="View Full Resumé"
      />
    </template>
  </AppSection>
</template>
