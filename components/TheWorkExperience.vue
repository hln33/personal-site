<script setup lang="ts">
import experiences from '~/content/experience';
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
      :key="company"
      class="card"
      :date
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
