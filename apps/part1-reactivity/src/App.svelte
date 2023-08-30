<script lang="ts">
  import { Links } from '@nx-svelte-study/atoms';
  import Assignments from './1. Assignments/Assignments.svelte';
  import Declarations from './2. Declarations/Declarations.svelte';
  import Statements from './3. Statements/Statements.svelte';
  import UpdatingArraysAndObjects from './4. Updating arrays and objects/UpdatingArraysAndObjects.svelte';
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
