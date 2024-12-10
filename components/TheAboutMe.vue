<script setup lang="ts">
import { NH1, NH2, NP } from 'naive-ui';
import { LogoGithub, LogoLinkedin } from '@vicons/ionicons5';
</script>

<template>
  <section>
    <n-h1 class="header">Harry Nguyen</n-h1>
    <n-h2 class="subheader">Software Engineer</n-h2>
    <n-p class="about-me">
      Hey there! I'm a software engineer passionate about creating applications for the
      good of others. One of the things I enjoy most about creating software is being able
      to build complex structures in a simple way. I find great satisfaction in the little
      details such as making things as simple and clean as they can be so that they can
      best serve users and other developers.
      <br /><br />
      Currently, I am looking for new-grad roles as I graduate from Simon Fraser
      University in the Spring of 2025. In the past I have committed to two 8-month co-op
      placements at Motorola Solutions and ICBC.
      <br /><br />
      In my spare time, I also dabble with personal projects, where I take the opportunity
      to learn new things that I wouldn't have during school or work. Because of this, I
      am able to work with exciting technologies such as Rust, programming language
      interpreters, and new web frameworks like Svelte. Some of the things I look forward
      to learning more about are the Elixir programming language, web accessability, and
      compilers/interpreters.
      <br /><br />
      Aside from coding, I enjoy playing video games, basketball, weightlifting,
      collecting matcha powders, and more!
    </n-p>

    <nav
      class="links"
      aria-label="site navigation"
    >
      <AppLinkIcon
        :size="25"
        :component="LogoGithub"
        iconAltText="GitHub Logo"
        aria-label="Link to personal GitHub account"
        link="https://github.com/hln33"
      />
      <AppLinkIcon
        :size="25"
        :component="LogoLinkedin"
        iconAltText="LinkedIn Logo"
        aria-label="Link to LinkedIn account"
        link="https://www.linkedin.com/in/hln33/"
      />
    </nav>
  </section>
</template>

<style scoped>
.header {
  font-size: 2.5rem;
  margin-bottom: 0;
}
.subheader {
  font-size: 1.5rem;
  margin-top: 0;
}
.about-me {
  font-size: 0.9rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.links {
  display: flex;
  gap: 1.5rem;
}

@media (min-width: 600px) {
  .header {
    font-size: 3.5rem;
  }
  .subheader {
    font-size: 2rem;
  }
  .about-me {
    font-size: 0.9rem;
  }
}
</style>
