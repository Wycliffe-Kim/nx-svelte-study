<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import Assignments from './1. Assignments/App.svelte';
  import Declarations from './2. Declarations/App.svelte';
  import Statements from './3. Statements/App.svelte';
  import UpdatingArraysAndObjects from './4. Updating arrays and objects/App.svelte';
</script>

<Links
  headTitle="Part 1: Reactivity"
  titles="{{
    '/': 'Home',
    '/assignments': 'Assignments',
    '/declarations': 'Declarations',
    '/statements': 'Statements',
    '/updating-arrays-and-objects': 'Updating arrays and objects',
  }}"
  routes="{{
    '/': Assignments,
    '/assignments': Assignments,
    '/declarations': Declarations,
    '/statements': Statements,
    '/updating-arrays-and-objects': UpdatingArraysAndObjects,
  }}"
/>
