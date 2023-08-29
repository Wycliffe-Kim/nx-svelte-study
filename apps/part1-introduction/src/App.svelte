<script lang="ts">
  import Links from './Links.svelte';
  import WelcomeToSvelte from './1. Welcome to Svelte/App.svelte';
  import YourFirstComponent from './2. Your first component/App.svelte';
  import DynamicAttributes from './3. Dynamic attributes/App.svelte';
  import Styling from './4. Styling/App.svelte';
  import Router from 'svelte-spa-router';

  const routes = {
    '/': WelcomeToSvelte,
    '/welcome-to-svelte': WelcomeToSvelte,
    '/your-first-component': YourFirstComponent,
    '/dynamic-attributes': DynamicAttributes,
    '/styling': Styling,
  };
</script>

<main>
  <Links />
  <Router {routes} />
</main>
