import { setup } from '@css-render/vue3-ssr';

// https://www.reddit.com/r/Nuxt/comments/170ree2/my_naiveui_elements_dont_load_instantly/
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server && nuxtApp.ssrContext) {
    const { collect } = setup(nuxtApp.vueApp);

    nuxtApp.ssrContext.head.push({
      style: () =>
        collect()
          .split('</style>')
          .map((block) => {
            const id = RegExp(/cssr-id="(.+?)"/).exec(block)?.[1];
            const style = (RegExp(/>(.*)/s).exec(block)?.[1] ?? '').trim();
            return {
              'cssr-id': id,
              innerHTML: style,
            };
          }),
    });
  }
});
