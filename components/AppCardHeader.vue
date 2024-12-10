<script setup lang="ts">
import { NText, NH3, NH4 } from 'naive-ui';

const props = defineProps<{
  header: string;
  subheader?: string;
  date: string;
}>();
</script>

<template>
  <div>
    <n-h3 class="header">
      <n-text
        class="title"
        depth="1"
      >
        {{ props.header }}
      </n-text>
      <n-text
        class="date"
        depth="2"
      >
        {{ props.date }}
      </n-text>
    </n-h3>

    <n-h4
      v-if="props.subheader"
      class="subheader"
    >
      <n-text depth="2">
        {{ props.subheader }}
      </n-text>
    </n-h4>
  </div>
</template>

<style scoped>
.header {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 1.2rem;
  max-width: 65%;
}
.date {
  font-size: 0.8rem;
}

.subheader {
  margin: 0;
  font-size: 0.8rem;
  max-width: 60%;
}

@media (min-width: 600px) {
  .title {
    font-size: 1.8rem;
    max-width: 75%;
  }
  .date {
    font-size: 1rem;
  }
  .subheader {
    font-size: 1.1rem;
  }
}
</style>
