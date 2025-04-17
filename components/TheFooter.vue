<script setup lang="ts">
import { NP } from 'naive-ui';
</script>

<template>
  <footer>
    <small>
      <n-p :depth="2">
        Lovingly crafted with
        <AppLinkText
          class="link"
          link="https://vuejs.org/"
          text="Vue"
        />
        and
        <AppLinkText
          class="link"
          link="https://www.naiveui.com/en-US/os-theme"
          text="Naive UI"
        />
      </n-p>
    </small>
  </footer>
</template>

<style scoped>
small,
.link {
  font-size: 1.1em;
  color: black;
}
</style>
