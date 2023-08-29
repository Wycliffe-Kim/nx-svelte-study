<script lang="ts">
import Links from './Links.svelte';
import WelcomeToSvelte from './WelcomeToSvelte/App.svelte';
import Router from 'svelte-spa-router';

const routes = {
  '/': WelcomeToSvelte,
  '/welcome-to-svelte': WelcomeToSvelte,
};
</script>

<main>
  <Links />
  <Router {routes} />
</main>
