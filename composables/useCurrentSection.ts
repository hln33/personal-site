import { onMounted, onUnmounted, ref } from 'vue';

export const useCurrentSection = (sectionIDs: string[]) => {
  const currentSection = ref('');

  let observer: IntersectionObserver;
  onMounted(() => {
    observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection.value = entry.target.id;
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIDs.forEach((id) => {
      const el = document.querySelector(`#${id}`);
      if (!el) {
        console.warn('Unknown ID for element being observed:', id);
        return;
      }

      observer.observe(el);
    });
  });

  onUnmounted(() => {
    observer.disconnect();
  });

  return currentSection;
};
