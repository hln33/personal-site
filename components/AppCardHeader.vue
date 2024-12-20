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
  <div class="container">
    <n-h3 class="main-header">
      <a
        class="title"
        :href="props.externalLink"
        target="_blank"
      >
        {{ props.header }}
      </a>

      <template v-if="props.subheader">
        · <n-text class="sub-header"> {{ props.subheader }} </n-text>
      </template>
    </n-h3>

    <n-h4 class="date">
      <n-text>
        {{ props.date }}
      </n-text>
    </n-h4>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}

.main-header {
  margin: 0;
  font-size: 1.3rem;
}

.sub-header {
  display: inline-block;
}

.title {
  color: inherit;
  text-decoration: none;
}
.title:focus {
  /* the entire card is outlined instead */
  outline: none;
}

.date {
  margin: 0;
  font-size: 1rem;
  max-width: 60%;
  opacity: 0.75;
}
</style>
