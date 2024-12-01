<script setup lang="ts">
import { NDivider } from 'naive-ui';

const props = defineProps<{ title: string }>();
</script>

<template>
  <section class="section">
    <n-divider title-placement="left">
      <h2 class="section-header">
        {{ props.title }}
      </h2>
    </n-divider>

    <div class="section-content">
      <slot />
    </div>

    <slot name="footer" />
  </section>
</template>

<style scoped>
.section {
  max-width: 100%;
}
.section-header {
  font-size: 2rem;
}
.section-content {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media (min-width: 600px) {
  .section-header {
    font-size: 3rem;
  }
}
</style>
