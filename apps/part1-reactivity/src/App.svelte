<script lang="ts">
  import Links from './Links.svelte';
  import Assignments from './1. Assignments/App.svelte';
  import Declarations from './2. Declarations/App.svelte';
  import Statements from './3. Statements/App.svelte';
  import UpdatingArraysAndObjects from './4. Updating arrays and objects/App.svelte';
  import Router from 'svelte-spa-router';

  const routes = {
    '/': Assignments,
    '/assignments': Assignments,
    '/declarations': Declarations,
    '/statements': Statements,
    '/updating-arrays-and-objects': UpdatingArraysAndObjects,
  };
</script>

<main>
  <Links />
  <Router {routes} />
</main>
