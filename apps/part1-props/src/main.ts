import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
  props: {
    name: 'part1-props',
  },
});

export default app;