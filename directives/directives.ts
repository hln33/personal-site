export const vPreventFocusOnClick = {
  mounted: (el: HTMLElement) =>
    el.addEventListener('mousedown', (e) => e.preventDefault()),
};
