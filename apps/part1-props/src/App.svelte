<script lang="ts">
  import Links from './Links.svelte';
  import DeclaringProps from './1. Declaring props/App.svelte';
  import DefaultValues from './2. Default values/App.svelte';
  import SpreadProps from './3. Spread props/App.svelte';
  import Router from 'svelte-spa-router';

  const routes = {
    '/': DeclaringProps,
    '/declaring-props': DeclaringProps,
    '/default-values': DefaultValues,
    '/spread-props': SpreadProps,
  };
</script>

<main>
  <Links />
  <Router {routes} />
</main>
