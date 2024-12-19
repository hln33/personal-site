<script setup lang="ts">
import { NText, NH3, NH4 } from 'naive-ui';

const props = defineProps<{
  header: string;
  subheader?: string;
  date: string;
  externalLink: string;
}>();
</script>

<template>
  <div>
    <n-h3 class="header">
      <a
        class="title"
        :href="props.externalLink"
        target="_blank"
      >
        {{ props.header }}
      </a>
      <n-text class="date">
        {{ props.date }}
      </n-text>
    </n-h3>

    <n-h4
      v-if="props.subheader"
      class="subheader"
    >
      <n-text class="subheader-text">
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

  color: inherit;
  text-decoration: none;
}
.title:focus {
  /* the entire card is outlined instead */
  outline: none;
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
